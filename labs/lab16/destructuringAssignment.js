/* --------------------------- Array Destructuring -------------------------- */
// let data = ['Ada',23];

// let [userName, userAge] = data;

// console.log(userName);
// console.log(userAge);

// console.log('--------');
// let [a,b] = [1,2,3];
// console.log(a,b);

// let [a1,b1] = [1];
// console.log(a1,b1);

// console.log('swap');

// // TASK: swap vaiable values
// let x = 1;
// let y = 2;

// // before ES6
// let z = y;
// y=x;
// x=z;

// console.log(x,y);

// // after ES6
// [x,y] = [y,x];

// console.log(x); // 2
// console.log(y); // 1

console.log("**********");

// let data = {
//     userName:'Ada',
//     userAge:23
// };

// let userName, userAge;
// userName = data.userName;
// userAge = data.userAge;

// let {userAge, userName} = data;

// console.log(userName);
// console.log(userAge);

// Remove object properties
let obj = { a: 1, b: 2, c: 3 };

// 'c' will go into c, and the rest of obj into obj2
let { c, b, ...obj2 } = obj;

console.log(c);
console.log(obj2);

const userData = {
  id: 1,
  name: "Ada",
  age: 23,
  town: "Sofia",
};

// let {name, age} = userData;

function greet({ name, age }) {
  console.log(`Hello ${name}. You are ${age} years old!`);
}

greet(userData);
