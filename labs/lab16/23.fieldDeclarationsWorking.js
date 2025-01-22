class Person{
    name="Anonymous";
    age;

    constructor(name, age){
        if(name!=undefined){
            this.name=name;
        }
        this.age = age;
    }

    // constructor(name="ivan", age=69){
    //     this.name=name;
    //     this.age = age;
    // }

    // constructor(name, age){
    //     this.name="pencho";
    //     this.age;
    //     this.name=name;
    //     this.age=age
    // } // syvsem e zle

    greet(){
        console.log(`I'm ${this.name}, ${this.age} years old.`);
    }
}

let p1 = new Person('Pesho', 23);
let p2 = new Person();
let p3 = new Person('pencho');

p1.greet();
p2.greet();
p3.greet();