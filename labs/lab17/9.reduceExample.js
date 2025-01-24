let input = [1,2,3,4];

let output = input.reduce( (acc, curr)=> {
	console.log(acc,curr)
	return acc+curr;
} );

console.log(`output: ${output}`);

// OUTPUT
// 1 2
// 3 3
// 6 4
// output: 10

