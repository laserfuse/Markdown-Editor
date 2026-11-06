import './style.css';

const content = document.querySelector('#license-content');

async function loadLicense() {
  try {
    const response = await fetch('./LICENCE');
    if (!response.ok) {
      throw new Error(`License request failed with status ${response.status}`);
    }

    const paragraphs = (await response.text()).trim().split(/\r?\n\s*\r?\n/);
    content.replaceChildren();

    for (const [index, text] of paragraphs.entries()) {
      if (index === 0) {
        const title = document.createElement('h2');
        title.textContent = text.trim();
        content.append(title);
        continue;
      }

      const section = text.match(/^Section \d+ – .+\.$/);
      if (section) {
        const heading = document.createElement('h3');
        heading.textContent = text.trim();
        content.append(heading);
        continue;
      }

      const paragraph = document.createElement('p');
      paragraph.textContent = text.trim();
      content.append(paragraph);
    }
  } catch (error) {
    console.error('Unable to load the license text.', error);
    content.replaceChildren();
    const message = document.createElement('p');
    message.textContent = 'Le texte de la licence n’a pas pu être chargé. Vous pouvez le consulter dans le fichier LICENCE du projet.';
    content.append(message);
  }
}

loadLicense();
