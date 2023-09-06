import './style.css';
import '@picocss/pico/css/pico.min.css';
import { createContentEl, createElement, createImage, createNav, createCard } from './utils.js';
import { app } from './ui.js';
import { createDrinkCardEl, tropicalDelights } from './menu.js'
import menu from './menu_data.json'
import heroPhoto from './rest_hero.jpg'

const contentEL = createContentEl()
// app.appendChild(contentEL)

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


const createIndexContent = () => {
  app.appendChild(contentEL)

  const newHeroImage = new Image();
  newHeroImage.src = heroPhoto;

  contentEL.appendChild(newHeroImage);


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

  descriptionContainerEl.appendChild(introText);
  descriptionContainerEl.appendChild(bodyParaOne)
  contentEL.appendChild(descriptionContainerEl);

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

  const elSabrosoBtn = document.querySelector('li strong');
  const menuBtn = document.getElementById('menuBtn');
  const aboutBtn = document.getElementById('aboutBtn');
  const reservationsBtn = document.getElementById('reservationsBtn');

  elSabrosoBtn.addEventListener('click', () => {
    contentEL.innerHTML = ''
    createIndexContent();
  })

  menuBtn.addEventListener('click', function() {
    contentEL.innerHTML = ''
    console.log(tropicalDelights)
  });
}

main();
