import { createElement, createImage, createCard } from "./utils.js";
import { app } from "./ui.js";
import { contentEL } from "./index.js";
import menu from "./menu_data.json";

export const tropicalDelights = menu.Drinks["Tropical Delights"];

export const createMenuContent = () => {
  const drinksEl = createElement("div", "drinksEl", "");

  drinksEl.appendChild(createElement("h2", "drinksTitle", "Drinks"));
  drinksEl.appendChild(
    createElement("p", "introText", menu.Drinks["Intro Text"])
  );

  contentEL.appendChild(drinksEl);

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

  const mainDishes = createElement("div", "drinksSectionTwo", "");

  drinksEl.appendChild(drinksSectionOne);

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
