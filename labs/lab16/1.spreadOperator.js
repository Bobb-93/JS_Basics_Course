function foo(a,b,c){
    console.log(`a=${a}, b=${b}, c=${c}`)
}

let arr = [1,2,3];

// pass foo three arguments with spread operator (ES6 way):
foo(...arr); // a=1, b=2, c=3

// pass foo three arguments with the apply() method (ES5 way):
foo.apply(this, arr); //a=1, b=2, c=3