function DivideByZero(message) {
  this.name = "DivideByZero Error";
  this.message = message || "Can not divide by negative value";
  this.stack = Error().stack;
}
DivideByZero.prototype = new Error();

function divide(x, y) {
  try {
    if (y === 0) {
      throw new DivideByZero();
    } else {
      return x / y;
    }
  } catch (e) {
    console.log(e.name);
    console.log(`e.stack = ${e.stack}`);
    return undefined; // or whatever we want
  }
}

console.log(`5/4= ${divide(5, 4)}`);
console.log(`5/0= ${divide(5, 0)}`);
