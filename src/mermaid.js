const renderVersions = new WeakMap();
let mermaidPromise;
let nextDiagramId = 0;

async function loadMermaid() {
  if (!mermaidPromise) {
    mermaidPromise = import('mermaid').then(({ default: mermaid }) => {
      mermaid.initialize({
        startOnLoad: false,
        securityLevel: 'strict',
        theme: 'default',
      });
      return mermaid;
    });
  }
  return mermaidPromise;
}

async function renderMermaid(container) {
  const diagrams = [...container.querySelectorAll('.mermaid-diagram')];
  if (!diagrams.length) return;

  try {
    const mermaid = await loadMermaid();
    await Promise.all(diagrams.map(async (diagram) => {
      const version = (renderVersions.get(diagram) ?? 0) + 1;
      renderVersions.set(diagram, version);
      const source = diagram.textContent ?? '';

      try {
        const { svg, bindFunctions } = await mermaid.render(`markdown-editor-diagram-${nextDiagramId++}`, source);
        if (!diagram.isConnected || renderVersions.get(diagram) !== version) return;
        diagram.innerHTML = svg;
        bindFunctions?.(diagram);
      } catch (error) {
        if (!diagram.isConnected || renderVersions.get(diagram) !== version) return;
        console.error('Unable to render Mermaid diagram.', error);
        diagram.classList.add('mermaid-diagram-error');
        diagram.textContent = 'Impossible d’afficher ce diagramme. Vérifie sa syntaxe Mermaid dans l’éditeur.';
      }
    }));
  } catch (error) {
    console.error('Unable to load Mermaid diagram renderer.', error);
    for (const diagram of diagrams) {
      diagram.classList.add('mermaid-diagram-error');
      diagram.textContent = 'Le moteur de diagrammes Mermaid n’a pas pu être chargé.';
    }
  }
}

export default renderMermaid;
