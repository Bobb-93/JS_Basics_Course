// 2+3
// Operation: sum
// Operator: '+'
// Operand: 2, 3
/* ------------------------------- Assignment ------------------------------- */
let x = 3;
let y;
y = 2+1;
console.log(y);

let z = y;

let x1;

console.log( x1=3 ); //3
console.log( x1 );   //3

// RAM:
//  x:123=>3


// Shorthand Assignment
let userAge = 22;
// userAge = userAge + 1;
userAge += 1;
console.log( userAge );


/* -------------------------- Arithmetic operators -------------------------- */
console.log( 5- -2 );
//console.log( 5--2 ); // Error
console.log( 5-2 );
console.log( 5 -  2 );
console.log(
    5
    -
    2 );

console.log( 5 % 3 ); //2
console.log('******');


// Increment Operation: '++'
let x2 = 1;

//x2 = x2+1;
// ++x2;
// x2++;

console.log( x2++ );     //1
//console.log( ++x2 );     //2
console.log( x2 );       //2
console.log('********');


let x3 = 1,
    y3 = 1;

console.log( x3++ + ++y3 ); // 3
console.log(x3); //2
console.log(y3); //2

console.log('*****');

let x4 = 1;
x4++;
console.log( ++x4 + x4++ ); //3 + 3 = 6
// console.log( 2 + 4 ); //6
console.log(x4);       //4

console.log('*******');

// number + number => addition
// string + string => concatenation

// string + number => ?
let x5 = '3';
let y5 = 5;

console.log( x5+y5 );
console.log("what " + typeof y5);
console.log("what2 " + typeof (x5+y5));

console.log('*******');
// Convert strnig to number
let x6 = '3';
// x = +x;
console.log( 5 + +x6);
console.log( 5 + x6*1);
console.log( 5 + Number(x6));

let x8 = '3';
let y8 = 5;

console.log( String(x8) + String(y8) );