try {
  console.log(x); // JS will throw an Error here, as x is not defined
  console.log("Continue try block?");
} catch (err) {
  console.log("There was an error");
}

console.log("But program continues to run");

// OUTPUT
// There was an error
// But program continues to run
