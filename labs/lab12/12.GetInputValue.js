// Get DOM nodes:
const inputNode = document.querySelector("input[type='text']");
const outputNode = document.querySelector("#output");
const btnClick = document.querySelector("button");

// Define showInputValue() function
function showInputValue() {
  outputNode.innerHTML = inputNode.value;
}

// Add an event listener for the click event on the button
// When the button is clicked, the showInputValue function will be called
btnClick.addEventListener("click", showInputValue);
