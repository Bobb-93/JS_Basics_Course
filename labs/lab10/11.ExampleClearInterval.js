var counterNode = document.querySelector(".counter");
var stopCounterNode = document.querySelector(".stopCounter");
var count = 1;

function doCounting() {
  counterNode.innerHTML = count++;
}

function stopCounting() {
  clearInterval(counterID);
}

stopCounterNode.addEventListener("click", stopCounting);

var counterID = setInterval(doCounting, 1000);
