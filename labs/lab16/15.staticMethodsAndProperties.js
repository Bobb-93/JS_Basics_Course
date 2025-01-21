class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
        Person.counter();
    }
    // static method
    static counter(){
        Person.count+=1;
        console.log(`${Person.count} objects were created.`);
    }

    greet(){
        console.log(`I'm ${this.name}, ${this.age} years old.`);
    }
}
// static (class) property
Person.count = 0;

let p1 = new Person('Pesho', 23);
let p2 = new Person('Maria', 28);