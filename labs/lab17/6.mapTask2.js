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
const bgCityNames = cities1.map((city) => dict[city.name]);

// TEST:
console.log(bgCityNames);

// OUTPUT:
// [ 'София', 'Пловдив', 'Бургас', 'Варна' ]
