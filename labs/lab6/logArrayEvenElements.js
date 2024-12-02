// дефиниция на функция, която логва единствено четните елементи на подаденият й масив:
function logArrayEvenElements(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			console.log(arr[i]);
		}
	}
}

let numbers = [2, -4, 5, 3, 9, 0, 1];
logArrayEvenElements(numbers);
