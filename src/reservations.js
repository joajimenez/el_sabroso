import { createElement } from "./utils.js";
import { contentEL } from "./index.js";

// This function creates the reservation form
export function createReservationsSection() {
  const form = createElement("form", "form-el", "");
  const innerGrid = createElement("div", "grid", "");

  const firstNameLabel = createElement("label", "firstNameLabel", "");
  firstNameLabel.htmlFor = "firstNameInput";
  firstNameLabel.textContent = "First Name";

  const firstNameInput = createElement("input", "firstNameInput", "");
  firstNameInput.id = "firstNameInput";

  const lastNameLabel = createElement("label", "lastNameLabel", "");
  lastNameLabel.htmlFor = "lastNameInput";
  lastNameLabel.textContent = "Last Name";

  const lastNameInput = createElement("input", "lastNameInput", "");
  lastNameInput.id = "lastNameInput";

  const dateInput = createElement("input", "date-input", "");
  dateInput.type = "date";

  const emailLabel = createElement("label", "emailLabel", "");
  emailLabel.htmlFor = "emailInput";
  emailLabel.textContent = "Email";

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

export function createAlternateReservationsSection() {
  let formHtml = `<form>

     <p>Please make your reservation here.</p>
    

  <!-- Grid -->
  <div class="grid">

    <!-- Markup example 1: input is inside label -->
    <label for="firstname">
      First name
      <input type="text" id="firstname" name="firstname" placeholder="First name" required>
    </label>

    <label for="lastname">
      Last name
      <input type="text" id="lastname" name="lastname" placeholder="Last name" required>
    </label>

  </div>

  <label for="datetime">Please select your visit date</label>
  <input type="datetime-local" name="datetime" id="datetime">

  <label for="number-of-guest">Number of guests</label>
  <input type="number" name="number-of-guest" id="number-of-guest">

  <!-- Markup example 2: input is after label -->
  <label for="email">Email address</label>
  <input type="email" id="email" name="email" placeholder="Email address" required>
  <small>We'll never share your email with anyone else.</small>

  <!-- Button -->
  <button type="submit">Submit</button>

</form>`;

  contentEL.innerHTML = formHtml;

  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const firstName = document.querySelector("#firstname");
    const lastName = document.querySelector("#lastname");
    const email = document.querySelector("#email");
    const date = document.querySelector("#datetime");
    const numberOfGuests = document.querySelector("#number-of-guest");

    const reservation = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      date: date.value,
      numberOfGuests: numberOfGuests.value,
    };

    alert(
      `Reservation set for ${reservation.numberOfGuests} guests on ${reservation.date} from ${reservation.firstName} ${reservation.lastName} with email ${reservation.email}.
      
      We're trilled to see you soon.`
    );
  });
}
