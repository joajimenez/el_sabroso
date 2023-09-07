import { app } from "./ui";
// import { contentEl } from "./index.js";

export const createContentEl = () => {
  const contentEl = createElement("div", "contentEl", "");
  return contentEl;
};

export function createElement(elTipe, elClass, elText) {
  const element = document.createElement(`${elTipe}`);
  element.classList.add(`${elClass}`);
  element.textContent = `${elText}`;
  return element;
}

export function createImage(src, alt) {
  const image = document.createElement("img");
  image.src = `${src}`;
  image.alt = `${alt}`;
  return image;
}

export function createNav(brand, links) {
  const nav = document.createElement("nav");
  const ulOne = document.createElement("ul");
  const ulTwo = document.createElement("ul");

  nav.classList.add("navbar");
  nav.appendChild(ulOne);
  nav.appendChild(ulTwo);

  const brandLi = document.createElement("li");
  brandLi.innerHTML = `<strong>${brand}</strong>`;
  ulOne.classList.add('logo')
  ulOne.appendChild(brandLi);

  links.forEach((link) => {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.href = link.href;
    a.textContent = link.text;
    a.id = link.id;
    a.role = "button";

    li.appendChild(a);
    ulTwo.appendChild(li);
  });

  return nav;
}

export const createCard = (title, description, image) => {
  const card = createElement("div", "card", "");
  const cardTitle = createElement("h3", "cardTitle", title);
  const cardDescription = createElement("p", "cardDescription", description);
  const cardImage = createImage("cardImage", image);

  app.appendChild(card);
  card.appendChild(cardImage);
  card.appendChild(cardTitle);
  card.appendChild(cardDescription);
};

export function createBookNowButton(element) {
  const callToActionEl = createElement("div", "callToActionEl", "");
  const callToActionBtn = createElement(
    "button",
    "callToActionBtn",
    "BOOK NOW"
  );

  callToActionEl.appendChild(callToActionBtn);
  element.appendChild(callToActionEl);
}
