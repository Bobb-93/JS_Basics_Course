/* --------------------------------- Number --------------------------------- */
// цяло число, положително
let x = 10;

// цяло число, отрицателно
let y = -5;

// реално число
const PI = 3.14;

// реално число, експонентен запис:
let million = 1e6;

let budget = 1_234_000_000;

console.log(x);
console.log(y);
console.log(PI);
console.log(million);
console.log(budget);
console.log("*********");

/* --------------------------------- String --------------------------------- */
let x1 = 3;
let y1 = "3";

// RAM:
//     x:123: 00000011 (1*2^0 + 1*2^1 = 3)
//     y:124: 00001101 (51 in ASCII table)

console.log(3);
console.log("3");
console.log("3");
console.log("Tom's pub");
console.log("Tom's pub");
console.log("a/n");
console.log("a\\n");
console.log("Line1\nLine2\tLine3");

console.log(`Line1
Line2)
Line3)
Line4)
Line5`);

console.log("********");

console.log("${2+2}");
console.log(`${2 + 2}`);
console.log(2 + 2);

let x2 = 10;
console.log(x2);
console.log(`${x2}`);

console.log("**********");

let userName = "Pesho";
let userAge = 23;
console.log("Hello, " + userName + ". You are " + userAge + " years old!");
console.log(`Hello, ${userName}. You are ${userAge} years old!`);

let x3 = "3";
let y3 = "3";
let z3 = `3`;

let x4 = 3,
  y4 = 5;
console.log("x4+y4=" + (x4 + y4));
console.log(`x4+y4=${x4 + y4}`);

console.log(3);
console.log("3");
console.log(true);
console.log(false);
console.log(null);
console.log(undefined);

let x5 = null;
let y5 = undefined;
let z5;

console.log(x5);
console.log(y5);
console.log(z5);

console.log(typeof true);
console.log(typeof null);
console.log(typeof 3);
console.log(typeof NaN);
console.log(typeof Infinity);

console.log(5 * "а");
console.log(typeof (5 * "а"));
