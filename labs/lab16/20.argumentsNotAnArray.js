function demoArguments() {
  console.log(arguments.map); // undefined (not a true array)
  console.log(arguments[0]);
}
demoArguments(1, 2, 3);

function demoRest(...args) {
  console.log(args.map((x) => x * 2)); // [2, 4, 6]
}
demoRest(1, 2, 3);
