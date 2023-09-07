
import "./style.css";
import "@picocss/pico/css/pico.min.css";
import {
  createContentEl,
  createElement,
  createImage,
  createNav,
  createBookNowButton,
} from "./utils.js";
import { app } from "./ui.js";
import { createMenuContent } from "./menu.js";
import { createAboutUsSection } from "./about.js";
import {
  createReservationsSection,
  createAlternateReservationsSection,
} from "./reservations.js";
import heroPhoto from "./assets/rest_hero.jpg";

export const contentEL = createContentEl();

const createNewNav = () => {
  const navbar = createNav("EL SABROSO", [
    { text: "MENU", href: "#", id: "menuBtn" },
    { text: "ABOUT", href: "#", id: "aboutBtn" },
    { text: "RESERVATIONS", href: "#", id: "reservationsBtn" },
  ]);

  app.appendChild(navbar);
};

const createIndexContent = () => {
  app.appendChild(contentEL);

  const heroImage = new Image();
  heroImage.src = heroPhoto;

  contentEL.appendChild(heroImage);

  const descriptionContainerEl = createElement(
    "div",
    "descriptionContainerEl",
    ""
  );

  const introText = createElement(
    "p",
    "introText",
    "Welcome to EL SABROSO, a restaurant that celebrates the delicious flavors of the Dominican Republic. We use only the freshest, highest-quality ingredients to create our authentic Dominican dishes, and our chefs are experts in traditional Dominican cuisine. We offer a wide variety of dishes, so there's something for everyone to enjoy."
  );

  const bodyParaOne = createElement(
    "p",
    "bodyParaOne",
    "Our passion for Dominican food is evident in every bite. We believe that food is more than just sustenance; it's a way to connect with our culture and heritage. That's why we take great care in sourcing our ingredients and preparing our dishes. We want you to experience the true flavors of the Dominican Republic, and we believe that our food is the best way to do that."
  );

  const bodyParaTwo = createElement(
    "p",
    "bodyParaTwo",
    "We also believe in providing our customers with a warm and welcoming experience. Our staff is friendly and attentive, and they're always happy to help you choose the perfect dish. We want you to feel like you're part of our family when you dine with us."
  );

  const bodyParaThree = createElement(
    "p",
    "bodyParaThree",
    "We're proud to be a part of the Dominican community in our city, and we hope you'll join us for a meal soon!"
  );

  descriptionContainerEl.appendChild(introText);
  descriptionContainerEl.appendChild(bodyParaOne);
  contentEL.appendChild(descriptionContainerEl);
};

function main() {
  createNewNav();
  createIndexContent();
  createBookNowButton(contentEL);

  const elSabrosoBtn = document.querySelector("li strong");
  const menuBtn = document.getElementById("menuBtn");
  const aboutBtn = document.getElementById("aboutBtn");
  const reservationsBtn = document.getElementById("reservationsBtn");

  elSabrosoBtn.addEventListener("click", () => {
    contentEL.innerHTML = "";
    createIndexContent();
    createBookNowButton(contentEL);
  });

  menuBtn.addEventListener("click", function () {
    contentEL.innerHTML = "";
    // console.log(tropicalDelights);
    createMenuContent();
    createBookNowButton(contentEL);
  });

  aboutBtn.addEventListener("click", function () {
    contentEL.innerHTML = "";
    createAboutUsSection();
    createBookNowButton(contentEL);
  });

  reservationsBtn.addEventListener("click", function () {
    contentEL.innerHTML = "";
    // createReservationsSection();
    createAlternateReservationsSection();
  });
}

main();
