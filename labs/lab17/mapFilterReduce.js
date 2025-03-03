/* ------------------------------- array.map() ------------------------------ */
const input = ["a", "b", "c"];
let output = [];

for (const el of input) {
  output.push(el.toUpperCase());
}

console.log(output); //['A','B','C']

const output1 = input.map((el) => el.toUpperCase());

console.log(output1); //['A','B','C']

console.log(
  [1, 2, 3].map((el, idx) => {
    console.log(el, idx);
    return 1;
  }),
); // [1,1,1]

const input2 = [1, 2, 3];

const output2 = input2.map((el) => el ** 2);

console.log(output2); //[1,4,9]

// TASK: from 'cities' array generate a new array 'cityNames' which will contain only the names of the cities
let cities = [
  { name: "Sofia", population: 1_236_000 },
  { name: "Plovdiv", population: 343_424 },
  { name: "Burgas", population: 202_766 },
  { name: "Varna", population: 335_177 },
];

// YOUR CODE HERE:
const cityNames = cities.map(
  (city, idx) => city.name.toUpperCase() + "-" + (idx + 1),
);

// TEST:
console.log(cityNames);

// // EXPECTED OUTPUT:
// [ 'SOFIA-1', 'PLOVDIV-2', 'BURGAS-3', 'VARNA-4' ]

// TASK: from 'cities' array generate a new array 'bgCityNames' which will contain only the names
// of the cities, but mapped to their Bulgarian equivalent

let dict = {
  Sofia: "София",
  Plovdiv: "Пловдив",
  Burgas: "Бургас",
  Varna: "Варна",
};

let cities1 = [
  { name: "Sofia", population: 1_236_000 },
  { name: "Plovdiv", population: 343_424 },
  { name: "Burgas", population: 202_766 },
  { name: "Varna", population: 335_177 },
];

// YOUR CODE HERE:
const bgCityNames = cities1
  .map((city) => city.name)
  .map((cityName) => dict[cityName]);

// TEST:
console.log(bgCityNames);

// EXPECTED OUTPUT:
// [ 'София', 'Пловдив', 'Бургас', 'Варна' ]

console.log("Filter:");

/* ----------------------------- array.filter() ----------------------------- */
const input1 = [1, 2, 3, 4, 5];
const output3 = input1.filter((el) => el % 2 === 0);
console.log(output3); // [2,4]

// // TASK: filter only cities which population is greater than 340_000
const cities2 = [
  { name: "Sofia", population: 1_236_000 },
  { name: "Plovdiv", population: 343_424 },
  { name: "Burgas", population: 202_766 },
  { name: "Varna", population: 335_177 },
];

// YOUR CODE HERE:
const populatedCities = cities2.filter((city) => city.population > 340_000);

// TEST:
console.log(populatedCities);

// // EXPECTED OUTPUT:
// // [
// // 	{ name: 'Sofia', population: 1236000 },
// // 	{ name: 'Plovdiv', population: 343424 }
// // ]

// // TASK: if population>340_000, get city name in ciryllic
const cities3 = [
  { name: "Sofia", population: 1_236_000 },
  { name: "Plovdiv", population: 343_424 },
  { name: "Burgas", population: 202_766 },
  { name: "Varna", population: 335_177 },
];

let dict1 = {
  Sofia: "София",
  Plovdiv: "Пловдив",
  Burgas: "Бургас",
  Varna: "Варна",
};

const biggestCityNamesCyrillic = cities
  .filter((city) => city.population > 340_000)
  .map((city) => dict[city.name]);

console.log(biggestCityNamesCyrillic); //['София', 'Пловдив']

console.log("reduce");

/* ----------------------------- array.reduce() ----------------------------- */
const output4 = [1, 2, 3].filter((el) => {});
console.log(output4);

const value1 = [1, 2, 3].reduce((a, c) => 1, 0);
console.log(value1);
// a=0, c=1 => 1
// a=1, c=2 => 1
// a=1, c=3 => 1

const value2 = [1, 2, 3].reduce((a, c) => 1);
console.log(value2);
// a=1, c=2 => 1
// a=1, c=3 => 1

console.log("reduce logs...");

const value3 = [1, 2, 3].reduce((a, c, idx) => console.log(a, c, idx));
console.log(`value3=${value3}`);

// // a=1,c=2,idx=1
// // a=undef, c=3, idx=2
// // values=undefined

const numbers1 = [1, 2, 3, 4, 5];
const sum1 = numbers1.reduce((a, c) => a + c);
const sum2 = numbers1.reduce((a, c) => a + c, 10);
console.log(sum1);
console.log(sum2);

