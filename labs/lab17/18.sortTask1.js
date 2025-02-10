const cities = [
  { name: "Sofia", population: 1_236_000 },
  { name: "Plovdiv", population: 343_424 },
  { name: "Burgas", population: 202_766 },
  { name: "Varna", population: 335_177 },
];

// YOUR CODE HERE:
const sortedCities = cities.sort((a, b) => b.population - a.population);

// TEST:
console.log(sortedCities);

// OUTPUT:
// [
//   { name: 'Sofia', population: 1236000 },
//   { name: 'Plovdiv', population: 343424 },
//   { name: 'Varna', population: 335177 },
//   { name: 'Burgas', population: 202766 }
// ]
