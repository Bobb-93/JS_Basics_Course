// //var vs let/const : redeclaring
// const x = 5;

// var x = 'pesho';
// console.log(x);


/* ------------------------------ Let vs Const ------------------------------ */
let x = 5;
const PI=3.14;


x = 6;
console.log(x);

//PI=3.14;


const userData = ['Ada', 34];

userData[1] = 56;

console.log(userData);


// RAM:
//     userData: 0x123: 0x456, 0x526
//           [0]:0x456: 'Ada'
//           [1]:0x526: 56

console.log('******');


function foo(x) {
    x[0] = 5;
}

let a = 1;
const userData1 = ['Ada', 34];
foo( userData1 );
console.log( userData1 );  //?


// // RAM:
// //            a: 0x130: 1
// //        foo-x: 0x141: 0x456, 0x526
// //     userData1: 0x123: 0x456, 0x526
// //           [0]:0x456: 5
// //           [1]:0x526: 56


console.log('------');

/* --------------------- Copy by Value and by reference --------------------- */
let x1 = [1,2,3];
let copy = x1;


x1[0] = 10;
console.log(x1, copy);//10,

// RAM:
//     x1: 0x130: 0x543, 0x544, 0x545
//     [0]:0x543: 10
//     [1]:0x544: 2
//     [2]:0x545: 3
//  copy: 0x132: 0x543, 0x544, 0x545


