/* ---------------------- // Define greetUser function ---------------------- */
// Function Declaration:
// function greetUser() {
//     console.log('*'.repeat(30));
//     console.log(`Hello, ${userName}`);
//     console.log('*'.repeat(30));
// }

// let x = 1;
// console.log(x);
// console.log(greetUser);

// RAM:
//         x: 0x123: 1
// greetUser: 0x124:  010101010010101010101

// Function Expression
// let greetUser = function(userName) {
//     // let userName='Pesho'
//     let x = 1;
//     console.log('*'.repeat(30));
//     console.log(`Hello, ${userName}`);
//     console.log('*'.repeat(30));
// };

// greetUser('Maria');
// greetUser('Pesho');

/* -------------------------- // Default Parameters ------------------------- */
// function foo(x,y=100) {
//     // y = y || 100;
//     console.log(x,y);
// }

// foo(1)

/* --------------------------------- Return --------------------------------- */
// function add(x,y) {
//     console.log('Add is called');
//     return x+y;
//     console.log(`END`);
// }

// console.log( add(2,3) );
// console.log( add(3,4) + 1 );

// function sum(x,y) {
//     return x+y
// }

// function div(x,y) {
//     return x/y;
// }

// let result = sum(2,3) + div(4,2);
// console.log(result ); // 5+2 = 7

var firstName = "Ada";

function foo() {
  firstName = "Turing";
  console.log("1: ", firstName);
}
foo();

console.log("2: ", firstName);

// RAM (global):
// firstName:Turing
// RAM (foo):

// OUTPUT:
// 1:Turing
// 2:Turing
