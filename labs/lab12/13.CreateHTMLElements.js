// get the body as element object
const bodyNode = document.body;

function createElementDemo() {
  // create header element
  const headerNode = document.createElement("header");
  // add class and text content to header element
  headerNode.className = "test";
  headerNode.textContent = "This header is  created by createElementDemo!!!";

  // attach the header element to the body
  bodyNode.appendChild(headerNode);
}

function setInnerHTMLDemo() {
  bodyNode.innerHTML = `<header class="test">This header is  created by setInnerHTMLDemo</header>`;
}

setInnerHTMLDemo();
createElementDemo();
