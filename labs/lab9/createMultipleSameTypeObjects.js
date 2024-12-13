//1. By literals
const obj1 = {
    x:1,
    showX:function() {
        console.log(this.x);
    }
};

const obj2 = {
    x:2,
    showX() {
        console.log(this.x);
    }
};

obj1.showX();
obj2.showX();

// 2. By "Factory" function
function objFactory(x) {
    let obj = {};

    obj.x = x;
    obj.showX = function() {
        console.log(this.x);
    }

    return obj
}

const obj3 = objFactory(3);
obj3.showX();

// 3. By "Constructot" function
function Obje(x) {
    this.x = x;
};
Obje.prototype.showX = function() {
    console.log(this.x);
};

const obj4 = new Obje(4);
const obj5 = new Obje(5);
obj4.showX();
obj5.showX();

class Obj{
    constructor(x){
        this.x = x;
    }
    showX(){
        console.log(this.x);
    }
}

const obj6 = new Obj(6);
const obj7 = new Obj(7);

obj6.showX();
obj7.showX();

console.log('Inheritance');


/* ------------------------------- Inheritance ------------------------------ */
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log(`Hi, I'm ${this.name} - ${this.age}!`);
    }
}

class Teacher extends Person{

    greet(){
        console.log(`Hello, I'm ${this.name} - ${this.age}!`);
    }
};

class Student extends Person{

}

const students = [
    new Student('Ivan', 23),
    new Student('Maria', 16)
];

const teacher1 = new Teacher('Teacher1', 56);

students[0].greet();
students[1].greet();
teacher1.greet()

