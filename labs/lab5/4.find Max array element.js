/*
<h1>find Max array element - algorithm demo</h1>
<p>The example is just for educational purposes. 
    In practice, if you need to find max element from an array, its better (faster) to use <code>Math.max(...array)</code></p>
*/

let numbers = [8,2,7,1,4,3];

// set max initial value to be the first array element:
let max = numbers[0];

// find max number:
for(let i=1; i<numbers.length; i++){
	let number = numbers[i];
	// if current number is bigger than max, set max to current number:
	if(number>max){
		max = number;
	}
}

console.log(`The max of ${numbers} is ${max}`);