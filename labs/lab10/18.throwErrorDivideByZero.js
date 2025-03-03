function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

try {
  console.log(divide(10, 2)); // Outputs: 5
  console.log(divide(10, 0)); // Throws an error
} catch (e) {
  console.log(e.message); // Outputs: Cannot divide by zero
}
