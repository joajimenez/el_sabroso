import { createElement } from "./utils.js";
import { app } from "./ui.js";
import { contentEL } from "./index.js";
import menu from "./menu_data.json";

export const tropicalDelights = menu.Drinks["Tropical Delights"];
export const mainDishes = menu["Main Dishes"].Tradicionales;
export const desserts = menu["Desserts"]["Dulces Criollos"];

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

function createDessertsSection() {
  const dessertsEl = createElement("div", "dessertsEl", "");

  dessertsEl.appendChild(createElement("h2", "dessertsTitle", "Desserts"));
  dessertsEl.appendChild(
    createElement("p", "introText", menu.Desserts["Intro Text"])
  );

  const dessertsSectionOne = createElement("article", "dessertsSectionOne", "");
  const dessertsHeader = createElement(
    "header",
    "dessertsHeader",
    "Dulces Criollos"
  );
  const dessertsSectionOneOneBody = createElement(
    "div",
    "dessertsSectionOneBody",
    ""
  );

  dessertsSectionOne.appendChild(dessertsHeader);
  dessertsSectionOne.appendChild(dessertsSectionOneOneBody);

  let dessertsArray = Object.entries(desserts);
  console.log(dessertsArray);

  for (let array of dessertsArray) {
    let title = createElement("h5", "card-title", `${array[0]}`);
    let description = createElement("p", "card-description", `${array[1]}`);

    dessertsSectionOneOneBody.appendChild(title);
    dessertsSectionOneOneBody.appendChild(description);
  }

  dessertsEl.appendChild(dessertsSectionOne);

  contentEL.appendChild(dessertsEl);
}

export const createMenuContent = () => {
  creacteDrinksSection();
  createMainDishesSection();
  createDessertsSection();
};
