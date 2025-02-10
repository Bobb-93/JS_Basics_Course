let a = 1,
  b = 2;

// we do the swap without tmp variable, just with one line:
[a, b] = [b, a];

console.log(`a = ${a}; b = ${b}`); // a = 2; b = 1
