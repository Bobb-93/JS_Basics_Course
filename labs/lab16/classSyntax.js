/* ------------------------------- Before ES6 ------------------------------- */
// function Person(name, age) {
//     this.name = name;
//     this.age = age;

// }
// Person.prototype.greet = function() {
//     console.log(`Hello, ${this.name}, you are ${this.age} years old!`);
// }

// let pesho = new Person('Petar', 23);
// let maria = new Person('Maria', 30);

// pesho.greet();
// maria.greet();

/* ------------------------------- After ES 6 ------------------------------- */
class Person {
  #name; // private property
  age;
  country = "UK";

  constructor(name, age) {
    this.#name = name;
    this.age = age;
    Person.counter();
  }

  greet() {
    console.log(
      `Hello, ${this.#name}, you are ${this.age} years old! You are from ${this.country}. `,
    );
  }

  // static method
  static counter() {
    Person.count += 1;
  }

  // getters and setters
  get name() {
    console.log(`getting name at: ${new Date()}`);
    return this.#name;
  }

  set name(name) {
    console.log(`setting new name at: ${new Date()}`);
    this.#name = name;
  }
}

Person.count = 0;

// create Person instances:
let pesho = new Person("Petar", 23);
let maria = new Person("Maria", 30);

// pesho.name = 'Anonmous';  //pesho.name('Anonymous')
console.log(pesho.name); //pesho.name()

pesho.greet();
maria.greet();

console.log(Person.count);
