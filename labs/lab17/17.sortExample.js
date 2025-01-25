const input = [13, 1, 4, 1, 15, 9];
input.sort()
console.log(input); // [ 1, 1, 13, 15, 4, 9 ]

// const input = [13, 1, 4, 1, 15, 9];
input.sort((a,b)=>a-b);
console.log(input); // [ 1, 1, 4, 9, 13, 15 ]