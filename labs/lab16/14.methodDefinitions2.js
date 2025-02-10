class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`I'm ${this.name}, ${this.age} years old.`);
  }
}

let p1 = new Person("Pesho", 23);
console.dir(p1);
