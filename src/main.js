import 'highlight.js/styles/github.css';
import 'katex/dist/katex.min.css';
import './style.css';
import markdown from './markdown.js';
import renderMermaid from './mermaid.js';

const starterMarkdown = `# Mon super projet

> Une courte description de ce que fait votre projet et pourquoi il est utile.

## Installation

\`\`\`bash
npm install mon-super-projet
\`\`\`

## Utilisation

\`\`\`js
import { salut } from 'mon-super-projet';

salut('le monde');
\`\`\`

## Fonctionnalités

- Facile à utiliser
- Rapide et léger
- Fonctionne partout

## Avancement

- [x] Créer le projet
- [x] Écrire la documentation
- [ ] Publier la première version

## API

| Méthode | Description | Retour |
| --- | --- | --- |
| \`salut(nom)\` | Affiche un message de bienvenue | \`string\` |
| \`version()\` | Retourne la version actuelle | \`string\` |

## Contribuer

Les contributions sont les bienvenues ! Ouvrez une **issue** ou proposez une *pull request*.

## Licence

Distribué sous licence [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/).
`;

const input = document.querySelector('#markdown-input');
const preview = document.querySelector('#markdown-preview');
const fileInput = document.querySelector('#file-input');
const filename = document.querySelector('#filename');
const editedIndicator = document.querySelector('#edited-indicator');
const editorStats = document.querySelector('#editor-stats');
const editorWrap = document.querySelector('#editor-wrap');
const dropOverlay = document.querySelector('#drop-overlay');
const toast = document.querySelector('#toast');
const previewModeButton = document.querySelector('#preview-mode-button');

let currentFilename = 'README.md';
let toastTimeout;

function render() {
  preview.innerHTML = markdown.render(input.value);
  renderMermaid(preview);
  editorStats.textContent = `${input.value ? input.value.split(/\r\n|\r|\n/).length : 0} lignes · ${input.value.trim() ? input.value.trim().split(/\s+/).length : 0} mots`;
  editedIndicator.hidden = true;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('visible');
  window.clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => toast.classList.remove('visible'), 2200);
}

function loadFile(file) {
  if (!file) return;
  const isMarkdown = /\.(md|markdown|mdown|mkd|txt)$/i.test(file.name) || file.type === 'text/markdown' || file.type === 'text/plain';

  if (!isMarkdown) {
    showToast('Choisissez un fichier Markdown (.md).');
    return;
  }

  const reader = new FileReader();
  reader.addEventListener('load', () => {
    input.value = typeof reader.result === 'string' ? reader.result : '';
    currentFilename = file.name;
    filename.textContent = currentFilename;
    render();
    showToast(`${currentFilename} ouvert`);
  });
  reader.addEventListener('error', () => showToast('Impossible de lire ce fichier.'));
  reader.readAsText(file);
}

input.value = starterMarkdown;
render();

function togglePreviewMode() {
  const isExpanded = document.body.classList.toggle('preview-mode');
  previewModeButton.setAttribute('aria-pressed', String(isExpanded));
  previewModeButton.querySelector('span').textContent = isExpanded ? 'Quitter le plein écran' : 'Plein écran';
  previewModeButton.title = isExpanded ? 'Quitter le plein écran (Échap)' : 'Afficher l’aperçu en plein écran';
}

previewModeButton.addEventListener('click', togglePreviewMode);
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && document.body.classList.contains('preview-mode')) {
    togglePreviewMode();
  }
});

input.addEventListener('input', () => {
  editedIndicator.hidden = false;
  preview.innerHTML = markdown.render(input.value);
  renderMermaid(preview);
  editorStats.textContent = `${input.value ? input.value.split(/\r\n|\r|\n/).length : 0} lignes · ${input.value.trim() ? input.value.trim().split(/\s+/).length : 0} mots`;
});

document.querySelector('#open-button').addEventListener('click', () => fileInput.click());
fileInput.addEventListener('change', () => {
  loadFile(fileInput.files?.[0]);
  fileInput.value = '';
});

document.querySelector('#download-button').addEventListener('click', () => {
  const blob = new Blob([input.value], { type: 'text/markdown;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = currentFilename || 'README.md';
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast(`${link.download} téléchargé`);
});

document.querySelector('#copy-button').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(input.value);
    showToast('Markdown copié dans le presse-papiers');
  } catch {
    input.focus();
    input.select();
    const copied = document.execCommand('copy');
    input.setSelectionRange(input.value.length, input.value.length);
    showToast(copied ? 'Markdown copié dans le presse-papiers' : 'Copie impossible dans ce navigateur');
  }
});

document.querySelector('#reset-button').addEventListener('click', () => {
  input.value = starterMarkdown;
  currentFilename = 'README.md';
  filename.textContent = currentFilename;
  render();
  showToast('Exemple réinitialisé');
});

for (const eventName of ['dragenter', 'dragover']) {
  editorWrap.addEventListener(eventName, (event) => {
    event.preventDefault();
    dropOverlay.classList.add('visible');
  });
}
for (const eventName of ['dragleave', 'drop']) {
  editorWrap.addEventListener(eventName, (event) => {
    event.preventDefault();
    if (eventName === 'dragleave' && editorWrap.contains(event.relatedTarget)) return;
    dropOverlay.classList.remove('visible');
  });
}
editorWrap.addEventListener('drop', (event) => loadFile(event.dataTransfer?.files[0]));
