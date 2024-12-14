let nodes = {
	userDelay: document.querySelector('input[type="number"]'),
	userColor: document.querySelector('input[type="color"]'),
	btnStart: document.querySelector(".start"),
	btnCancel: document.querySelector(".cancel")
};

function getInputValue(inputNode) {
	return inputNode.value;
}
function changeBodyBackground(color) {
	document.body.style.background = color;
}

var timerID; // should it be global?

// attach events:
nodes.btnStart.addEventListener("click", function() {
	// we need a number type ('4'*1 = 4):
	let userDelay = getInputValue(nodes.userDelay) * 1;
	console.log(`userDelay=${userDelay}`);

	let userColor = getInputValue(nodes.userColor);
	console.log(`userColor=${userColor}`);

	// set userColor as body background, after userDelay:
	timerID = setTimeout(changeBodyBackground, userDelay, userColor);
});

nodes.btnCancel.addEventListener("click", function() {
	console.log(`Timer canceled!`);
	clearTimeout(timerID);
});
