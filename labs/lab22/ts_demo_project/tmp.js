class Person {
    name
    constructor(firstName, surName) {
        this.firstName = firstName;
        this.surName = surName;
        this.name = `${this.firstName} ${this.surName}`
    }
}

const pesho = new Person('Petar', 'Petrov');

console.log(pesho);
