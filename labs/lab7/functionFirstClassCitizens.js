let x = 1;
let foo = function(){
    console.log(`Ada`);
};
foo();

/* --------------------------- Array of functions --------------------------- */
let arr = [
    function(x) {
        console.log(`x in anon1: ${x}`);
        return x**2;
    },
    function(x) {
        console.log(`x in anon1: ${x}`);
        return x/2
    }
];


let y = arr[0](7);
console.log(y); //?


let foo1 = arr[0];
console.log( foo1(7) );

// function() {
//     console.log(`foo1`);
// }




/* ---------------------------- Callback function --------------------------- */
function caller(callback) {
    console.log(`Caller will call the callback!`);
    callback()
}

function foo2() {
    console.log(`Foo`);
}

caller( foo2 );

//
// // Caller will call the callback!
// // Foo
//Goood!

console.log('*******');


function writeToDB() {
    console.log(`writeToDB`);
}

function logAndWriteToDB(f) {
    console.log(`writeToDB is  called at time`);
    f()
}


logAndWriteToDB(writeToDB);
logAndWriteToDB(writeToDB);



/* ----------------------------- setTimeout demo ---------------------------- */
function setTimeout(f, delay) {
    //wait(delay);
    f();
}

function greet(){
    console.log(`Hello`);
}


console.log(`Start`);

setTimeout( greet, 2000);

// Start
// Hello
// Error

console.log('*******');


/* ------------------------ Functions as return value ----------------------- */
function foo3() {
    console.log(`Foo3`);
    return baz;
}

function baz() {
    console.log(`Hello`);
}


let bar = foo3();
bar();

foo3()();//49-ти слайд














