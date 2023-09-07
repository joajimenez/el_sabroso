// The following code creates the ABOUT US section in the restaurant page.

import { createElement } from "./utils.js";
import { contentEL } from "./index.js";
import about from "./about_us_data.json";
import aboutUsPhoto from "./assets/pexels-roman-odintsov-4552046.jpg";

const aboutUsInfoObject = about.AboutUs;

export function createAboutUsSection() {
  // The createElement function is used to create a new element with the specified tag name, class name, and text content.
  const aboutUsSection = createElement("section", "about-us", "");
  const aboutUsContainer = createElement("div", "about-us-container", "");
  const aboutUsText = createElement("p", "about-us-text", "");

  // The new Image function is used to create a new image element.
  const aboutUsImage = new Image();
  aboutUsImage.src = aboutUsPhoto;

  aboutUsContainer.appendChild(aboutUsImage);
  aboutUsContainer.appendChild(aboutUsText);
  aboutUsSection.appendChild(aboutUsContainer);
  contentEL.appendChild(aboutUsSection);

  // The aboutUsInfoObject object is a collection of information about the restaurant. The keys of the object are the names of the different sections of information, and the values are the text content for that section.
  const aboutUsInfoArray = Object.entries(aboutUsInfoObject);

  // This function iterates over the aboutUsInfoObject object and creates a h5 element for each key and a p element for each value.
  for (let array of aboutUsInfoArray) {
    let title = createElement("h5", "card-title", `${array[0]}`);
    let description = createElement("p", "card-description", `${array[1]}`);

    aboutUsContainer.appendChild(title);
    aboutUsContainer.appendChild(description);
  }
}
