var color = "#DAA371";

function changeBodyBG() {
  console.log(`changeBodyBG() will change the body background!`);
  document.body.style.backgroundColor = color;
}

setTimeout(changeBodyBG, 2000);

console.log(`After setTimeout()`);
