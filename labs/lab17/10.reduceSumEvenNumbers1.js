let input = [1, 2, 3, 4];

let output = input.reduce((acc, curr) => (curr % 2 == 0 ? acc + curr : acc), 0);

console.log(`output: ${output}`);
