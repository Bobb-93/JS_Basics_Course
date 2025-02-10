var dom = {
  ulNode: document.querySelector(".player ul"),
  outputNode: document.querySelector(".output"),
};

function onUlClick(e) {
  console.dir(e.target);
  //console.dir(e.currentTarget);

  // we attach the event on the UL, but the event.target contains the actual element being clicked!
  dom.outputNode.innerText = e.target.innerText;
  //dom.outputNode.innerText = e.currentTarget.innerText;
}

dom.ulNode.addEventListener("click", onUlClick);
