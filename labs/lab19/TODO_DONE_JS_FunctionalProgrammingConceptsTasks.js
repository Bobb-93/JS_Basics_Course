/* -------------------------------------------------------------------------- */
/*                                    TASK3                                   */
/* -------------------------------------------------------------------------- */
// Given is an array of city objects: cities.
// Write Arrow function findMinPopulationCityNamecode(cities), which will return
// the city name with minimum population.
// Use only map|filter|reduce and Math.min() methods

//it works...
// TODO: think of one expression solution
// const findMinPopulationCityName = cities => {
//     // let cityMinPopulation =
//     //     cities
//     //         .map(city => city.population)
//     //         .reduce((a,c)=>a>c?c:a);

//     let cityMinPopulation = Math.min(...cities.map(c=>c.population))

//     //return the city name
//     return cities
//         .filter(city => city.population === cityMinPopulation)[0].name;
// };
const findMinPopulationCityName = (cities) =>
  cities.reduce((a, c) => (a.population < c.population ? a : c)).name;
// cities.reduce((a,c)=>a.population>c.population?c:a).name

// GIVEN
const cities = [
  { name: "Sofia", population: 1_236_000 },
  { name: "Plovdiv", population: 343_424 },
  { name: "Burgas", population: 202_766 },
  { name: "Varna", population: 202_767 },
];

// // TEST:
const minCityName = findMinPopulationCityName(cities);
console.log(minCityName);

// EXPECTED OUTPUT:
// 'Burgas'
