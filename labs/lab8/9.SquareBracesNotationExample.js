var car = {
	brand: "BMV",
	model: "M6 Gran Coupe",
	year: 2016
};
console.log("The car before:", car);

function addProperty(obj, propertyName, propertyValue) {
	obj[propertyName] = propertyValue;
}
addProperty(car, "color", "red");
addProperty(car, "doors", "5");

console.log("The car after:", car);
