import './style.css';

const additionalLanguages = [
  ['C', 'c', 'A8B9CC', 'https://en.cppreference.com/w/c/language.html'],
  ['C#', 'csharp', '512BD4', 'https://learn.microsoft.com/dotnet/csharp/'],
  ['Kotlin', 'kotlin', '7F52FF', 'https://kotlinlang.org/'],
  ['Swift', 'swift', 'F05138', 'https://www.swift.org/'],
  ['Dart', 'dart', '0175C2', 'https://dart.dev/'],
  ['Scala', 'scala', 'DC322F', 'https://www.scala-lang.org/'],
  ['Elixir', 'elixir', '4B275F', 'https://elixir-lang.org/'],
  ['Erlang', 'erlang', 'A90533', 'https://www.erlang.org/'],
  ['Haskell', 'haskell', '5D4F85', 'https://www.haskell.org/'],
  ['Lua', 'lua', '2C2D72', 'https://www.lua.org/'],
  ['Perl', 'perl', '39457E', 'https://www.perl.org/'],
  ['R', 'r', '276DC3', 'https://www.r-project.org/'],
  ['Julia', 'julia', '9558B2', 'https://julialang.org/'],
  ['MATLAB', 'mathworks', '0076A8', 'https://www.mathworks.com/products/matlab.html'],
  ['Objective-C', 'apple', '000000', 'https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/'],
  ['TypeScript', 'typescript', '3178C6', 'https://www.typescriptlang.org/'],
  ['JavaScript', 'javascript', 'F7DF1E', 'https://developer.mozilla.org/docs/Web/JavaScript'],
  ['HTML5', 'html5', 'E34F26', 'https://developer.mozilla.org/docs/Web/HTML'],
  ['CSS3', 'css3', '1572B6', 'https://developer.mozilla.org/docs/Web/CSS'],
  ['SQL', 'postgresql', '4169E1', 'https://www.iso.org/standard/76583.html'],
  ['Shell', 'gnubash', '4EAA25', 'https://www.gnu.org/software/bash/'],
  ['PowerShell', 'powershell', '5391FE', 'https://learn.microsoft.com/powershell/'],
  ['Solidity', 'solidity', '363636', 'https://soliditylang.org/'],
  ['Zig', 'zig', 'F7A41D', 'https://ziglang.org/'],
  ['Clojure', 'clojure', '5881D8', 'https://clojure.org/'],
  ['F#', 'fsharp', '378BBA', 'https://fsharp.org/'],
  ['OCaml', 'ocaml', 'EC6813', 'https://ocaml.org/'],
  ['Fortran', 'fortran', '734F96', 'https://fortran-lang.org/'],
  ['Assembly', 'assemblyscript', '007AAC', 'https://en.wikipedia.org/wiki/Assembly_language'],
].map(([name, logo, color, href]) => ({
  name,
  category: 'Langages',
  description: `Badge ${name} pour identifier ce langage dans votre projet.`,
  alt: name,
  image: `https://img.shields.io/badge/${encodeURIComponent(name)}-${color}?logo=${logo}&logoColor=white`,
  href,
}));

