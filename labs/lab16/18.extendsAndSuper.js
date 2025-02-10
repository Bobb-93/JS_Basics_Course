class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`I'm ${this.name}, ${this.age} years old.`);
  }
}

class Developer extends Person {
  constructor(name, age, skills) {
    // call the parent constructor:
    super(name, age);
    this.skills = skills;
  }

  greet() {
    // call the parent greet() method
    super.greet();
    console.log(`My skills are: ${this.skills.join()}`);
  }
}

let dev1 = new Developer("Pesho", 23, ["JS", "React", "Vue"]);
dev1.greet();
