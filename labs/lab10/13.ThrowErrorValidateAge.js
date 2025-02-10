function validateAge(age) {
  if (age <= 0 || age > 120) {
    // throw an Error:
    throw new Error("Invalid value for age!");
  } else {
    console.log(`Age is valid: ${age}`);
  }
}

validateAge(34);
// validateAge(-5);
validateAge(121);