const additionalFrameworks = [
  ['Angular', 'angular', '0F0F11', 'https://angular.dev/'],
  ['Svelte', 'svelte', 'FF3E00', 'https://svelte.dev/'],
  ['Next.js', 'nextdotjs', '000000', 'https://nextjs.org/'],
  ['Nuxt', 'nuxt', '00DC82', 'https://nuxt.com/'],
  ['SvelteKit', 'svelte', 'FF3E00', 'https://svelte.dev/docs/kit'],
  ['Astro', 'astro', 'BC52EE', 'https://astro.build/'],
  ['Express', 'express', '000000', 'https://expressjs.com/'],
  ['NestJS', 'nestjs', 'E0234E', 'https://nestjs.com/'],
  ['Fastify', 'fastify', '000000', 'https://fastify.dev/'],
  ['Electron', 'electron', '47848F', 'https://www.electronjs.org/'],
  ['Tauri', 'tauri', '24C8DB', 'https://tauri.app/'],
  ['FastAPI', 'fastapi', '009688', 'https://fastapi.tiangolo.com/'],
  ['TensorFlow', 'tensorflow', 'FF6F00', 'https://www.tensorflow.org/'],
  ['PyTorch', 'pytorch', 'EE4C2C', 'https://pytorch.org/'],
  ['Spring Boot', 'springboot', '6DB33F', 'https://spring.io/projects/spring-boot'],
  ['ASP.NET Core', 'dotnet', '512BD4', 'https://dotnet.microsoft.com/apps/aspnet'],
  ['Laravel', 'laravel', 'FF2D20', 'https://laravel.com/'],
  ['Symfony', 'symfony', '000000', 'https://symfony.com/'],
  ['Ruby on Rails', 'rubyonrails', 'D30001', 'https://rubyonrails.org/'],
  ['Gin', 'gin', '008ECF', 'https://gin-gonic.com/'],
  ['Actix Web', 'rust', '000000', 'https://actix.rs/'],
  ['Axum', 'rust', '000000', 'https://docs.rs/axum/latest/axum/'],
  ['Flutter', 'flutter', '02569B', 'https://flutter.dev/'],
  ['React Native', 'react', '20232A', 'https://reactnative.dev/'],
  ['Tailwind CSS', 'tailwindcss', '06B6D4', 'https://tailwindcss.com/'],
  ['Bootstrap', 'bootstrap', '7952B3', 'https://getbootstrap.com/'],
  ['Sass', 'sass', 'CC6699', 'https://sass-lang.com/'],
  ['Django REST Framework', 'django', 'A30000', 'https://www.django-rest-framework.org/'],
  ['Unity', 'unity', '000000', 'https://unity.com/'],
  ['Unreal Engine', 'unrealengine', '0E1128', 'https://www.unrealengine.com/'],
].map(([name, logo, color, href]) => ({
  name,
  category: 'Frameworks',
  description: `Badge ${name} pour identifier ce framework ou moteur dans votre projet.`,
  alt: name,
  image: `https://img.shields.io/badge/${encodeURIComponent(name)}-${color}?logo=${logo}&logoColor=white`,
  href,
}));

