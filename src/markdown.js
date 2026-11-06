import MarkdownIt from 'markdown-it';
import { full as emoji } from 'markdown-it-emoji';
import footnote from 'markdown-it-footnote';
import texmath from 'markdown-it-texmath';
import katex from 'katex';
import taskLists from 'markdown-it-task-lists';
import hljs from 'highlight.js/lib/core';
import bash from 'highlight.js/lib/languages/bash';
import css from 'highlight.js/lib/languages/css';
import diff from 'highlight.js/lib/languages/diff';
import javascript from 'highlight.js/lib/languages/javascript';
import json from 'highlight.js/lib/languages/json';
import markdownLanguage from 'highlight.js/lib/languages/markdown';
import python from 'highlight.js/lib/languages/python';
import sql from 'highlight.js/lib/languages/sql';
import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';
import yaml from 'highlight.js/lib/languages/yaml';
import { alertPlugin, detailsPlugin, tableOfContentsPlugin } from './markdown-extensions.js';

hljs.registerLanguage('bash', bash);
hljs.registerLanguage('css', css);
hljs.registerLanguage('diff', diff);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('json', json);
hljs.registerLanguage('markdown', markdownLanguage);
hljs.registerLanguage('python', python);
hljs.registerLanguage('sql', sql);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('yaml', yaml);

const markdown = new MarkdownIt({
  html: false,
  linkify: true,
  typographer: true,
  highlight(code, language) {
    if (language && hljs.getLanguage(language)) {
      try {
        return `<pre class="hljs"><code>${hljs.highlight(code, { language }).value}</code></pre>`;
      } catch {
      }
    }

    return `<pre class="hljs"><code>${markdown.utils.escapeHtml(code)}</code></pre>`;
  },
})
  .use(taskLists, { enabled: true, label: true })
  .use(emoji)
  .use(footnote)
  .use(texmath, {
    engine: katex,
    delimiters: 'dollars',
    katexOptions: { throwOnError: false },
  })
  .use(detailsPlugin)
  .use(alertPlugin)
  .use(tableOfContentsPlugin);

const defaultFenceRenderer = markdown.renderer.rules.fence;
markdown.renderer.rules.fence = (tokens, index, options, environment, renderer) => {
  const token = tokens[index];
  if (token.info.trim().split(/\s+/, 1)[0].toLowerCase() === 'mermaid') {
    return `<div class="mermaid-diagram" role="img" aria-label="Diagramme Mermaid">${markdown.utils.escapeHtml(token.content)}</div>\n`;
  }

  return defaultFenceRenderer
    ? defaultFenceRenderer(tokens, index, options, environment, renderer)
    : renderer.renderToken(tokens, index, options);
};

export default markdown;
