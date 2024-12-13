// create number - the good way (as primitive)
let x = 42;

// create number - the bad way (as Number object)
let y = new Number(42);

// we can use it the same way:
console.log( x + 10 ); // 52
console.log( x.toPrecision(5) ); // "42.000"

console.log( y + 10 ); // 52
console.log( y.toPrecision(5) ); // "42.000"

// but "x" and "y" are different entities with same value
console.log( x == y )  // true
console.log( x === y ) // false