const badges = [
  {
    name: 'Version Python',
    category: 'Langages',
    description: 'Affiche la version de Python requise.',
    alt: 'Python 3.12+',
    image: 'https://img.shields.io/badge/Python-3.12%2B-3776AB?logo=python&logoColor=white',
    href: 'https://www.python.org/',
  },
  {
    name: 'Version Node.js',
    category: 'Langages',
    description: 'Indique une version minimale de Node.js.',
    alt: 'Node.js 22+',
    image: 'https://img.shields.io/badge/Node.js-22%2B-339933?logo=node.js&logoColor=white',
    href: 'https://nodejs.org/',
  },
  {
    name: 'Version Java',
    category: 'Langages',
    description: 'Indique la version minimale de Java.',
    alt: 'Java 21+',
    image: 'https://img.shields.io/badge/Java-21%2B-ED8B00?logo=openjdk&logoColor=white',
    href: 'https://www.java.com/',
  },
  {
    name: 'Version Rust',
    category: 'Langages',
    description: 'Indique la version de Rust requise.',
    alt: 'Rust 1.80+',
    image: 'https://img.shields.io/badge/Rust-1.80%2B-000000?logo=rust&logoColor=white',
    href: 'https://www.rust-lang.org/',
  },
  {
    name: 'Version Go',
    category: 'Langages',
    description: 'Indique la version minimale de Go.',
    alt: 'Go 1.23+',
    image: 'https://img.shields.io/badge/Go-1.23%2B-00ADD8?logo=go&logoColor=white',
    href: 'https://go.dev/',
  },
  {
    name: 'Version PHP',
    category: 'Langages',
    description: 'Indique la version minimale de PHP.',
    alt: 'PHP 8.3+',
    image: 'https://img.shields.io/badge/PHP-8.3%2B-777BB4?logo=php&logoColor=white',
    href: 'https://www.php.net/',
  },
  {
    name: 'Version Ruby',
    category: 'Langages',
    description: 'Indique la version minimale de Ruby.',
    alt: 'Ruby 3.3+',
    image: 'https://img.shields.io/badge/Ruby-3.3%2B-CC342D?logo=ruby&logoColor=white',
    href: 'https://www.ruby-lang.org/',
  },
  {
    name: 'Version C++',
    category: 'Langages',
    description: 'Indique le standard C++ utilisé.',
    alt: 'C++ 20',
    image: 'https://img.shields.io/badge/C%2B%2B-20-00599C?logo=cplusplus&logoColor=white',
    href: 'https://isocpp.org/',
  },
  ...additionalLanguages,
  {
    name: 'React',
    category: 'Frameworks',
    description: 'Signale que le projet utilise React.',
    alt: 'React',
    image: 'https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB',
    href: 'https://react.dev/',
  },
  {
    name: 'Vue.js',
    category: 'Frameworks',
    description: 'Signale que le projet utilise Vue.js.',
    alt: 'Vue.js',
    image: 'https://img.shields.io/badge/Vue.js-35495E?logo=vuedotjs&logoColor=4FC08D',
    href: 'https://vuejs.org/',
  },
  {
    name: 'Django',
    category: 'Frameworks',
    description: 'Signale que le projet utilise Django.',
    alt: 'Django',
    image: 'https://img.shields.io/badge/Django-092E20?logo=django&logoColor=white',
    href: 'https://www.djangoproject.com/',
  },
  {
    name: 'Flask',
    category: 'Frameworks',
    description: 'Signale que le projet utilise Flask.',
    alt: 'Flask',
    image: 'https://img.shields.io/badge/Flask-000000?logo=flask&logoColor=white',
    href: 'https://flask.palletsprojects.com/',
  },
  ...additionalFrameworks,
  {
    name: 'Licence',
    category: 'Projet',
    description: 'Présente la licence de votre projet.',
    alt: 'Licence CC BY-NC 4.0',
    image: 'https://img.shields.io/badge/License-CC_BY--NC_4.0-blue.svg',
    href: 'https://creativecommons.org/licenses/by-nc/4.0/',
  },
  {
    name: 'Licence MIT',
    category: 'Projet',
    description: 'Badge statique pour un projet sous licence MIT.',
    alt: 'Licence MIT',
    image: 'https://img.shields.io/badge/License-MIT-green.svg',
    href: 'https://opensource.org/license/mit/',
  },
  {
    name: 'Version du projet',
    category: 'Projet',
    description: 'Badge statique pour afficher la version courante du projet.',
    alt: 'Version 1.0.0',
    image: 'https://img.shields.io/badge/version-1.0.0-blue',
    href: '',
  },
  {
    name: 'Statut du projet',
    category: 'Projet',
    description: 'Badge statique pour indiquer si le projet est en développement.',
    alt: 'Statut en développement',
    image: 'https://img.shields.io/badge/status-en%20d%C3%A9veloppement-yellow',
    href: '',
  },
  {
    name: 'Version PyPI',
    category: 'Paquets',
    description: 'Récupère la dernière version publiée sur PyPI.',
    alt: 'Version PyPI',
    image: 'https://img.shields.io/pypi/v/nom-du-paquet',
    href: 'https://pypi.org/',
  },
  {
    name: 'Versions Python sur PyPI',
    category: 'Paquets',
    description: 'Affiche les versions de Python prises en charge sur PyPI.',
    alt: 'Versions Python',
    image: 'https://img.shields.io/pypi/pyversions/nom-du-paquet',
    href: 'https://pypi.org/',
  },
  {
    name: 'Version npm',
    category: 'Paquets',
    description: 'Affiche la dernière version publiée sur npm.',
    alt: 'Version npm',
    image: 'https://img.shields.io/npm/v/nom-du-paquet',
    href: 'https://www.npmjs.com/',
  },
  {
    name: 'Téléchargements npm',
    category: 'Paquets',
    description: 'Nombre de téléchargements npm du dernier mois.',
    alt: 'Téléchargements npm mensuels',
    image: 'https://img.shields.io/npm/dm/nom-du-paquet',
    href: 'https://www.npmjs.com/',
  },
  {
    name: 'Licence npm',
    category: 'Paquets',
    description: 'Affiche la licence déclarée du paquet npm.',
    alt: 'Licence npm',
    image: 'https://img.shields.io/npm/l/nom-du-paquet',
    href: 'https://www.npmjs.com/',
  },
  {
    name: 'Téléchargements PyPI',
    category: 'Paquets',
    description: 'Nombre de téléchargements du paquet PyPI le mois dernier.',
    alt: 'Téléchargements PyPI mensuels',
    image: 'https://img.shields.io/pypi/dm/nom-du-paquet',
    href: 'https://pypi.org/',
  },
  {
    name: 'Étoiles GitHub',
    category: 'GitHub',
    description: 'Nombre d’étoiles du dépôt GitHub.',
    alt: 'Étoiles GitHub',
    image: 'https://img.shields.io/github/stars/owner/repo',
    href: 'https://github.com/owner/repo',
  },
  {
    name: 'Forks GitHub',
    category: 'GitHub',
    description: 'Nombre de forks du dépôt GitHub.',
    alt: 'Forks GitHub',
    image: 'https://img.shields.io/github/forks/owner/repo',
    href: 'https://github.com/owner/repo',
  },
  {
    name: 'Watchers GitHub',
    category: 'GitHub',
    description: 'Nombre de personnes qui suivent le dépôt.',
    alt: 'Watchers GitHub',
    image: 'https://img.shields.io/github/watchers/owner/repo',
    href: 'https://github.com/owner/repo',
  },
  {
    name: 'Contributeurs GitHub',
    category: 'GitHub',
    description: 'Nombre de contributeurs au dépôt.',
    alt: 'Contributeurs GitHub',
    image: 'https://img.shields.io/github/contributors/owner/repo',
    href: 'https://github.com/owner/repo/graphs/contributors',
  },
  {
    name: 'Licence GitHub',
    category: 'GitHub',
    description: 'Lit la licence déclarée dans un dépôt public.',
    alt: 'Licence GitHub',
    image: 'https://img.shields.io/github/license/owner/repo',
    href: 'https://github.com/owner/repo',
  },
  {
    name: 'Dernier commit',
    category: 'GitHub',
    description: 'Date du dernier commit sur la branche principale.',
    alt: 'Dernier commit GitHub',
    image: 'https://img.shields.io/github/last-commit/owner/repo',
    href: 'https://github.com/owner/repo/commits',
  },
  {
    name: 'Taille du dépôt',
    category: 'GitHub',
    description: 'Taille du dépôt GitHub.',
    alt: 'Taille du dépôt GitHub',
    image: 'https://img.shields.io/github/repo-size/owner/repo',
    href: 'https://github.com/owner/repo',
  },
  {
    name: 'Issues ouvertes',
    category: 'GitHub',
    description: 'Nombre d’issues ouvertes dans le dépôt.',
    alt: 'Issues GitHub ouvertes',
    image: 'https://img.shields.io/github/issues/owner/repo',
    href: 'https://github.com/owner/repo/issues',
  },
  {
    name: 'Pull requests ouvertes',
    category: 'GitHub',
    description: 'Nombre de pull requests ouvertes dans le dépôt.',
    alt: 'Pull requests GitHub ouvertes',
    image: 'https://img.shields.io/github/issues-pr/owner/repo',
    href: 'https://github.com/owner/repo/pulls',
  },
  {
    name: 'Langages du dépôt',
    category: 'GitHub',
    description: 'Langage principal détecté dans le dépôt.',
    alt: 'Langage principal GitHub',
    image: 'https://img.shields.io/github/languages/top/owner/repo',
    href: 'https://github.com/owner/repo',
  },
  {
    name: 'Activité des commits',
    category: 'GitHub',
    description: 'Activité récente des commits sur la branche principale.',
    alt: 'Activité des commits GitHub',
    image: 'https://img.shields.io/github/commit-activity/m/owner/repo',
    href: 'https://github.com/owner/repo/commits',
  },
  {
    name: 'Dernière release',
    category: 'GitHub',
    description: 'Version de la dernière release GitHub.',
    alt: 'Dernière release GitHub',
    image: 'https://img.shields.io/github/v/release/owner/repo',
    href: 'https://github.com/owner/repo/releases',
  },
  {
    name: 'Build GitHub Actions',
    category: 'Automatisation',
    description: 'État d’un workflow GitHub Actions.',
    alt: 'Build GitHub Actions',
    image: 'https://img.shields.io/github/actions/workflow/status/owner/repo/ci.yml',
    href: 'https://github.com/owner/repo/actions',
  },
  {
    name: 'Docker pulls',
    category: 'Automatisation',
    description: 'Nombre de téléchargements d’une image Docker Hub.',
    alt: 'Téléchargements Docker Hub',
    image: 'https://img.shields.io/docker/pulls/owner/image',
    href: 'https://hub.docker.com/',
  },
  {
    name: 'Code Climate maintainability',
    category: 'Automatisation',
    description: 'Score de maintenabilité Code Climate.',
    alt: 'Maintenabilité Code Climate',
    image: 'https://img.shields.io/codeclimate/maintainability/owner/repo',
    href: 'https://codeclimate.com/',
  },
  {
    name: 'Codecov',
    category: 'Automatisation',
    description: 'Couverture de tests publiée sur Codecov.',
    alt: 'Couverture Codecov',
    image: 'https://img.shields.io/codecov/c/github/owner/repo',
    href: 'https://codecov.io/',
  },
  {
    name: 'Made with love',
    category: 'Projet',
    description: 'Badge décoratif personnalisable.',
    alt: 'Made with love',
    image: 'https://img.shields.io/badge/Made%20with-Love-e25555?logo=heart&logoColor=white',
    href: '',
  },
];

