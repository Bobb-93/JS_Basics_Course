console.log(`// Sync (Blocking) Execution`);
console.log(1);
console.log(2);
console.log(3);

console.log(`Async (Non-blocking) Execution`);
console.log(1);
setTimeout(() => {
  console.log(2);
}, 1000); // after 1 second
console.log(3);

// Synchronous example
console.log("Synchronous Example:");
console.log("Step 1");
console.log("Step 2");
console.log("Step 3");

// Asynchronous example with async/await
async function asyncFunction() {
  const result = await new Promise((resolve) => resolve("Step 2 (Async)"));
  console.log(result);
}

console.log("\nAsynchronous Example:");
console.log("Step 1");
asyncFunction(); // Non-block
console.log("Step 3");
