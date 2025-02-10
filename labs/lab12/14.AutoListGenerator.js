const outputNode = document.getElementById("resultContainer"),
  listTypeNode = document.getElementById("listType");
listType, listItemsCount;
const listItemsNode = document.getElementById("listItemsCount");

function createList() {
  // clean the outputNode content
  outputNode.innerHTML = "<h1>Резултат</h1>";

  // get list parameters
  listItemsCount = listItemsNode.value;
  listType = listTypeNode.value;

  // create the list element
  const listNode = document.createElement(listType);

  //create list items
  for (let i = 1; i <= listItemsCount; i++) {
    // create a li node
    const listItem = document.createElement("li");

    // set its content:
    listItem.innerHTML = `Item ${i}`;

    // attach the li node to the list container:
    listNode.appendChild(listItem);
  }

  // attach the list container to output node:
  outputNode.appendChild(listNode);
}
