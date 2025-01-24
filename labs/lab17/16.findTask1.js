const cities = [
    {name: 'Plovdiv', population: 343_424},
    {name: 'Burgas', population: 202_766},
    {name: 'Sofia', population: 1_236_000},
    {name: 'Varna', population: 335_177},
];

// YOUR CODE HERE:
const firstLargeCity = cities.find(city => city.population > 500_000);

// TEST:
console.log(firstLargeCity);

// OUTPUT:
// { name: 'Sofia', population: 1236000 }