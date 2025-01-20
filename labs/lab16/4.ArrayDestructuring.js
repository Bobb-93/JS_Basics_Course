// assign variables from array:
let [a, b] = [1,2];
console.log(`a = ${a}; b = ${b}`); // a = 1; b = 2

// we can first declare variables, and then destrucure:
let a1,b1;
[a1,b1] = [1,2]
console.log(`a1 = ${a1}; b1 = ${b1}`); // a1 = 1; b1 = 2

// same as above - no matter that we pass more elements:
let [a2, b2] = [1,2,3,4,5];
console.log(`a2 = ${a2}; b2 = ${b2}`); // a2 = 1; b2 = 2

// assign variables from array in conjunction with rest syntax:
let [a3, ...rest] = [1,2,3];
console.log(a3);     // 1
console.log(rest);  // [2, 3]