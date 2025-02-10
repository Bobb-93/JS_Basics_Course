/* ------------------------------- setTimeout ------------------------------- */
// function greet(userName) {
//     console.log(`Hello, ${userName}`);
// }

// // function setTimeout(f, delay) {
// //     wait(dalay);
// //     f()
// // }

// console.log(`Start`);
// setTimeout(greet, 1000, 'Pesho');
// setTimeout(()=>{
//     console.log(`After 1 second`);
// }, 2000);

// console.log(`End`);

// // Start (20:30:0000)
// // setTimeout(greet, 1000), ((20:30:0001))
// // setTimeout(()=>{}, 1000), ((20:30:0002))
// // End (20:30:0004)
// // Hello, Pesho (20:30:1001)
// // After 1 second ((20:30:1002))

// use callback in setTimeout with arguments -
// Variant 1
// function greet(userName) {
//     return function() {
//         console.log(`Hello, ${userName}`);
//     }
// }

// console.log(`Start`);
// setTimeout( greet('Pesho'), 1000);

// use callback in setTimeout with arguments -
// Variant 2
// function greet(userName) {
//     console.log(`Hello, ${userName}`);
// }

// console.log(`Start`);
// setTimeout(() => {
//     greet('Pesho');
// }, 1000);

// // Remove timer if x > 0
// console.log(`Start`);
// let x = -4;
// const helloTimerID = setTimeout(() => {
//     console.log(`Hello`);
// }, 1000);

// if(x>0){
//     clearTimeout(helloTimerID)
// }
// console.log(`End`);

/* ------------------------------- setInterval ------------------------------ */
// Task: say Hello 5 times in 1 second
// let helloCount = 0;
// const intervalId = setInterval(() => {
//     console.log(`Hello`);
//     helloCount++;
//     if(helloCount===5){
//         clearInterval(intervalId);
//     }
// }, 1000);

/* --------------------------------- Example -------------------------------- */
// setTimeout(() => {
//     console.log(`1`);
// }, 1000);
// setTimeout(() => {
//     console.log(`2`);
// }, 2000);
// setTimeout(() => {
//     console.log(`3`);
// }, 3000);

// TODO:  fix it
// let timeout = 1000;
// for (let i = 1; i <= 5; i++) {
//     setTimeout(() => {
//         console.log(`Hello ${timeout}`);
//         timeout += timeout;//timeout = timeout * i;
//     }, timeout);
// }
