function addElement(num) {
	console.log(`num = ${num}`);
	var divNode = document.createElement("div");
	divNode.innerHTML = "div " + num;
	divNode.style.border = "1px solid #F00";
	document.body.appendChild(divNode);
}

for (let i = 0; i < 50; i++) {
	setTimeout(addElement, 1000 * i, i + 1);
}