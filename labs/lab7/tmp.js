function querySelector() {
  return null;
}

let selectedOption = querySelector();

console.log(selectedOption);

if (selectedOption && selectedOption.value === 5) {
  console.log(`OK`);
}
