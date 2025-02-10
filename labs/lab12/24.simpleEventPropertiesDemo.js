let btnNode = document.querySelector(".mouseEventDemo button");
let inputNode = document.querySelector(".keyboardEventDemo input");

let eventHandler = function (event) {
  console.log(`The Event object is`);
  console.dir(event);

  if (event.type === "click") {
    this.nextElementSibling.innerHTML = `
			<div><code>event.clientX</code>: ${event.clientX}</div>
			<div><code>event.clientY</code>: ${event.clientY}</div>
		`;
  } else if (event.type === "keyup") {
    this.nextElementSibling.innerHTML = `
			<div><code>event.key</code>: ${event.key}</div>
			<div><code>event.keyCode</code>: ${event.keyCode}</div>
		`;
  } else {
    console.error(`Something is wrong.`);
  }
};

btnNode.addEventListener("click", eventHandler);
inputNode.addEventListener("keyup", eventHandler);
