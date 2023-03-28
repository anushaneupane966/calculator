/*
 * Implement all your JavaScript in this file!
 */
// Define the selectors
const display = document.querySelector("#display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const clearBtn = document.querySelector("#clear");
const equalsBtn = document.querySelector("#equals");

// Define the calculator functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

// Define the click handler function
function handleClick(event) {
  const clickedButton = event.target;
  const buttonValue = clickedButton.innerText;
  
  if (buttonValue === "C") {
    display.innerText = "0";
  } else if (buttonValue === "=") {
    const equation = display.innerText;
    const result = eval(equation);
    display.innerText = result;
  } else {
    const currentDisplay = display.innerText;
    const newDisplay = currentDisplay === "0" ? buttonValue : currentDisplay + buttonValue;
    display.innerText = newDisplay;
  }
}

// Add event listeners to the buttons
numbers.forEach(number => {
  number.addEventListener("click", handleClick);
});

operators.forEach(operator => {
  operator.addEventListener("click", handleClick);
});

clearBtn.addEventListener("click", handleClick);

equalsBtn.addEventListener("click", handleClick);