import './style.css';
import '@picocss/pico/css/pico.min.css';
import { createElement, createImage, createNav } from './utils.js';
import { app } from './ui.js';
import  menu  from './menu.json'

console.log(menu)


const createNewNav = () => {
  const navbar = createNav('El Sabroso', [
    { text: 'MENU', href: '#', id: 'menuBtn' },
    { text: 'ABOUT', href: '#', id: 'aboutBtn' },

    { text: 'RESERVATIONS', href: '#', id: 'reservationsBtn' },
  ]);

  app.appendChild(navbar);
};

const createIndexContent = () => {
  const heroImage = createImage(
    'https://picsum.photos/200/300',
    'Random Image'
  );

  app.appendChild(heroImage);

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

  app.appendChild(descriptionContainerEl);
  descriptionContainerEl.appendChild(introText);

  app.appendChild(bodyCopy);
  // bodyCopy.appendChild(bodyParaOne);
  // bodyCopy.appendChild(bodyParaTwo);
  bodyCopy.appendChild(bodyParaThree);

  const callToActionEl = createElement('div', 'callToActionEl', '');
  const callToActionBtn = createElement(
    'button',
    'callToActionBtn',
    'BOOK NOW'
  );

  app.appendChild(callToActionEl);
  callToActionEl.appendChild(callToActionBtn);
};

function main() {
  createNewNav();
  createIndexContent();
}

main();
