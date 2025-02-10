function productsClickHandler(e) {
  // "взимаме" обекта, върху който е кликнато - ако не е select елемента, прекратяваме функцията
  if (e.target.nodeName !== "SELECT") {
    return;
  }

  // след като сме тук, значи в e.target имаме обекта, представящ select елемента
  let select = e.target;
  console.log(select);

  // "взимаме" value стойността на избрания option:
  let imagePath = select.value;

  // трябва да вземем съответния img element object. Можем да изпозлваме DOM пропъртита за навигиране в DOM дървото
  // https://www.w3schools.com/jsref/prop_node_parentelement.asp
  // https://www.w3schools.com/jsref/prop_node_previoussibling.asp
  const img = select.parentElement.previousElementSibling.children[0];
  console.log(img);

  // сега можем лесно да променим стойността на src атрибута с imagePath:
  img.src = imagePath;
}

// "взимаме" <div class="products">, тъй като всички елементи, които ни трябват са в него:
let products = document.querySelector(".products");

// при клик върху products, искаме да се изпълни функцията productsClickHandler():
products.addEventListener("click", productsClickHandler);
