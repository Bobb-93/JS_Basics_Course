/*************************************************
/ функция, която връща текущите час, минута секунда във формат:'HH:MM:SS'.
/ Ще бъде използвана в следващите упражнения за показване на времето в HTML страницата
/*************************************************/
function getCurentTimeFormated() {
  // създаваме обект от тип Date, който да съдържа информация за текущата дата и време:
  var currentDateTime = new Date();

  // "взимаме" часа:
  var currentHour = currentDateTime.getHours();
  // ако е едноцифрено число, добавяме '0' в началото:
  currentHour = currentHour < 10 ? "0" + currentHour : currentHour;

  // "взимаме" минутите:
  var currentMinutes = currentDateTime.getMinutes();
  // ако е едноцифрено число, добавяме '0' в началото:
  currentMinutes = currentMinutes < 10 ? "0" + currentMinutes : currentMinutes;

  // "взимаме" секундите:
  var currentSeconds = currentDateTime.getSeconds();
  // ако е едноцифрено число, добавяме '0' в началото:
  currentSeconds = currentSeconds < 10 ? "0" + currentSeconds : currentSeconds;

  // връшаме низ, отразяващ времето, така както искаме да го покажем в страницата:
  return `${currentHour}:${currentMinutes}:${currentSeconds}`;
}

// и нека да тестваме нашата функция:
console.log(getCurentTimeFormated());
