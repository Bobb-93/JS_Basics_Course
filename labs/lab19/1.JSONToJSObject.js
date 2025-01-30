// this is NOT a JS object, it's JUST a string
const jsonData = ` {
	"title": "Learn HTML",
	"completed": true,
	"id": 1
}`;
console.log(typeof jsonData);
console.log(jsonData);


// parse json in rder to get the js object:
const data = JSON.parse(jsonData);
console.log(typeof data);

console.log(data);