const labelInput = document.querySelector('#badge-label');
const messageInput = document.querySelector('#badge-message');
const colorInput = document.querySelector('#badge-color');
const styleInput = document.querySelector('#badge-style');
const logoInput = document.querySelector('#badge-logo');
const logoColorInput = document.querySelector('#badge-logo-color');
const linkInput = document.querySelector('#badge-link');
const previewImage = document.querySelector('#badge-preview-image');
const previewError = document.querySelector('#badge-preview-error');
const markdownOutput = document.querySelector('#badge-markdown');
const searchInput = document.querySelector('#badge-search');
const categoriesRoot = document.querySelector('#badge-categories');
const gallery = document.querySelector('#badge-gallery');
const emptyMessage = document.querySelector('#badge-empty');
const toast = document.querySelector('#toast');
const builderTitle = document.querySelector('#builder-title');
const editorNotice = document.querySelector('#badge-editor-notice');
const badgeResetButton = document.querySelector('#badge-reset-button');

const categories = ['Tous', ...new Set(badges.map((badge) => badge.category))];
let activeCategory = 'Tous';
let toastTimeout;

document.querySelector('#badge-preview-image').addEventListener('error', () => {
  previewError.hidden = false;
  previewError.textContent = 'Impossible de charger l’aperçu. Vérifiez la couleur ou votre connexion.';
});
document.querySelector('#badge-preview-image').addEventListener('load', () => {
  previewError.hidden = true;
});

