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

const errorMessage = document.getElementById("error-message");

billInput.addEventListener("input", function (event) {
  const inputValue = parseFloat(event.target.value);

  if (inputValue <= 0) {
    billInput.classList.add("error");
    errorMessage.style.display = "block";
  } else {
    billInput.classList.remove("error");
    errorMessage.style.display = "none";
    userInput = inputValue;
  }
});

// Listen for and store tip percentage
let tipPercentage = 0;

const customTip = document.getElementById("custom-tip");

customTip.addEventListener("input", function (event) {
  tipPercentage = parseFloat(event.target.value);
});

function add(bill) {
  if (defaultTip > 0) {
    return bill * (defaultTip / 100);
  } else {
    return bill * (tipPercentage / 100);
  }
}

// Listen for and store number of people
let people = 0;

const numberOfPeople = document.getElementById("total-people");

// target result div
const result1Div = document.getElementById("amount1");

const result2Div = document.getElementById("amount2");

numberOfPeople.addEventListener("input", function (event) {
  people = parseFloat(event.target.value);

  // store total per person in tips
  const tips = userInput / people;

  // run add function on tips
  const tipPerPerson = add(tips).toFixed(2);

  // add tip per person to total per person
  const totalPerPerson = (tips + parseFloat(tipPerPerson)).toFixed(2);

  //  display tip
  result1Div.textContent = tipPerPerson;

  // display total per person
  result2Div.textContent = totalPerPerson;
});

// Default tip functionality
let defaultTip = 0;

const selectedTip = document.querySelectorAll(".tips");

selectedTip.forEach(function (tip) {
  tip.addEventListener("click", function (event) {
    defaultTip = parseFloat(event.target.textContent);
  });
});

// Reset
const resetButton = document.getElementById("reset");

resetButton.addEventListener("click", function (event) {
  billInput.value = "";
  numberOfPeople.value = "";
  userInput = 0;
  people = 0;

  // Remove error states
  billInput.classList.remove("error");
  numberOfPeople.classList.remove("error");
  errorMessage.style.display = "none";

  // Clear the result displays
  result1Div.textContent = "$0.00";
  result2Div.textContent = "$0.00";
});
