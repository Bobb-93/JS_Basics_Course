// using built in arguments object - available within functions only!
function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  console.log("total = " + total);
  console.log(arguments);
}

sum(1, 2, 3); // 6
sum(1, 2, 3, 4); // 10