function escapeAltText(text) {
  return text.replace(/\\/g, '\\\\').replace(/\]/g, '\\]');
}

function makeMarkdown(badge) {
  const image = `![${escapeAltText(badge.alt)}](${badge.image})`;
  return badge.href ? `[${image}](${badge.href})` : image;
}

function splitShieldBadgePath(value) {
  const parts = [];
  let part = '';

  for (let index = 0; index < value.length; index += 1) {
    if (value[index] !== '-') {
      part += value[index];
      continue;
    }

    if (value[index + 1] === '-') {
      part += '-';
      index += 1;
    } else {
      parts.push(part);
      part = '';
    }
  }
  parts.push(part);
  return parts;
}

function decodeBadgePart(value) {
  try {
    return decodeURIComponent(value).replace(/_/g, ' ');
  } catch {
    return value.replace(/_/g, ' ');
  }
}

function staticBadgeSettings(badge) {
  try {
    const url = new URL(badge.image);
    if (url.hostname !== 'img.shields.io' || !url.pathname.startsWith('/badge/')) return null;

    const rawPath = url.pathname.slice('/badge/'.length).replace(/\.svg$/i, '');
    const parts = splitShieldBadgePath(rawPath).map(decodeBadgePart);
    if (parts.length === 2) {
      return {
        label: parts[0],
        message: `utilise ${parts[0]}`,
        color: parts[1],
        style: url.searchParams.get('style') || 'flat',
        logo: url.searchParams.get('logo') || '',
        logoColor: url.searchParams.get('logoColor') || '',
      };
    }
    if (parts.length < 3) return null;

    return {
      label: parts[0],
      message: parts[1],
      color: parts[2],
      style: url.searchParams.get('style') || 'flat',
      logo: url.searchParams.get('logo') || '',
      logoColor: url.searchParams.get('logoColor') || '',
    };
  } catch {
    return null;
  }
}

