var colors = [
	"red",
	"green",
	"blue"
];
var i = 0;
var divNode = document.querySelector(".box");

function changeBGColor() {
	divNode.style.backgroundColor = colors[i++ % colors.length];
    console.log(i);
    //console.log(`i++ % colors.length: ${i++ % colors.length}`);
    if(i === 10){
        clearInterval(intervalID);
    }
    
}

let intervalID = setInterval(changeBGColor, 1000);
console.log(`After setTimeout()`);


