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

// Listen for and store tip percentage
let tipPercentage = 0;

const customTip = document.getElementById("custom-tip");

customTip.addEventListener("change", function (event) {
  tipPercentage = parseFloat(event.target.value);
  console.log(tipPercentage);
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

numberOfPeople.addEventListener("change", function (event) {
  people = parseFloat(event.target.value);
  console.log(add(userInput / people));
});

// Default tip functionality
let defaultTip = 0;

const selectedTip = document.querySelectorAll(".tips");

selectedTip.forEach(function (tip) {
  tip.addEventListener("click", function (event) {
    defaultTip = parseFloat(event.target.textContent);
    console.log(defaultTip);
  });
});