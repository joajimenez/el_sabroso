import { createElement, createImage, createCard } from './utils.js';
import { app } from './ui.js';
import  menu  from './menu_data.json';

export const tropicalDelights = menu.Drinks['Tropical Delights'];



// const createMenuContent = () => {
//   const drinksEl = createElement('div', 'drinksEl', '');
//   const mainDishesEl = createElement('div', 'mainDishesEl', '');
//   const dessertsEl = createElement('div', 'dessertsEl', '');

//   app.appendChild(drinksEl);
//   drinksEl.appendChild(createElement('h2', 'drinksTitle', 'Drinks'));
//   drinksEl.appendChild(createElement('p', 'introText', drinks.introText));

//   app.appendChild(mainDishesEl);
//   mainDishesEl.appendChild(
//     createElement('h2', 'mainDishesTitle', 'Main Dishes')
//   );

//   app.appendChild(dessertsEl);
//   dessertsEl.appendChild(createElement('h2', 'dessertsTitle', 'Desserts'));

//   const drinksIntroText = createElement(
//     'p',
//     'drinksIntroText',
//     `${drinks.introText}`
//   );

//   const drinksSectionOne = createElement('div', 'drinksSectionOne', '');
//   const drinksSectionTwo = createElement('div', 'drinksSectionTwo', '');

//   const bodyParaTwo = createElement(
//     'p',
//     'bodyParaTwo',
//     "We also believe in providing our customers with a warm and welcoming experience. Our staff is friendly and attentive, and they're always happy to help you choose the perfect dish. We want you to feel like you're part of our family when you dine with us."
//   );

//   const bodyParaThree = createElement(
//     'p',
//     'bodyParaThree',
//     "We're proud to be a part of the Dominican community in our city, and we hope you'll join us for a meal soon!"
//   );

//   const bodyCopyEl = createElement('div', 'bodyCopy', '');

//   // app.appendChild(siteTitle);

//   app.appendChild(descriptionContainerEl);
//   descriptionContainerEl.appendChild(introText);

//   app.appendChild(bodyCopyEl);
//   // bodyCopy.appendChild(bodyParaOne);
//   // bodyCopy.appendChild(bodyParaTwo);
//   bodyCopyEl.appendChild(bodyParaThree);

//   const callToActionEl = createElement('div', 'callToActionEl', '');
//   const callToActionBtn = createElement(
//     'button',
//     'callToActionBtn',
//     'BOOK NOW'
//   );

//   app.appendChild(callToActionEl);
//   callToActionEl.appendChild(callToActionBtn);
// };
