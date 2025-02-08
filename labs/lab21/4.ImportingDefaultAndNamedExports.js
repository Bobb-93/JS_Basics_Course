// Importing both default and named exports
import myDefaultFunction, { myVariable, myFunction } from './3.NamedAndDefaultExports.js';
myDefaultFunction(); // Calls the default export
console.log(myVariable); // Logs the named export variable
myFunction(); // Calls the named export function