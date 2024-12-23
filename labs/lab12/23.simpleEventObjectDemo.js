let btnNode = document.querySelector(".mouseEventDemo button");
let inputNode = document.querySelector(".keyboardEventDemo input");

let eventHandler = function (event) {
	console.log(`The Event object is`);
	console.log(event);
};

btnNode.addEventListener("click", eventHandler);
inputNode.addEventListener("keyup", eventHandler);
