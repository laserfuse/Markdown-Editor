<p align="center">
  <img src="./public/site-logo.png" alt="Markdown Editor" width="360" />
</p>

Markdown Editor est une application web locale qui permet de rédiger un fichier README en Markdown et de prévisualiser son rendu dans un style inspiré de GitHub avant de le publier.

## Fonctionnalités

- Édition Markdown avec aperçu rendu en direct.
- Ouverture d’un fichier `.md` (ou glisser-déposer dans l’éditeur).
- Copie du contenu Markdown et téléchargement du README.
- Mode aperçu plein écran.
- Mise en évidence de la syntaxe dans les blocs de code.
- Prise en charge des tableaux, listes de tâches, liens, alertes GitHub, notes de bas de page et emojis.
- Prise en charge des diagrammes Mermaid et des formules mathématiques LaTeX.
- Guide Markdown avec des exemples de syntaxe et de rendu.
- Galerie de badges à rechercher, filtrer, personnaliser et copier, avec un générateur de badges Shields.io.
- Page dédiée à la licence.

## Prérequis

- [Node.js](https://nodejs.org/) (qui inclut npm).
- Un navigateur web récent.

## Installation et lancement

Dans un terminal, placez-vous dans le dossier du projet, puis installez les dépendances :

```bash
npm install
```

Lancez le serveur de développement :

```bash
npm run dev
```

Ouvrez ensuite l’adresse locale indiquée dans le terminal, généralement `http://localhost:5173/`.

Sous Windows, si PowerShell bloque la commande `npm`, utilisez `npm.cmd` :

```powershell
npm.cmd install
npm.cmd run dev
```

## Utilisation

1. Rédigez ou collez votre Markdown dans le panneau d’édition.
2. Consultez le rendu mis à jour en direct dans le panneau d’aperçu.
3. Utilisez **Ouvrir un fichier** ou glissez-déposez un fichier Markdown pour le modifier.
4. Copiez le contenu ou téléchargez votre README quand il est prêt.
5. Consultez le **Guide Markdown** pour découvrir les syntaxes prises en charge, ou la page **Badges** pour trouver et créer des badges.

Les pages du guide, des badges et de la licence sont accessibles depuis la navigation de l’application.

## Compilation de production

Pour générer les fichiers destinés au déploiement :

```bash
npm run build
```

Les fichiers compilés sont placés dans le dossier `dist/`. Pour prévisualiser cette version localement :

```bash
npm run preview
```

## Publication sur GitHub Pages

Le dépôt est configuré pour publier le site sous le chemin `/Markdown-Editor/`. Après avoir envoyé le projet sur GitHub dans un dépôt nommé `Markdown-Editor` et sur la branche `main` :

1. Ouvrez **Settings** → **Pages** dans le dépôt.
2. Choisissez **GitHub Actions** comme source de publication.
3. Envoyez un commit sur `main` ou lancez manuellement le workflow **Deploy to GitHub Pages** depuis l’onglet **Actions**.

Le workflow construit le site et publie le contenu du dossier `dist/`. Une fois le déploiement terminé, le site est disponible à l’adresse `https://<utilisateur>.github.io/Markdown-Editor/`.

## Données et connexion

Le contenu Markdown ouvert ou rédigé dans l’éditeur est traité dans le navigateur et n’est pas envoyé à un serveur par l’application. Les aperçus des badges utilisent Shields.io et nécessitent une connexion Internet.

## Licence

Ce projet est distribué sous licence [Creative Commons Attribution - Pas d’Utilisation Commerciale 4.0 International (CC BY-NC 4.0)](https://creativecommons.org/licenses/by-nc/4.0/). Consultez le fichier [`public/LICENCE`](./public/LICENCE) pour les détails.
