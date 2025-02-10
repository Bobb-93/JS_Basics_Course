let input = [1, 2, 3, 4];

let output = input
  .filter((el) => el % 2 == 0)
  .reduce((acc, curr) => acc + curr);

console.log(`output: ${output}`);
