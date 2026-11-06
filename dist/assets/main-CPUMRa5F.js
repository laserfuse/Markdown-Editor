import"./style-BPSCewVD.js";import{m as p,r as v}from"./katex.min-CWDJechQ.js";const w=`# Mon super projet

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
`,t=document.querySelector("#markdown-input"),d=document.querySelector("#markdown-preview"),s=document.querySelector("#file-input"),y=document.querySelector("#filename"),f=document.querySelector("#edited-indicator"),b=document.querySelector("#editor-stats"),l=document.querySelector("#editor-wrap"),g=document.querySelector("#drop-overlay"),c=document.querySelector("#toast"),a=document.querySelector("#preview-mode-button");let i="README.md",m;function u(){d.innerHTML=p.render(t.value),v(d),b.textContent=`${t.value?t.value.split(/\r\n|\r|\n/).length:0} lignes · ${t.value.trim()?t.value.trim().split(/\s+/).length:0} mots`,f.hidden=!0}function o(e){c.textContent=e,c.classList.add("visible"),window.clearTimeout(m),m=window.setTimeout(()=>c.classList.remove("visible"),2200)}function L(e){if(!e)return;if(!(/\.(md|markdown|mdown|mkd|txt)$/i.test(e.name)||e.type==="text/markdown"||e.type==="text/plain")){o("Choisissez un fichier Markdown (.md).");return}const n=new FileReader;n.addEventListener("load",()=>{t.value=typeof n.result=="string"?n.result:"",i=e.name,y.textContent=i,u(),o(`${i} ouvert`)}),n.addEventListener("error",()=>o("Impossible de lire ce fichier.")),n.readAsText(e)}t.value=w;u();function k(){const e=document.body.classList.toggle("preview-mode");a.setAttribute("aria-pressed",String(e)),a.querySelector("span").textContent=e?"Quitter le plein écran":"Plein écran",a.title=e?"Quitter le plein écran (Échap)":"Afficher l’aperçu en plein écran"}a.addEventListener("click",k);document.addEventListener("keydown",e=>{e.key==="Escape"&&document.body.classList.contains("preview-mode")&&k()});t.addEventListener("input",()=>{f.hidden=!1,d.innerHTML=p.render(t.value),v(d),b.textContent=`${t.value?t.value.split(/\r\n|\r|\n/).length:0} lignes · ${t.value.trim()?t.value.trim().split(/\s+/).length:0} mots`});document.querySelector("#open-button").addEventListener("click",()=>s.click());s.addEventListener("change",()=>{var e;L((e=s.files)==null?void 0:e[0]),s.value=""});document.querySelector("#download-button").addEventListener("click",()=>{const e=new Blob([t.value],{type:"text/markdown;charset=utf-8"}),r=URL.createObjectURL(e),n=document.createElement("a");n.href=r,n.download=i||"README.md",document.body.append(n),n.click(),n.remove(),URL.revokeObjectURL(r),o(`${n.download} téléchargé`)});document.querySelector("#copy-button").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(t.value),o("Markdown copié dans le presse-papiers")}catch{t.focus(),t.select();const e=document.execCommand("copy");t.setSelectionRange(t.value.length,t.value.length),o(e?"Markdown copié dans le presse-papiers":"Copie impossible dans ce navigateur")}});document.querySelector("#reset-button").addEventListener("click",()=>{t.value=w,i="README.md",y.textContent=i,u(),o("Exemple réinitialisé")});for(const e of["dragenter","dragover"])l.addEventListener(e,r=>{r.preventDefault(),g.classList.add("visible")});for(const e of["dragleave","drop"])l.addEventListener(e,r=>{r.preventDefault(),!(e==="dragleave"&&l.contains(r.relatedTarget))&&g.classList.remove("visible")});l.addEventListener("drop",e=>{var r;return L((r=e.dataTransfer)==null?void 0:r.files[0])});
