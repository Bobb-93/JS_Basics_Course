let redNode = document.querySelector("#red");
let greenNode = document.querySelector("#green");
let outputNode = document.querySelector(".output");

redNode.addEventListener("click", function (e) {
  outputNode.innerHTML += `<br>Target: ${e.target.id} was clicked<br>`;
  outputNode.innerHTML += `<br>Current Target: ${e.currentTarget.id} <br>`;
});

greenNode.addEventListener("click", function () {
  outputNode.innerHTML += "Green was clicked<br>";
});

document.body.addEventListener("click", function () {
  outputNode.innerHTML += "Body was clicked<br>";
});
