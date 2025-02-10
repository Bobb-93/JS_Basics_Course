// // TASK: loop 5 times with while
let i = 5;

while (i > 0) {
  console.log(`Hi`);
  i--;
}

console.log("*******");

/* --------------------------- Use case for while --------------------------- */

console.log(Math.round(3.45));
console.log(Math.round(3.5));

console.log(Math.floor(3.55));
console.log(Math.ceil(3.45));

//TASK: genrate and log random number (1..10) untill 5
machine_number = Math.floor(Math.random() * 10) + 1;
console.log(`machine_number: ${machine_number}`);

while (machine_number !== 5) {
  machine_number = Math.floor(Math.random() * 10) + 1;
  console.log(machine_number);
}

console.log("*****");

/* -------------------------------- do-while -------------------------------- */
do {
  machine_number = Math.floor(Math.random() * 10) + 1;
  console.log(machine_number);
} while (machine_number !== 5);

console.log("*****");

/* --------------------------- break and continue --------------------------- */
// TASK: log numbers 1..10, but stop on 3
for (let i = 1; i <= 10; i++) {
  console.log(i);
  if (i === 3) {
    break;
  }
}
console.log(`END`);

// TASK: log numbers 1..10, but skip on x
let x = 3;

for (let i = 1; i <= 10; i++) {
  if (i === x) {
    continue;
  }
  console.log(i);
}
console.log(`END`);

// // Advanced: implement while with for
let machine_number1;

for (; true; ) {
  machine_number1 = Math.floor(Math.random() * 10) + 1;
  console.log(machine_number1);
  if (machine_number1 === 5) {
    break;
  }
}

/* ------------------------- Statement vs Expression ------------------------ */
// Expressions
// 2;
// 2+2;
// console.log();

// // Statement
// let x;
// if(1){console.log(`Hi`)};
// while(0){console.log(`o`)};

// console.log( console.log(`Hi`) );
// // console.log( let x );
