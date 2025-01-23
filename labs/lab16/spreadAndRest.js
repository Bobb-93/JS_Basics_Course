/* ----------------------------- Spread Operator ---------------------------- */
// // In function call
function foo(a,b,c){
    console.log(`a=${a}, b=${b}, c=${c}`)
}

let arr = [1,2,3];

foo(arr[0], arr[1], arr[2]);
foo(...arr);
// foo(1,2,3)

// in array literal
let arr1 = [1,2,3];
let shallowCopy = [...arr1]; // = [1,2,3]

arr1[0] = 9;
console.log(arr1);
console.log(shallowCopy);
console.log('*******');

let arr2 = [1,2,3];
let newArr = [...arr2, 9];
console.log(arr2);       // [1,2,3]
console.log(newArr);    // [1,2,3,9]

let arr3 = [1,2,3];
let str = [5,6];

console.log( [...arr3, ...str] );   // [1, 2, 3, "a", "b", "c"]

console.log('rest');

/* ------------------------ Rest Operator (Parameter) ----------------------- */
function sum(...args){
    // console.log(args);         //[]
    // console.log(arguments);    //{}

    let sum = 0;
    for(let number of args){
        sum+=number
    }
    console.log(`sum = ${sum}`);
}


sum(1, 2);
sum(1, 2, 3);
sum(1, 2, 3, 4, 5);