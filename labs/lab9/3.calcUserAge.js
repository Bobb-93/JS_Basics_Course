function getUserBirthYear() {
	// get the value of input with type="date":
	var userBirthDateStr = document.querySelector('input[type="date"]').value;
	console.log(`DEBUG: userBirthDateStr = ${userBirthDateStr}`);

	var userBirthDateObj = new Date(userBirthDateStr);

	var userBirthYear = userBirthDateObj.getFullYear();

	// console.log(`DEBUG: userBirthYear = ${userBirthYear}`);
	return userBirthYear;
}

function getCurrentYear() {
	var dateObj = new Date();
	var currentYear = dateObj.getFullYear();

	// console.log(`DEBUG: currentYear = ${currentYear}`);
	return currentYear;
}

function calcUserAge() {
	var userAge = getCurrentYear() - getUserBirthYear();
	console.log(`user age = ${userAge}`);
}
