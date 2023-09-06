import { createElement, createImage, createCard } from "./utils.js";
import { app } from "./ui.js";
import { contentEL } from "./index.js";
import menu from "./menu_data.json";

export const tropicalDelights = menu.Drinks["Tropical Delights"];
export const mainDishes = menu["Main Dishes"].Tradicionales;

function creacteDrinksSection() {
  const drinksEl = createElement("div", "drinksEl", "");

  drinksEl.appendChild(createElement("h2", "drinksTitle", "Drinks"));
  drinksEl.appendChild(
    createElement("p", "introText", menu.Drinks["Intro Text"])
  );

  const drinksSectionOne = createElement("article", "drinksSectionOne", "");
  const tropicalDelightsHeader = createElement(
    "header",
    "tropicalDelightsHeader",
    "Tropical Delights"
  );
  const drinksSectionOneBody = createElement("div", "drinksSectionOneBody", "");

  drinksSectionOne.appendChild(tropicalDelightsHeader);
  drinksSectionOne.appendChild(drinksSectionOneBody);

  let delightsArray = Object.entries(tropicalDelights);
  console.log(delightsArray);

  for (let array of delightsArray) {
    let title = createElement("h5", "card-title", `${array[0]}`);
    let description = createElement("p", "card-description", `${array[1]}`);

    drinksSectionOneBody.appendChild(title);
    drinksSectionOneBody.appendChild(description);
  }

  drinksEl.appendChild(drinksSectionOne);

  contentEL.appendChild(drinksEl);
}

function createMainDishesSection() {
  const mainDishesEl = createElement("div", "mainDishesEl", "");

  mainDishesEl.appendChild(
    createElement("h2", "mainDishesTitle", "Main Dishes")
  );
  mainDishesEl.appendChild(
    createElement("p", "introText", menu.Drinks["Intro Text"])
  );

  const mainDishesSectionOne = createElement(
    "article",
    "mainDishesSectionOne",
    ""
  );
  const mainDishesHeader = createElement(
    "header",
    "mainDishesHeader",
    "Tradicionales"
  );
  const mainDishesSectionOneOneBody = createElement(
    "div",
    "mainDishesSectionOneBody",
    ""
  );

  mainDishesSectionOne.appendChild(mainDishesHeader);
  mainDishesSectionOne.appendChild(mainDishesSectionOneOneBody);

  let mainDishesArray = Object.entries(mainDishes);
  console.log(mainDishesArray);

  for (let array of mainDishesArray) {
    let title = createElement("h5", "card-title", `${array[0]}`);
    let description = createElement("p", "card-description", `${array[1]}`);

    mainDishesSectionOneOneBody.appendChild(title);
    mainDishesSectionOneOneBody.appendChild(description);
  }

  mainDishesEl.appendChild(mainDishesSectionOne);

  contentEL.appendChild(mainDishesEl);
}

export const createMenuContent = () => {
  creacteDrinksSection();
  createMainDishesSection();

  // const mainDishes = createElement("div", "drinksSectionTwo", "");

  //   const mainDishesEl = createElement('div', 'mainDishesEl', '');
  //   const dessertsEl = createElement('div', 'dessertsEl', '');

  //   app.appendChild(mainDishesEl);
  //   mainDishesEl.appendChild(
  //     createElement('h2', 'mainDishesTitle', 'Main Dishes')
  //   );

  //   app.appendChild(dessertsEl);
  //   dessertsEl.appendChild(createElement('h2', 'dessertsTitle', 'Desserts'));

  // app.appendChild(siteTitle);

  const callToActionEl = createElement("div", "callToActionEl", "");
  const callToActionBtn = createElement(
    "button",
    "callToActionBtn",
    "BOOK NOW"
  );

  app.appendChild(callToActionEl);
  callToActionEl.appendChild(callToActionBtn);
};
