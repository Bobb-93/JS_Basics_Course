/* ----------------------------- Spread Operator ---------------------------- */
// // In function call
// function foo(a,b,c){
//     console.log(`a=${a}, b=${b}, c=${c}`)
// }

// let arr = [1,2,3];

// foo(arr[0], arr[1], arr[2]);
// foo(...arr);
// // foo(1,2,3)

// in array literal
// let arr = [1,2,3];
// let shallowCopy = [...arr]; // = [1,2,3]

// arr[0] = 9;
// console.log(arr);
// console.log(shallowCopy);

// let arr = [1,2,3];
// let newArr = [...arr, 9];
// console.log(arr);       // [1,2,3]
// console.log(newArr);    // [1,2,3,9]

// let arr = [1,2,3];
// let str = [5,6];

// console.log( [...arr, ...str] );   // [1, 2, 3, "a", "b", "c"]

/* ------------------------ Rest Operator (Parameter) ----------------------- */
// function sum(...args){
//     // console.log(args);         //[]
//     // console.log(arguments);    //{}

//     let sum = 0;
//     for(let number of args){
//         sum+=number
//     }
//     console.log(`sum = ${sum}`);
// }


// sum(1, 2);
// sum(1, 2, 3);
// sum(1, 2, 3, 4, 5);