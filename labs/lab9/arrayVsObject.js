function foo() {
  return 5;
}

let x = 9;

let obj = {
  0: 2 + 2,
  1: foo(),
  2: x,
  length: 3,
};

let arr = [2 + 2, foo(), x];

console.log(arr);
console.log(obj);
