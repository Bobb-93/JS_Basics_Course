function greet(userName){
    console.log(`Hello ${userName}. Nice to see you.`);
}

// едва при извикването ще се изпълнят действията, дефинирани във функцията

// извикване на функцията greet() с аргумент "Ada"
greet("Ada");
// извикване на функцията greet() с аргумент "John"
greet("John");

function sum(x, y){
    console.log( x + y );
}

sum(8, 7);

sum(2);

console.log(`--------`);

function sum(x){
    // let x = 2;
    console.log( x ); // 2
    //console.log( x + y); // ReferenceError: y is not defined
    // ако не използваме y във функцията, няма да има грешка.
}

sum(2, 3);