let input3 = [1, 2, 3, 4];

let output5 = input3.filter((el) => el % 2 === 0).reduce((a, c) => a + c);

console.log(`output5: ${output5}`);

// TASK: reduce numbers to min element
const numbers = [3, 2, 1, 4, 5];

// const min = Math.min(...numbers);
const min = numbers.reduce((a, c) => (a > c ? c : a));

console.log(min); // 1

console.log("forEach");

/* ----------------------------- array.forEach() ---------------------------- */
const numbers2 = [1, 2, 3];
for (let index = 0; index < numbers2.length; index++) {
  const element = numbers2[index];
  console.log(element);
}
for (const el of numbers2) {
  console.log(el);
}

const cars = [
  {
    color: "red",
    speed: 100,
  },
  {
    color: "green",
    speed: 120,
  },
  {
    color: "blue",
    speed: 140,
  },
];

cars.forEach((car, idx) => console.log(`Car ${idx + 1}: ${car.speed}`));

let carCounter = 1;
for (const car of cars) {
  console.log(`Car ${carCounter++}: ${car.speed}`);
}

// //TASK: calculate the total sales from an array of sales objects using the forEach method

// // GIVEN
const sales = [
  { product: "Laptop", amount: 1000 },
  { product: "Phone", amount: 500 },
  { product: "Tablet", amount: 300 },
];

// YOUR CODE HERE
let totalSales = 0;
sales.forEach((sale) => (totalSales += sale.amount));

const totalSales1 = sales.reduce((a, c) => a + c.amount, 0);

// TEST
console.log(totalSales);
console.log(totalSales1);

// EXPECTED OUTPUT:
// 1800

//TASK: You are given an array of user objects.
//Add an isAdmin property to each user object based on the user's role within the array of user objects.

// GIVEN
const users = [
  { name: "Maria", role: "user" },
  { name: "Ivan", role: "admin" },
  { name: "Stoyan", role: "user" },
];

// // YOUR CODE HERE
// users.forEach( user=>user.role==='admin'? user.isAdmin=true : user.isAdmin=false  )

users.forEach((user) => (user.isAdmin = user.role === "admin"));

// TEST
console.log(users);

// // EXPECTED OUTPUT:
// // [
// //     { name: 'Maria', role: 'user', isAdmin: false },
// //     { name: 'Ivan', role: 'admin', isAdmin: true },
// //     { name: 'Stoyan', role: 'user', isAdmin: false }
// // ]

console.log("find");

/* ------------------------------ array.find() ------------------------------ */
const input4 = [1, 2, 3, 5, 4, 5];

const userInput = 3;
console.log(input4.find((el) => el > userInput));

// // TASK: Find the first city with a population greater than 500,000
const cities4 = [
  { name: "Plovdiv", population: 343_424 },
  { name: "Burgas", population: 202_766 },
  { name: "Sofia", population: 1_236_000 },
  { name: "Varna", population: 335_177 },
];

// YOUR CODE HERE:
const firstLargeCityName = cities.find(
  (city) => city.population > 500_000,
).name;

// TEST:
console.log(firstLargeCityName);

// EXPECTED OUTPUT:
// { name: 'Sofia', population: 1236000 }

console.log("sort");

/* ------------------------------ array.sort() ------------------------------ */
const numbers3 = [13, 12, 7, 3, 1, 5];

const output6 = [...numbers3].sort();

console.log(numbers3);
console.log(".........");

console.log(output6);

console.log("more sort");

const numbers4 = [13, 12, 7, 3, 1, 5];
// console.log( [...numbers].sort() );
console.log(numbers4);
console.log(
  [...numbers4].sort((a, b) => {
    console.log(`a=${a},b=${b}`);
    return a - b;
  }),
);

// TASK: Sort the cities array in descending order of population
const cities5 = [
  { name: "Plovdiv", population: 343_424 },
  { name: "Burgas", population: 202_766 },
  { name: "Varna", population: 335_177 },
  { name: "Sofia", population: 1_236_000 },
];

// YOUR CODE HERE:
const sortedCities = [...cities5].sort((a, b) => b.population - a.population);

// TEST:
console.log(sortedCities);

// EXPECTED OUTPUT:
// [
//   { name: 'Sofia', population: 1236000 },
//   { name: 'Plovdiv', population: 343424 },
//   { name: 'Varna', population: 335177 },
//   { name: 'Burgas', population: 202766 }
// ]
