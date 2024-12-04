// foo() вече е декларирана и JS знае, че е функция!
console.log( foo() );

function foo() {
    return "I am foo() and I work!";
}


// bar() вече е декларирана, но JS не знае все още че е функция!
console.log( bar() ); //TypeError: foo is not a function

var bar = function(){
    return "I am bar() and I work!";
}