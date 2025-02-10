function logger(msg) {
  console.log(msg);
}

setTimeout(() => {
  console.log(1);
}, 0);

logger(2);

// Call Stack:

// Task Queue:
// () => {
//     console.log(`OnClick`);
// }

// // OUTPUT:
// 2
// 1
