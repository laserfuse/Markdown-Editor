<p align="center">
  <img src="./public/site-logo.png" alt="Markdown Editor" width="360" />
</p>
#
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000)](https://developer.mozilla.org/docs/Web/JavaScript)
[![CSS](https://img.shields.io/badge/CSS-663399?logo=css&logoColor=fff)](https://developer.mozilla.org/docs/Web/CSS)
[![HTML](https://img.shields.io/badge/HTML-E34F26?logo=html5&logoColor=fff)](https://developer.mozilla.org/docs/Web/HTML)

[Ouvrir Markdown Editor](https://laserfuse.github.io/Markdown-Editor/)

Markdown Editor est une application web locale pour rédiger des fichiers Markdown et prévisualiser leur rendu en direct dans un style inspiré de GitHub. Le contenu est traité dans le navigateur : il n’est pas envoyé à un serveur.

## Contributions

Toute contribution est la bienvenue : corrections, nouvelles fonctionnalités, améliorations de la documentation ou signalement de problèmes. Vous pouvez ouvrir une *issue* pour partager une idée ou décrire un problème, ou proposer vos changements dans une *pull request*. Merci de contribuer au projet !

## Utilisation de l’intelligence artificielle

Des outils d’intelligence artificielle ont été utilisés pendant le développement de cet outil. Si cela vous freine dans son utilisation, j’en suis désolé et je comprends votre réserve.

## Fonctionnalités

- Éditer du Markdown avec aperçu rendu en direct.
- Ouvrir un fichier Markdown avec le sélecteur de fichiers ou par glisser-déposer.
- Copier le Markdown ou télécharger le fichier `README.md`.
- Agrandir l’aperçu en plein écran.
- Afficher la coloration syntaxique des blocs de code.
- Utiliser les tableaux, les listes de tâches, les alertes GitHub, les notes de bas de page et les emojis.
- Afficher des diagrammes Mermaid et des formules mathématiques LaTeX.
- Consulter un guide de syntaxe Markdown et une galerie de badges.

## Prérequis

- [Node.js](https://nodejs.org/) (npm est inclus).
- Un navigateur web récent.

## Installation et lancement en local

1. Clonez le dépôt et ouvrez son dossier :

   ```bash
   git clone <URL_DU_DEPOT>
   cd Markdown-Editor
   ```

2. Installez les dépendances :

   ```bash
   npm install
   ```

3. Lancez le serveur de développement :

   ```bash
   npm run dev
   ```

4. Ouvrez dans votre navigateur l’adresse affichée dans le terminal, généralement `http://localhost:5173/`.

Sous Windows, si PowerShell bloque la commande `npm`, utilisez `npm.cmd` :

```powershell
npm.cmd install
npm.cmd run dev
```

Le serveur de développement se met à jour lorsque vous modifiez les fichiers du projet. Arrêtez-le avec `Ctrl+C` dans le terminal.

## Utilisation

1. Rédigez ou collez votre Markdown dans le panneau d’édition.
2. Consultez le rendu mis à jour en direct dans le panneau d’aperçu.
3. Utilisez **Ouvrir un fichier** ou glissez-déposez un fichier Markdown dans l’éditeur.
4. Copiez le contenu ou téléchargez le fichier quand il est prêt.
5. Consultez le **Guide Markdown** pour les syntaxes prises en charge ou la page **Badges** pour trouver et créer des badges.

Les pages du guide, des badges et de la licence sont accessibles depuis la navigation de l’application.

## Vérifier le build de production

Pour générer les fichiers compilés :

```bash
npm run build
```

Les fichiers générés se trouvent dans `dist/`. Pour les prévisualiser localement :

```bash
npm run preview
```

## Licence

Le projet est distribué sous licence [Creative Commons Attribution - Pas d’Utilisation Commerciale 4.0 International (CC BY-NC 4.0)](https://creativecommons.org/licenses/by-nc/4.0/). Le texte de la licence est disponible dans [`public/LICENCE`](./public/LICENCE).
