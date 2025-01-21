class Person{
    name="Anonymous";
    age;

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log(`I'm ${this.name}, ${this.age} years old.`);
    }
}

let p1 = new Person('Pesho', 23);
let p2 = new Person();
p1.greet();
p2.greet();