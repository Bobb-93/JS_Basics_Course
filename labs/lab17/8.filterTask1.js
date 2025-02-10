const cities = [
  { name: "Sofia", population: 1_236_000 },
  { name: "Plovdiv", population: 343_424 },
  { name: "Burgas", population: 202_766 },
  { name: "Varna", population: 335_177 },
];

// YOUR CODE HERE:
const populatedCities = cities.filter((city) => city.population > 340_000);

// TEST:
console.log(populatedCities);

// OUTPUT:
// [
// 	{ name: 'Sofia', population: 1236000 },
// 	{ name: 'Plovdiv', population: 343424 }
// ]
