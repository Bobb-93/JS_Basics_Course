let x = 1;
let fruit1 = "apple";
let fruits = ["apple", "banana"];

// RAM:
//     x:         0x123:  => 1
//     fruit1:    0x124:  => 'apple'
//     fruits:    0x126:  => 0x128, 0x328
//     fruits[0]: 0x128:  => 'apple'
//     fruits[1]: 0x328:  => 'banana'

/* ---------------------------- Array Definition ---------------------------- */
let arr = [];
let user = ["Ada", 34];

/* ----------------------------- Array Indexing ----------------------------- */
console.log(user[0]);
console.log(user[1]);

let numbers = [1, 2, 3];
console.log(numbers[2]);

numbers[2] = 9;
console.log(numbers); // [ 1, 2, 9 ]

console.log(numbers[1 + 1]); //9

numbers[100] = 5;
console.log(numbers);

console.log(typeof numbers);

console.log("++++++++");

/* ---------------------------- Arrays as Objects --------------------------- */
let numbers1 = [1, 2, 3];

console.log(numbers1["abc"]);
numbers1["abc"] = "ABC";
console.log(numbers1);

// Add element at the end
// numbers[numbers.length] = 9;
numbers1.push(9);
console.log(numbers1);

// Add element at the beginning
numbers1.unshift(9);
console.log(numbers1);
console.log("-------");

/* ----------------------------- numbers.length ----------------------------- */
let numbers2 = [1, 2, 3];
console.log(numbers2.length);
numbers2.pop();
console.log(numbers2.length);
console.log(`Last element: ${numbers2[numbers2.length - 1]}`);

numbers2.length = 100;
console.log(numbers2);

numbers2.length = 0;
console.log(numbers2); //[]

let arr1 = [1, 2, 3];
console.log(arr1.length); //3

if (arr1.lenght) {
  console.log("Empty array!");
} else {
  console.log(`Not empty`);
}

console.log(arr1); //[]
console.log("*******");

/* ---------------------------------- TASK ---------------------------------- */
// Prompt the user to enter numbers, 0=> for end.
// Alert the user numbers

let userNumbers = [];

do {
  let number = parseInt(prompt("Enter a number:"));

  if (number === 0) {
    break;
  }

  userNumbers.push(number);
} while (true);

alert(); // 'Your numbers: 1,2,3'

/* ------------------------ Loop over array elements ------------------------ */
let fruits1 = ["apple", "banana", "strawberry"];

// TASK: log array elements
for (let i = 0; i < fruits1.length; i++) {
  console.log(fruits1[i]);
}
console.log(fruits1[0]);
console.log(fruits1[1]);
console.log(fruits1[2]);

/* ----------------------------- Array of Arrays ---------------------------- */
// let arr = [ 1, 'Ada', [2,3] ];
// console.log( arr.length ); //3

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matrix.length); //3

console.log(matrix[2][2]); //9
console.log(matrix[1][0]); //4

for (let index = 0; index < matrix.length; index++) {
  const row = matrix[index];
  // console.log(row);
  for (let j = 0; j < row.length; j++) {
    const element = row[j];
    console.log(element);
  }
}

/* ---------------------------------- TASK ---------------------------------- */
// given the array numbers, write the code which will print in console the sum of all positive numbers in the array:
let numbers3 = [1, -2, 3, -1, 5, 4];
let sum = 0;

for (let index = 0; index < numbers3.length; index++) {
  const number = numbers3[index];
  if (number > 0) {
    sum += number;
  }
}

console.log(`sum = ${sum}`);
