import { createElement } from "./utils.js";
import { contentEL } from "./index.js";

// This function creates the reservation form
export function createReservationsSection() {
  const form = createElement("form", "form-el", "");
  const innerGrid = createElement("div", "grid", "");

  const firstNameLabel = createElement("label", "firstNameLabel", "");
  firstNameLabel.htmlFor = "firstNameInput";

  const firstNameInput = createElement("input", "firstNameInput", "");
  firstNameInput.id = "firstNameInput";

  const lastNameLabel = createElement("label", "lastNameLabel", "");
  lastNameLabel.htmlFor = "lastNameInput";

  const lastNameInput = createElement("input", "lastNameInput", "");
  lastNameInput.id = "lastNameInput";

  const dateInput = createElement("input", "date-input", "");
  dateInput.type = "date";

  const emailLabel = createElement("label", "emailLabel", "");
  emailLabel.htmlFor = "emailInput";

  const emailInput = createElement("input", "emailInput", "");
  emailInput.id = "emailInput";
  emailInput.ariaRequired = "true";

  innerGrid.appendChild(firstNameLabel);
  innerGrid.appendChild(firstNameInput);

  innerGrid.appendChild(lastNameLabel);
  innerGrid.appendChild(lastNameInput);

  innerGrid.appendChild(emailLabel);
  innerGrid.appendChild(emailInput);

  form.appendChild(innerGrid);
  contentEL.appendChild(form);
}
