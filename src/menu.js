import { createElement, createImage } from './utils.js';
import { app } from './ui.js';
import { menu } from './data.json';


// const drinks = {
//   introText:
//     'Indulge in the vibrant flavors of the Caribbean with our refreshing selection of drinks, specially crafted to complement the rich and diverse cuisine of the Dominican Republic.',
//   'Tropical Delights': {
//     'Mango Tango Cooler':
//       'A blend of ripe mangoes and a hint of lime, served over ice.',

//     'Passionfruit Paradise':
//       'An exotic mix of passionfruit, pineapple, and coconut milk.',

//     'Papaya Punch': 'Fresh papaya puree with a splash of guava nectar.',
//   },

//   'Signature Cocktails': {
//     'El Presidente':
//       'A classic Dominican cocktail made with rum, vermouth, and bitters.',
//     'Mama Juana':
//       'A traditional Dominican drink made with rum, red wine, honey, and herbs.',
//     'Santo Libre':
//       'Our take on the classic Cuba Libre, featuring aged rum and local cola.',
//     'Morir Soñando Martini':
//       'A creamy concoction of orange juice, condensed milk, and a touch of vanilla.',
//   },

//   'Coffe and Tea': {
//     'Café con Leche': 'A rich and creamy blend of coffee and milk.',
//     'Café Santo Domingo': 'A bold and flavorful Dominican coffee.',
//     'Jamaica Tea': 'A refreshing hibiscus tea with a hint of ginger.',
//   },
// };

// const mainDishes = {
//   introText:
//     'Embark on a culinary journey through the heart of Dominican cuisine. Our main dishes are a celebration of bold flavors and traditional recipes passed down through generations.',

//   tradicionales: {
//     'La Bandera Tradicional':
//       'The national dish of the Dominican Republic, featuring rice, beans, and meat.',
//     'Mariscos Especiales':
//       'A seafood lover’s dream, with shrimp, lobster, and crab.',
//     'Chivo Guisado': 'A hearty stew of goat meat, potatoes, and carrots.',
//   },

//   'Mariscos Especiales': {
//     'Camarones Criollos':
//       'Shrimp sautéed in a tomato-based sauce with peppers and onions.',
//     'Pescado Frito': 'Fried fish served with rice, beans, and plantains.',
//     'Camarones al Ajillo': 'Shrimp sautéed in garlic and olive oil.',
//     'Lobster Ceviche':
//       'Fresh lobster marinated in lime juice and served with plantain chips.',
//   },

//   'Sabores de la Tierra': {
//     'Mofongo Relleno':
//       'Mashed and fried green plantains stuffed with your choice of savory meats.',
//     'Locrio de Pollo':
//       'A Dominican twist on paella, featuring chicken, rice, vegetables and a burst of spices.',
//     'Pastelón de Plátano':
//       'Layers of sweet plantains, ground meat, and melted cheese. A Dominican take on lasagna.',
//   },
// };

// const desserts = {
//   introText:
//     'End your meal on a sweet note with our delightful Dominican desserts, each one a harmonious blend of tropical ingredients and authentic flavors.',
//   'Dulces Criollos': {
//     'Tres Leches Cake':
//       'A light, airey and velvety sponge cake soaked in three types of milk and topped with whipped cream.',
//     'Flan de Coco':
//       'A creamy coconut custard topped with delicate caramel glaze.',
//     Majarete: 'A sweet corn pudding with a hint of cinnamon.',
//   },

//   'Frutas Frescas': {
//     'Mango Sorbet': 'A refreshing treat made with fresh mangoes.',
//     'Guava Empanadas':
//       'A crispy pastry filled with guava paste, served with vanilla ice cream.',
//     'Fruit Platter':
//       'A selection of fresh tropical fruits, including mango, papaya, and pineapple. Perfect for a light and healthy ending.',
//   },
// };

// const outroText =
//   'Savor the true essence of the Dominican Republic through our carefully curated drinks, main dishes, and desserts. Each bite and sip is a journey to the sunny shores and vibrant streets of this captivating Caribbean nation.';

const createMenuContent = () => {
  const drinksEl = createElement('div', 'drinksEl', '');
  const mainDishesEl = createElement('div', 'mainDishesEl', '');
  const dessertsEl = createElement('div', 'dessertsEl', '');

  app.appendChild(drinksEl);
  drinksEl.appendChild(createElement('h2', 'drinksTitle', 'Drinks'));
  drinksEl.appendChild(createElement('p', 'introText', drinks.introText));

  app.appendChild(mainDishesEl);
  mainDishesEl.appendChild(
    createElement('h2', 'mainDishesTitle', 'Main Dishes')
  );

  app.appendChild(dessertsEl);
  dessertsEl.appendChild(createElement('h2', 'dessertsTitle', 'Desserts'));

  const drinksIntroText = createElement(
    'p',
    'drinksIntroText',
    `${drinks.introText}`
  );

  const drinksSectionOne = createElement('div', 'drinksSectionOne', '');
  const drinksSectionTwo = createElement('div', 'drinksSectionTwo', '');

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

  const bodyCopyEl = createElement('div', 'bodyCopy', '');

  // app.appendChild(siteTitle);

  app.appendChild(descriptionContainerEl);
  descriptionContainerEl.appendChild(introText);

  app.appendChild(bodyCopyEl);
  // bodyCopy.appendChild(bodyParaOne);
  // bodyCopy.appendChild(bodyParaTwo);
  bodyCopyEl.appendChild(bodyParaThree);

  const callToActionEl = createElement('div', 'callToActionEl', '');
  const callToActionBtn = createElement(
    'button',
    'callToActionBtn',
    'BOOK NOW'
  );

  app.appendChild(callToActionEl);
  callToActionEl.appendChild(callToActionBtn);
};
