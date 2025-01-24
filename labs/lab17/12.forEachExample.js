const numbers = [1, 2, 3, 4, 5];

// Using forEach to log each number and its index:
numbers.forEach(function(number, index) {
    console.log(`Index ${index}: ${number}`);
});

// Using an arrow function
numbers.forEach((number, index) => {
    console.log(`Index ${index}: ${number}`);
});