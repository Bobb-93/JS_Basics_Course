try {
  console.log(`Try 1`);
  //throw new Error("sdas");

  console.log(x); // a ReferenceError will be thrown
} finally {
  console.log("Finally 1");
}

console.log("Is program continued?");
