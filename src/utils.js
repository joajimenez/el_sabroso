import { app } from "./ui";

export const createContentEl = () => {
  const contentEl = createElement('div', 'contentEl', '');
  // app.appendChild(contentEl)
  return contentEl
}


export function createElement(elTipe, elClass, elText) {
  const element = document.createElement(`${elTipe}`);
  element.classList.add(`${elClass}`);
  element.textContent = `${elText}`;
  return element;
}

export function createImage(src, alt) {
  const image = document.createElement('img');
  image.src = `${src}`;
  image.alt = `${alt}`;
  return image;
}

export function createNav(brand, links) {
  const nav = document.createElement('nav'); 
  const ul = document.createElement('ul');

  nav.classList.add('navbar');
  nav.appendChild(ul);

  const brandLi = document.createElement('li');
  brandLi.innerHTML = `<strong>${brand}</strong>`;
  ul.appendChild(brandLi);

  links.forEach((link) => {
    const li = document.createElement('li');
    const a = document.createElement('a');

    a.href = link.href;
    a.textContent = link.text;
    a.id = link.id;
    a.role = 'button';

    li.appendChild(a);
    ul.appendChild(li);
  });

  return nav;
}

export const createCard = (title, description, image) => {
  const card = createElement('div', 'card', '');
  const cardTitle = createElement('h3', 'cardTitle', title);
  const cardDescription = createElement('p', 'cardDescription', description);
  const cardImage = createImage('cardImage', image);

  app.appendChild(card);
  card.appendChild(cardImage);
  card.appendChild(cardTitle);
  card.appendChild(cardDescription);
}