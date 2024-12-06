// пример за обект, съхраняващ информация за 1 студент::
let student1 = {
    // properties:
    "firstName" : "Pesho",
    "surName" : "Petrov",

    // methods
    "greet": function() {
        console.log(`Hello, I'm ${this.firstName}`);
    }
};

let dictionary = {
    // съвкупност от 'key':'value' двойки
    'apple': 'ябълка',
    'banana': 'банан',
    'orange': 'портокал'
}

// пример за обект, съхраняващ информация за 1 студент::
let student2 = {
    // properties:
    "name":"Pesho",
    "address":{
        "town":"Sofia",
        "zip": 1508
    },
    "scores": [3,4,5],


    // methods
    "greet": function() {
        console.log(`Hello, I'm ${this.name}`);
    }
};

// създаване празен обект:
var obj = {};

// създаване на обект с 4 свойства (properties):
var car1 = {
    "brand" : "ford",
    "year"  : 2016,
    "color" : "red",
    "doors" : 3
}

var obj2 = new Object();

//var obj = new Car();

