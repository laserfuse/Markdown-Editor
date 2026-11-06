import"./style-BPSCewVD.js";import{m as g,r as h}from"./katex.min-CWDJechQ.js";const b=[{id:"titres",title:"Titres",description:"Utilise un à six dièses. Le nombre de dièses indique le niveau du titre.",source:`# Titre niveau 1
## Titre niveau 2
### Titre niveau 3`},{id:"paragraphes",title:"Paragraphes et retours à la ligne",description:"Une ligne vide sépare les paragraphes. Un antislash visible en fin de ligne force un saut de ligne.",source:`Premier paragraphe.

Deuxième paragraphe, séparé par une ligne vide.

Un retour à la ligne\\
avec un antislash visible dans la syntaxe.`},{id:"emphase",title:"Mise en forme du texte",description:"Combine les marqueurs pour mettre en évidence les mots importants.",source:`**Gras**

*Italique*

~~Barré~~

***Gras et italique***`},{id:"listes",title:"Listes",description:"Les listes peuvent être non ordonnées, numérotées et imbriquées.",source:`- Premier élément
- Deuxième élément
  - Sous-élément

1. Première étape
2. Deuxième étape`},{id:"taches",title:"Cases à cocher",description:"Les listes de tâches sont une extension GitHub pratique pour suivre un projet.",source:`- [x] Tâche terminée
- [ ] Tâche à faire`},{id:"liens",title:"Liens",description:"Ajoute un lien direct, une URL automatique ou une référence définie à part.",source:`[Documentation Markdown](https://www.markdownguide.org/)

https://example.com

[Guide de référence][guide]

[guide]: https://www.markdownguide.org/`},{id:"images",title:"Images",description:"Les images peuvent utiliser un chemin ou une URL, directement ou via une référence définie à part. Enveloppe-les dans un lien pour les rendre cliquables.",source:`![Logo de Markdown Editor][logo]

[![Python 3.12+][python-badge]](https://www.python.org/)

[logo]: ./site-logo.png "Logo du projet"
[python-badge]: https://img.shields.io/badge/Python-3.12%2B-3776AB?logo=python&logoColor=white "Version Python"`},{id:"ancres",title:"Liens internes et ancres",description:"Un lien vers le titre utilise son identifiant d’ancre. Cet aperçu génère les identifiants des titres, y compris avec des accents.",source:"[Aller à la première installation](#premiere-installation)\n\n## Première installation\n\nAjoute un `#` avant le titre normalisé : les accents et espaces deviennent `premiere-installation`."},{id:"citations",title:"Citations",description:"Commence une citation avec le signe supérieur. Tu peux aussi imbriquer les citations.",source:`> Une citation simple.
>
> > Une citation imbriquée.`},{id:"sommaire",title:"Sommaire",description:"Place [TOC] sur une ligne seule pour générer des liens vers les titres du document.",source:`[TOC]

## Installation

## Utilisation

### Exemple`},{id:"alertes",title:"Alertes GitHub",description:"Les alertes mettent en évidence une information dans une citation. Les types acceptés sont NOTE, TIP, IMPORTANT, WARNING et CAUTION.",source:`> [!NOTE]
> Information utile.

> [!TIP]
> Une astuce pratique.

> [!IMPORTANT]
> À retenir.

> [!WARNING]
> À utiliser avec précaution.

> [!CAUTION]
> Cette action est irréversible.`},{id:"code",title:"Code",description:"Utilise des accents graves pour le code dans une phrase. Après les trois accents, indique le langage pour activer la coloration syntaxique.",source:'La commande `npm run dev` démarre le site.\n\n```js\nfunction salut(nom) {\n  return `Bonjour ${nom} !`;\n}\n```\n\n```python\ndef salut(nom):\n    return f"Bonjour {nom} !"\n```\n\n```json\n{\n  "nom": "Markdown Editor",\n  "actif": true\n}\n```\n\n```bash\nnpm run build\n```'},{id:"tableaux",title:"Tableaux",description:"Sépare les colonnes avec des barres verticales. Les deux-points règlent l’alignement.",source:`| Aligné à gauche | Centré | Aligné à droite |
| :--- | :---: | ---: |
| Texte | Au milieu | 42 |
| Exemple | Markdown | 100 |`},{id:"notes",title:"Notes de bas de page",description:"Ajoute une référence dans le texte et écris son contenu plus bas dans le document.",source:`Markdown prend en charge les notes[^source].

[^source]: Voici le texte de la note de bas de page.`},{id:"emoji",title:"Emoji",description:"Insère des emoji avec leur nom entre deux-points, comme sur GitHub.",source:`Lancement : :rocket: :tada:

Validé : :white_check_mark:`},{id:"details",title:"Détails repliables",description:"Utilise les balises HTML details et summary pour afficher une section repliable. Le HTML brut reste désactivé dans les autres cas.",source:`<details>

<summary>Afficher plus</summary>

Contenu masqué avec **Markdown**, une liste ou du code.

- Premier élément
- Deuxième élément

</details>`},{id:"mermaid",title:"Diagrammes Mermaid",description:"Un bloc de code identifié par mermaid devient un diagramme. Les diagrammes s’affichent également dans GitHub.",source:"```mermaid\ngraph LR\n  A[Écrire en Markdown] --> B{Prêt ?}\n  B -->|Oui| C[Publier le README]\n  B -->|Pas encore| A\n```"},{id:"mathematiques",title:"Formules mathématiques",description:"Entoure une formule avec un dollar pour l’insérer dans une phrase, ou trois dollars pour un affichage centré sur plusieurs lignes.",source:`Formule en ligne : $E = mc^2$.

$$
\\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}
$$`},{id:"references-github",title:"Références GitHub",description:"GitHub peut relier automatiquement les mentions et références courtes au dépôt courant. Dans cet aperçu sans dépôt associé, elles restent du texte ; utilise des URL complètes pour créer de vrais liens.",source:`Mention : @octocat

Issue : #123 · Pull request : owner/repo#42

Commit : \`a1b2c3d\`

Lien explicite : [Issue #123](https://github.com/owner/repo/issues/123)`},{id:"html",title:"HTML dans Markdown",description:"Pour la sécurité, le HTML brut est affiché comme du texte dans cet éditeur. Utilise plutôt la syntaxe Markdown ; les blocs details et summary présentés plus haut sont une exception prise en charge.",source:`<kbd>Ctrl</kbd> + <kbd>C</kbd>

<p>Ce HTML brut ne sera pas interprété dans l’aperçu.</p>`},{id:"separateurs",title:"Séparateurs",description:"Trois tirets seuls sur une ligne créent une séparation horizontale.",source:`Avant la séparation.

---

Après la séparation.`},{id:"echappement",title:"Caractères spéciaux",description:"Ajoute une barre oblique inversée avant un caractère pour l’afficher tel quel.",source:"\\*Ces astérisques ne mettent pas le texte en italique.\\*\n\nPour afficher des accents graves : \\`comme ceci\\`."}],v=document.querySelector("#guide-toc"),f=document.querySelector("#guide-sections");for(const e of b){const i=document.createElement("a");i.href=`#${e.id}`,i.textContent=e.title,v.append(i);const n=document.createElement("section");n.className="guide-card",n.id=e.id;const s=document.createElement("div");s.className="guide-card-heading";const u=document.createElement("h2");u.textContent=e.title;const c=document.createElement("p");c.textContent=e.description,s.append(u,c);const r=document.createElement("div");r.className="guide-example";const a=document.createElement("div");a.className="guide-column";const l=document.createElement("h3");l.textContent="Syntaxe";const d=document.createElement("pre"),m=document.createElement("code");m.textContent=e.source,d.append(m),a.append(l,d);const o=document.createElement("div");o.className="guide-column";const p=document.createElement("h3");p.textContent="Rendu";const t=document.createElement("div");t.className="guide-render markdown-body",t.innerHTML=g.render(e.source),o.append(p,t),h(t),r.append(a,o),n.append(s,r),f.append(n)}