function populateEditorFromBadge(badge) {
  const settings = staticBadgeSettings(badge);
  const fallbackColor = {
    Langages: '3776AB',
    Frameworks: '5546E8',
    Projet: '5546E8',
    Paquets: '8957E5',
    GitHub: '24292F',
    Automatisation: '1A7F37',
  }[badge.category] || '5546E8';

  labelInput.value = settings?.label || badge.name;
  messageInput.value = settings?.message || 'à personnaliser';
  colorInput.value = settings?.color || fallbackColor;
  styleInput.value = settings?.style || 'flat';
  logoInput.value = settings?.logo || '';
  logoColorInput.value = settings?.logoColor || 'white';
  linkInput.value = badge.href || '';

  builderTitle.textContent = `Modifier : ${badge.name}`;
  editorNotice.hidden = Boolean(settings);
  editorNotice.textContent = settings
    ? 'Les champs ont été préremplis depuis ce badge. Modifie-les et copie le résultat.'
    : 'Ce badge utilise une valeur dynamique. Le générateur crée une version personnalisée statique : remplace « à personnaliser » par ta valeur.';
  badgeResetButton.hidden = false;
  updateBuilder();
  document.querySelector('#builder-title').scrollIntoView({ behavior: 'smooth', block: 'center' });
  labelInput.focus({ preventScroll: true });
}

function makeStaticBadgeUrl() {
  const label = labelInput.value.trim();
  const message = messageInput.value.trim();
  const color = colorInput.value.trim();
  if (!label || !message || !color) return null;

  const pathPart = (value) => encodeURIComponent(value).replace(/-/g, '--');
  const url = new URL(
    `https://img.shields.io/badge/${pathPart(label)}-${pathPart(message)}-${pathPart(color)}`,
  );
  url.searchParams.set('style', styleInput.value);
  if (logoInput.value.trim()) url.searchParams.set('logo', logoInput.value.trim());
  if (logoColorInput.value.trim()) url.searchParams.set('logoColor', logoColorInput.value.trim());
  return url.href;
}

function updateBuilder() {
  const imageUrl = makeStaticBadgeUrl();
  const badgeLink = linkInput.value.trim();
  let linkUrl = '';

  if (badgeLink) {
    try {
      const parsed = new URL(badgeLink);
      if (!['http:', 'https:'].includes(parsed.protocol)) throw new Error('Unsupported link protocol');
      linkUrl = parsed.href;
      linkInput.setCustomValidity('');
    } catch {
      linkInput.setCustomValidity('Saisissez une adresse complète commençant par https://.');
    }
  } else {
    linkInput.setCustomValidity('');
  }

  if (!imageUrl) {
    previewImage.hidden = true;
    previewError.hidden = false;
    previewError.textContent = 'Renseignez le libellé, le texte du badge et sa couleur.';
    markdownOutput.value = '';
    document.querySelector('#badge-copy-button').disabled = true;
    return;
  }

  previewError.hidden = true;
  previewImage.hidden = false;
  previewImage.alt = `${labelInput.value.trim()} ${messageInput.value.trim()}`;
  previewImage.src = imageUrl;
  const imageMarkdown = `![${escapeAltText(previewImage.alt)}](${imageUrl})`;
  markdownOutput.value = linkUrl ? `[${imageMarkdown}](${linkUrl})` : imageMarkdown;
  document.querySelector('#badge-copy-button').disabled = Boolean(badgeLink && !linkUrl);
}

function copyText(text) {
  if (navigator.clipboard?.writeText) {
    return navigator.clipboard.writeText(text);
  }

  const temporary = document.createElement('textarea');
  temporary.value = text;
  temporary.setAttribute('readonly', '');
  temporary.style.position = 'fixed';
  temporary.style.opacity = '0';
  document.body.append(temporary);
  temporary.select();
  const copied = document.execCommand('copy');
  temporary.remove();
  return copied ? Promise.resolve() : Promise.reject(new Error('Clipboard copy failed'));
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('visible');
  window.clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => toast.classList.remove('visible'), 2200);
}

