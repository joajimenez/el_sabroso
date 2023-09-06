import './style.css';
import '@picocss/pico/css/pico.min.css';
import { createElement, createImage, createNav, createCard } from './utils.js';
import {app, } from './ui.js';
import { createDrinkCardEl, tropicalDelights } from './menu.js'
import menu from './menu_data.json'
import heroPhoto from './rest_hero.jpg'

// console.log(menu.Drinks['Tropical Delights'])

const tropicalDelightTitles = Object.keys(menu.Drinks['Tropical Delights']);
const tropicalDelightDescriptions = Object.values(menu.Drinks['Tropical Delights']);
// console.log(drinksTitles);


console.log(tropicalDelightTitles[0], tropicalDelightDescriptions[0]);

const createNewNav = () => {
  const navbar = createNav('El Sabroso', [
    { text: 'MENU', href: '#', id: 'menuBtn' },
    { text: 'ABOUT', href: '#', id: 'aboutBtn' },
    { text: 'RESERVATIONS', href: '#', id: 'reservationsBtn' },
  ]);

  app.appendChild(navbar);
};

// Use a for in loop to extract drinks titles and descriptions from menu.json

// const tropicalDelights = menu.Drinks['Tropical Delights'];

// function extractTitlesAndDescriptions(obj) {
//   for (const title in obj) {
//     const description = obj[title]; // Access the description using the title as the key
//     console.log(title, description);
//   }
// }

// extractTitlesAndDescriptions(tropicalDelights);

// for (const key in tropicalDelights) {

//   const title = tropicalDelights[key];
//   const description = tropicalDelights[key];

//   console.log(title, description);

// }

const createContentEl = () => {
   const contentEl = createElement('div', 'contentEl', '');
   app.appendChild(contentEl)
   return contentEl

}

const createIndexContent = () => {

  const contentEL = createContentEl()
  const newHeroImage = new Image();
  newHeroImage.src = heroPhoto;

  contentEL.appendChild(newHeroImage);

  // const tagline = createElement(
  //   'h2',
  //   'headline',
  //   'A Taste of the Dominican Republic'
  // );

  const descriptionContainerEl = createElement(
    'div',
    'descriptionContainerEl',
    ''
  );

  const introText = createElement(
    'p',
    'introText',
    "Welcome to EL SABROSO, a restaurant that celebrates the delicious flavors of the Dominican Republic. We use only the freshest, highest-quality ingredients to create our authentic Dominican dishes, and our chefs are experts in traditional Dominican cuisine. We offer a wide variety of dishes, so there's something for everyone to enjoy."
  );

  const bodyParaOne = createElement(
    'p',
    'bodyParaOne',
    "Our passion for Dominican food is evident in every bite. We believe that food is more than just sustenance; it's a way to connect with our culture and heritage. That's why we take great care in sourcing our ingredients and preparing our dishes. We want you to experience the true flavors of the Dominican Republic, and we believe that our food is the best way to do that."
  );

  const bodyParaTwo = createElement(
    'p',
    'bodyParaTwo',
    "We also believe in providing our customers with a warm and welcoming experience. Our staff is friendly and attentive, and they're always happy to help you choose the perfect dish. We want you to feel like you're part of our family when you dine with us."
  );

  const bodyParaThree = createElement(
    'p',
    'bodyParaThree',
    "We're proud to be a part of the Dominican community in our city, and we hope you'll join us for a meal soon!"
  );

  const bodyCopy = createElement('div', 'bodyCopy', '');

  // app.appendChild(siteTitle);

  contentEL.appendChild(descriptionContainerEl);
  descriptionContainerEl.appendChild(introText);

  contentEL.appendChild(bodyCopy);
  bodyCopy.appendChild(bodyParaOne);
  // bodyCopy.appendChild(bodyParaTwo);
  // bodyCopy.appendChild(bodyParaThree);

  const callToActionEl = createElement('div', 'callToActionEl', '');
  const callToActionBtn = createElement(
    'button',
    'callToActionBtn',
    'BOOK NOW'
  );

  contentEL.appendChild(callToActionEl);
  callToActionEl.appendChild(callToActionBtn);

};

function main() {
  createNewNav();
  createIndexContent();

  const menuBtn = document.getElementById('menuBtn');
  const aboutBtn = document.getElementById('aboutBtn');
  const reservationsBtn = document.getElementById('reservationsBtn');

  menuBtn.addEventListener('click', () => {

    // app.innerHTML = ''
    console.log(tropicalDelights)
  });
}

main();
