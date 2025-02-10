function caller(f) {
  console.log("1");
  f();
}

function callback() {
  console.log("2");
}

console.log("Feeding the caller() with function declaration");
caller(callback);

// console.log("Feeding the caller() with function execution")
// caller( callback() );
//TypeError: f is not a function
