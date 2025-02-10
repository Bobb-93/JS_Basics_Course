let fruits = ["apple", "banana", "strawberry"];

// брой на елементите на масив:
fruits.length; // 3
console.log(fruits);

//добавяне на елемент в началото на масива:
fruits.unshift("orange");
console.log(fruits);

// ["orange", "apple", "banana", "strawberry"]

//добавяне на елемент в края на масива:
fruits.push("lemon");
console.log(fruits);

// ["orange", "apple", "banana", "strawberry", "lemon"]

// премахване на елемент от началото на масива:
fruits.shift();
console.log(fruits);

// ["apple", "banana", "strawberry", "lemon"]

// премахване на елемент от края на масива:
fruits.pop();
console.log(fruits);

// ["apple", "banana", "strawberry"]

console.log(typeof fruits);

let arr = [2, 4, 6];

if (arr.lenght) {
  console.log(`Non empty array`);
} else {
  console.log(`Empty array`);
}
// Empty array

if (arr.length) {
  console.log(`Non empty array`);
} else {
  console.log(`Empty array`);
}

// let fruits = ['apple', 'banana', 'strawberry'];

for (let i = fruits.length - 1; i >= 0; i--) {
  console.log(`Елемент ${i}: ${fruits[i]}`);
}
// Елемент 2: strawberry
// Елемент 1: banana
// Елемент 0: apple

let matrix = [
  ["а", "б", "в"],
  ["г", "д", "е"],
  ["ж", "з", "и"],
];
console.log("matrix:", matrix);

console.log("row 0, col 2: ", matrix[0][2]); // 'в'
console.log("row 1, col 1: ", matrix[1][1]); // 'д'
console.log("row 2, col 0: ", matrix[2][0]); // 'ж'

let rows = matrix.length;
let cols = matrix[0].length;

for (let i = 0; i < rows; i++) {
  console.log("row:", i);
  for (let j = 0; j < cols; j++) {
    console.log(matrix[i][j] + ",");
  }
}
// row: 0
// а,
// б,
// в,
// row: 1
// г,
// д,
// е,
// row: 2
// ж,
// з,
// и,
