// helper function to convert a string into CamelCased string:
const toCamelCase = function(str) {		
	// get the first letter and make it UpperCased:
	let firstLetter = str.substr(0, 1).toUpperCase();

	// get the rest of the string and make it LowerCased:
	let rest = str.toLowerCase().substr(1);

	return firstLetter + rest;
};

// constructor function for creating student objects
// when is called with "new" will auto-magically return the object
function Student(fName, sName) {
	this.firstName = fName;
	this.surName = sName;	

	this.sayFullName = function() {
		console.log(
			toCamelCase(this.firstName) + " " + toCamelCase(this.surName)
		);
	};
}

// "factory" function for creating student objects
// we explicitly create and return the object
function studentFactory(fName, sName) {
	let obj = {};
	obj.firstName = fName;
	obj.surName = sName;

	obj.sayFullName = function() {
		console.log(toCamelCase(fName) + " " + toCamelCase(sName));
	};

	return obj;
}

// create students objects by literals:
let student1 = {
	firstName: "MARia",
	surName: "petrova",

	sayFullName: function() {
		// we access the object properties prefexing them with "student1" or "this":
		console.log(toCamelCase(this.firstName) + " " + toCamelCase(this.surName));
	}
};
let student2 = {
	firstName: "petaR",
	surName: "ATANASOV",

	sayFullName: function() {
		// we access the object properties prefexing them with "student1" or "this":
		console.log(toCamelCase(this.firstName) + " " + toCamelCase(this.surName));
	}
};

// create student objects with the constructor function:
let student3 = new Student("stoyan", "IVANOV");
let student4 = new Student("maRINA", "hristova");

// create student objects with the factory function:
let student5 = studentFactory("VaSIL", "poPOV");
let student6 = studentFactory("eliSAVETA", "mihajlova");

// let's test the objects:
student1.sayFullName();
student2.sayFullName();
student3.sayFullName();
student4.sayFullName();
student5.sayFullName();
student6.sayFullName();