// x is defined in global scope
let x = 5;
let y = 7

function foo() {
    // y is defined in local for 'foo()' scope
    let y = 10;
    console.log(`x in foo: ${x}`); // x in foo: 5
    console.log(`y in foo: ${y}`); // y in foo: 10
}

foo();

console.log(`x in global: ${x}`); // x in global: 5
console.log(`y in global: ${y}`); // ReferenceError: y is not defined (or 7)

var firstName0 = "Ada";

function bar(){
    // тук променяме глобалната променлива!!!
    let firstName0 = "Turing"
    console.log("foo() firstName0: ", firstName0);
}
bar();

console.log("global firstName0: ", firstName0);


var firstName = "Ada";

function foo2(){
    // тук променяме глобалната променлива!!!
    firstName = "Turing"
    console.log("foo() firstName: ", firstName);
}
foo2();

console.log("global firstName: ", firstName);