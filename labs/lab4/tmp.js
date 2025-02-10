console.log(parseInt("FF", 16));

let x = parseInt(2.45);
console.log(x);
console.log(typeof x);

console.log(NaN === NaN);
console.log(NaN !== NaN); // true
console.log("****");

console.log(NaN == NaN);
console.log(5 > NaN);

console.log("*****");

console.log(isNaN(5)); // false
console.log(isNaN(NaN)); // true
console.log(isNaN("abc")); // true

// check if user guess is number in [1..100]
let userGuess = parseInt("");

if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
  console.log(`Enter a number, please!`);
}

// while (condition) {

// }
