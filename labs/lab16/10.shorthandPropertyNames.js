let userName = 'pesho';
let userAge = 23;

// ES6 way:
let p1 = {userName, userAge};

// ES5 way:
// let p1 = {userName:userName, userAge:userAge};

console.log(p1); // { userName: 'pesho', userAge: 23 }