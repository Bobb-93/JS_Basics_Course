let arr = [1,2,3];
let str = 'abc';

console.log( [...arr, 9] );       // [1, 2, 3, 9]
console.log( [9, ...arr] );       // [9, 1, 2, 3]
console.log( [...arr, ...str] );   // [1, 2, 3, "a", "b", "c"]