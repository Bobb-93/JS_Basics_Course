/* -------------------------------- for .. of ------------------------------- */
let arr = [1, 2, 3];

for (let number of arr) {
  console.log(number);
}

console.log("for...in");

/* -------------------------------- for ..in -------------------------------- */
let obj = {
  b: 2,
  a: 1,
  c: 3,
};

for (let prop in obj) {
  console.log(obj[prop]);
}
