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

console.log('Dot notation!!!');

var obj2 = new Object();
console.log(obj2);
console.log(obj2.youurMum);
console.log(obj2);


//var obj = new Car();

const developer1 = {
    "firstName" : "Ivan",
    "surName"   : "Ivanov",
    "skills"     : ["HTML", "CSS", "JavaScript"],

    "applyForJob": function(){
        const skillsStr = this.skills.toString();
        console.log(`Hi, I'm ${this.firstName} ${this.surName}. My strongest skills are ${skillsStr}.`);
    }
}

console.log( developer1.firstName ); //Ivan
console.log( developer1.surName );   //Ivanov

console.log( developer1.skills );
// ["HTML", "CSS", "JavaScript"]

console.log( developer1.skills[0] ); //"HTML"

console.log( developer1.applyForJob() );
// Ivan is applying for job!

developer1.firstName = "Stoyan";
// промяна на свойството "firstName"
console.log(developer1);

