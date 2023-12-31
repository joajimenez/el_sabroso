import { createElement } from "./utils.js";
import { contentEL } from "./index.js";
import Swal from "sweetalert2";

// This function creates the reservation form

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

    // Use the SweetAlert2 library to display a success message
    Swal.fire({
      titleText: "Reservation successful!",
      text: `Reservation set for ${reservation.numberOfGuests} guests on ${reservation.date} from ${reservation.firstName} ${reservation.lastName} with email ${reservation.email}.

      We're trilled to see you soon.`,
      icon: "success",
      confirmButtonText: "OK",
      confirmButtonColor: "#039be5",
    });
  });
}
