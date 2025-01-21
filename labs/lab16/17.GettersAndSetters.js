class Person{
    constructor(name){
        this._name = name || "Anonymous";
    }
    get name(){
        console.log(`getting name at: ${new Date()}`);
        return this._name;
    }

    set name(name){
        console.log(`setting new name at: ${new Date()}`);
        this._name = name;
    }

    greet(){
        console.log(`I'm ${this.name}`); // here we use the getter
    }
}

let p1 = new Person('Pesho', 23);
p1.name = 'Peter'; // here we use the setter
p1.greet();