function renderCategories() {
  categoriesRoot.replaceChildren();
  for (const category of categories) {
    const button = document.createElement('button');
    button.className = 'badge-category';
    button.type = 'button';
    button.textContent = category;
    button.setAttribute('aria-pressed', String(activeCategory === category));
    button.addEventListener('click', () => {
      activeCategory = category;
      renderCategories();
      renderGallery();
    });
    categoriesRoot.append(button);
  }
}

function renderGallery() {
  const query = searchInput.value.trim().toLocaleLowerCase('fr');
  const matchingBadges = badges.filter((badge) => {
    const matchesCategory = activeCategory === 'Tous' || badge.category === activeCategory;
    const searchableText = `${badge.name} ${badge.category} ${badge.description}`.toLocaleLowerCase('fr');
    return matchesCategory && searchableText.includes(query);
  });

  gallery.replaceChildren();
  emptyMessage.hidden = matchingBadges.length > 0;

  for (const badge of matchingBadges) {
    const card = document.createElement('article');
    card.className = 'badge-card';

    const heading = document.createElement('div');
    heading.className = 'badge-card-heading';
    const title = document.createElement('h3');
    title.textContent = badge.name;
    const category = document.createElement('span');
    category.textContent = badge.category;
    heading.append(title, category);

    const description = document.createElement('p');
    description.textContent = badge.description;

    const imageBox = document.createElement('div');
    imageBox.className = 'badge-card-preview';
    const image = document.createElement('img');
    image.src = badge.image;
    image.alt = badge.alt;
    image.loading = 'lazy';
    image.addEventListener('error', () => {
      imageBox.textContent = 'Aperçu indisponible';
      imageBox.classList.add('badge-image-error');
    }, { once: true });
    imageBox.append(image);

    const markdown = document.createElement('textarea');
    markdown.className = 'badge-card-markdown';
    markdown.readOnly = true;
    markdown.rows = 2;
    markdown.value = makeMarkdown(badge);
    markdown.setAttribute('aria-label', `Code Markdown pour ${badge.name}`);

    const copyButton = document.createElement('button');
    copyButton.className = 'button badge-card-copy';
    copyButton.type = 'button';
    copyButton.textContent = 'Copier le Markdown';
    copyButton.addEventListener('click', async () => {
      try {
        await copyText(markdown.value);
        showToast(`Code du badge « ${badge.name} » copié`);
      } catch {
        showToast('La copie a échoué. Sélectionnez le code pour le copier manuellement.');
      }
    });

    const cardActions = document.createElement('div');
    cardActions.className = 'badge-card-actions';
    const editButton = document.createElement('button');
    editButton.className = 'button badge-card-edit';
    editButton.type = 'button';
    editButton.textContent = 'Modifier';
    editButton.setAttribute('aria-label', `Modifier le badge ${badge.name}`);
    editButton.addEventListener('click', () => populateEditorFromBadge(badge));
    cardActions.append(editButton, copyButton);

    card.append(heading, description, imageBox, markdown, cardActions);
    gallery.append(card);
  }
}

for (const input of [labelInput, messageInput, colorInput, styleInput, logoInput, logoColorInput, linkInput]) {
  input.addEventListener('input', updateBuilder);
  input.addEventListener('change', updateBuilder);
}

document.querySelector('#badge-copy-button').addEventListener('click', async () => {
  try {
    await copyText(markdownOutput.value);
    showToast('Code Markdown du badge copié');
  } catch {
    showToast('La copie a échoué. Sélectionnez le code pour le copier manuellement.');
  }
});

badgeResetButton.addEventListener('click', () => {
  labelInput.value = 'Python';
  messageInput.value = '3.12+';
  colorInput.value = '3776AB';
  styleInput.value = 'flat';
  logoInput.value = 'python';
  logoColorInput.value = 'white';
  linkInput.value = '';
  builderTitle.textContent = 'Créer un badge personnalisé';
  editorNotice.hidden = true;
  badgeResetButton.hidden = true;
  updateBuilder();
  document.querySelector('#builder-title').scrollIntoView({ behavior: 'smooth', block: 'center' });
});

searchInput.addEventListener('input', renderGallery);
renderCategories();
renderGallery();
updateBuilder();
