var toggleMenuButtonNode = document.querySelector(".toggle_menu_button");
var toggleMenuButtonSmallNode = document.querySelector(
  ".toggle_menu_button_small",
);
var menuNode = document.querySelector(".menu");
var mainNode = document.querySelector("main");

var menuVisible = false;

function toggleMenu() {
  // ако менюто е видимо => скриваме го:
  if (menuVisible) {
    setNodeStyle(menuNode, {
      left: "-12em",
      backgroundColor: "#999",
      opacity: ".8",
    });

    // стилизираме и другите елементи, когато менюто е скрито:
    setNodeStyle(mainNode, {
      opacity: "1",
    });
    setNodeStyle(toggleMenuButtonNode, {
      display: "block",
      // искаме бутона да се покаже след като менюто се е скрило напълно
      animation: "slowShow 1s",
    });

    // задаваме флага за видимост
    menuVisible = false;
  } else {
    // ако менюто е скрито => показваме го:
    setNodeStyle(menuNode, {
      left: "0px",
      backgroundColor: "#333",
      opacity: "1",
    });

    // стилизираме и другите елементи, когато менюто е видимо:
    setNodeStyle(mainNode, {
      opacity: "0.2",
    });
    setNodeStyle(toggleMenuButtonNode, {
      display: "none",
    });

    // задаваме флага за видимост
    menuVisible = true;
  }
}

function setNodeStyle(node, stl) {
  console.log(`\nStyling ${node.tagName}`);
  for (var p in stl) {
    node.style[p] = stl[p];
    console.log(`${p} = ${node.style[p]}`);
  }
}
