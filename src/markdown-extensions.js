const alertLabels = {
  NOTE: 'Note',
  TIP: 'Astuce',
  IMPORTANT: 'Important',
  WARNING: 'Attention',
  CAUTION: 'Danger',
};

function alertPlugin(markdown) {
  markdown.core.ruler.after('inline', 'markdown-editor-alerts', (state) => {
    const tokens = state.tokens;

    for (let index = 0; index < tokens.length; index += 1) {
      const open = tokens[index];
      if (open.type !== 'blockquote_open') continue;

      const closeIndex = tokens.findIndex(
        (token, tokenIndex) => tokenIndex > index && token.type === 'blockquote_close' && token.level === open.level,
      );
      if (closeIndex < 0) continue;

      const inlineIndex = tokens.findIndex(
        (token, tokenIndex) => tokenIndex > index && tokenIndex < closeIndex && token.type === 'inline',
      );
      if (inlineIndex < 0) continue;

      const inlineToken = tokens[inlineIndex];
      const match = inlineToken.content.match(/^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\](?:[ \t]*\r?\n[ \t]*|[ \t]+)?([\s\S]*)$/i);
      if (!match) continue;

      const alertType = match[1].toUpperCase();
      const remainingText = match[2].trim();
      open.meta = { ...open.meta, alertType };
      tokens[closeIndex].meta = { ...tokens[closeIndex].meta, alertType };

      if (remainingText) {
        inlineToken.content = remainingText;
        inlineToken.children = [];
        state.md.inline.parse(remainingText, state.md, state.env, inlineToken.children);
      } else {
        tokens.splice(inlineIndex - 1, 3);
      }

      index = closeIndex - (remainingText ? 0 : 3);
    }
  });

  markdown.renderer.rules.blockquote_open = (tokens, index, options, environment, renderer) => {
    const alertType = tokens[index].meta?.alertType;
    if (!alertType) return renderer.renderToken(tokens, index, options);
    const label = alertLabels[alertType];
    return `<div class="markdown-alert markdown-alert-${alertType.toLowerCase()}">\n<p class="markdown-alert-title">${label}</p>\n`;
  };

  markdown.renderer.rules.blockquote_close = (tokens, index, options, environment, renderer) => {
    if (tokens[index].meta?.alertType) return '</div>\n';
    return renderer.renderToken(tokens, index, options);
  };
}

function headingText(inlineToken) {
  return (inlineToken.children ?? [])
    .filter((token) => ['text', 'code_inline', 'emoji', 'html_inline'].includes(token.type))
    .map((token) => token.content)
    .join('')
    .trim();
}

function headingSlug(text) {
  return text
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^\p{L}\p{N}_ -]/gu, '')
    .trim()
    .replace(/\s+/g, '-');
}

function tableOfContentsPlugin(markdown) {
  markdown.core.ruler.after('markdown-editor-alerts', 'markdown-editor-toc', (state) => {
    const tokens = state.tokens;
    const headings = [];
    const slugs = new Map();

    for (let index = 0; index < tokens.length; index += 1) {
      const token = tokens[index];
      if (token.type !== 'heading_open') continue;
      const inlineToken = tokens[index + 1];
      if (inlineToken?.type !== 'inline') continue;

      const text = headingText(inlineToken);
      const baseSlug = headingSlug(text) || 'section';
      const occurrence = slugs.get(baseSlug) ?? 0;
      slugs.set(baseSlug, occurrence + 1);
      const slug = occurrence === 0 ? baseSlug : `${baseSlug}-${occurrence}`;
      token.attrSet('id', slug);
      headings.push({ slug, text, level: Number(token.tag.slice(1)) });
    }

    for (let index = 0; index < tokens.length - 2; index += 1) {
      const inlineToken = tokens[index + 1];
      if (
        tokens[index].type !== 'paragraph_open' ||
        inlineToken.type !== 'inline' ||
        tokens[index + 2].type !== 'paragraph_close' ||
        inlineToken.content.trim().toLowerCase() !== '[toc]'
      ) {
        continue;
      }

      const entries = headings
        .map(({ slug, text, level }) => (
          `<li class="markdown-toc-level-${level}"><a href="#${markdown.utils.escapeHtml(slug)}">${markdown.utils.escapeHtml(text)}</a></li>`
        ))
        .join('\n');
      const tocToken = new state.Token('html_block', '', 0);
      tocToken.block = true;
      tocToken.map = tokens[index].map;
      tocToken.content = `<nav class="markdown-toc" aria-label="Sommaire">\n<ul>\n${entries}\n</ul>\n</nav>\n`;
      tokens.splice(index, 3, tocToken);
      index += 1;
    }
  });
}

function detailsBlock(state, startLine, endLine, silent) {
  const firstLineStart = state.bMarks[startLine] + state.tShift[startLine];
  const firstLine = state.src.slice(firstLineStart, state.eMarks[startLine]).trim();
  if (!/^<details\s*>$/i.test(firstLine)) return false;

  let closeLine = startLine + 1;
  while (closeLine < endLine) {
    const lineStart = state.bMarks[closeLine] + state.tShift[closeLine];
    const line = state.src.slice(lineStart, state.eMarks[closeLine]).trim();
    if (/^<\/details\s*>$/i.test(line)) break;
    closeLine += 1;
  }
  if (closeLine >= endLine) return false;
  if (silent) return true;

  const detailsOpen = state.push('details_open', 'details', 1);
  detailsOpen.block = true;
  detailsOpen.map = [startLine, closeLine + 1];

  let summaryLine = -1;
  let summaryText = 'Détails';
  for (let lineIndex = startLine + 1; lineIndex < closeLine; lineIndex += 1) {
    const lineStart = state.bMarks[lineIndex] + state.tShift[lineIndex];
    const line = state.src.slice(lineStart, state.eMarks[lineIndex]).trim();
    const summaryMatch = line.match(/^<summary>([\s\S]*?)<\/summary>$/i);
    if (summaryMatch) {
      summaryLine = lineIndex;
      summaryText = summaryMatch[1];
      break;
    }
  }

  const summaryOpen = state.push('summary_open', 'summary', 1);
  summaryOpen.block = true;
  const inline = state.push('inline', '', 0);
  inline.content = summaryText;
  inline.children = [];
  const summaryClose = state.push('summary_close', 'summary', -1);
  summaryClose.block = true;

  const bodyStart = summaryLine === -1 ? startLine + 1 : summaryLine + 1;
  if (bodyStart < closeLine) {
    state.md.block.tokenize(state, bodyStart, closeLine);
  }

  const detailsClose = state.push('details_close', 'details', -1);
  detailsClose.block = true;
  state.line = closeLine + 1;
  return true;
}

function detailsPlugin(markdown) {
  markdown.block.ruler.before('html_block', 'markdown-editor-details', detailsBlock, {
    alt: ['paragraph', 'reference', 'blockquote', 'list'],
  });
}

export { alertPlugin, detailsPlugin, tableOfContentsPlugin };
