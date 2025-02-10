var menuBlockNode = document.querySelector(".menuBlock");
var mainBlockNode = document.querySelector("main");
var toggleButtonNode = document.querySelector(".toggleButton");

var menuVisible = false;

// the better way of: onclick=toggleMenuBlock()
toggleButtonNode.addEventListener("click", toggleMenuBlock);

function toggleMenuBlock() {
  console.log(`toggleMenuBlock() starts`);
  if (menuVisible) {
    // hide the menu block:
    menuBlockNode.style.left = "-10em";

    // move main element:
    mainBlockNode.style.left = "0em";

    // set the menuVisible flag:
    menuVisible = false;
  } else {
    // show the menu block:
    menuBlockNode.style.left = "0px";

    // move main element next to menu:
    mainBlockNode.style.left = "10em";

    // set the menuVisible flag:
    menuVisible = true;
  }
}
