let cities = [
    {name: 'Sofia', population: 1_236_000},
    {name: 'Plovdiv', population: 343_424 },
    {name: 'Burgas', population: 202_766},
    {name: 'Varna', population: 335_177},
];

// YOUR CODE HERE:
const cityNames = cities.map(city=>city.name);

// TEST:
console.log(cityNames);

// OUTPUT:
// [ 'Sofia', 'Plovdiv', 'Burgas', 'Varna' ]

//Advanced example in mapFilterReduce.js -> line 28