"use strict";

// STEPS
// 1. Add basic calculator functions

// 2. Calculate Tip Amount per person
// Divide Bill by 100
// Multiply the result by selected Tip percentage
// Divide result by number of people

// 3. Add room for custom tip percentage

// 4. Calculate Total per person
// Divide bill by number of people
// Add tip amount to result

// 5. Add reset button

// Listen for and store bill input
let userInput = 0;

const billInput = document.getElementById("bill-input");

billInput.addEventListener("change", function (event) {
  userInput = parseFloat(event.target.value);
});
