let maria = {
	firstName 		: "Maria",
	hair	  		: "blond",
	eye 	  		: "blue",	
};

let pesho = {
	firstName 		: "Pesho",
	hair	  		: "black",
	eye 	  		: "red",	
};

// add another property to each object:
maria.lastName = "popova";
pesho.lastName = "petrov";

// add method greet to each object:
maria.greet = function(){
	console.log(`Hello, I'm ${this.firstName}`);
}
pesho.greet = function(){
	console.log(`Hello, I'm ${this.firstName}`);
}


//Let's use the objets:
maria.greet();
pesho.greet();
