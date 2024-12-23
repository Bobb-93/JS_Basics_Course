// взимаме елементите:
let p1 = document.querySelector("p:nth-of-type(1)");
let p2 = document.querySelector("p:nth-of-type(2)");

// дефинираме click handler функция:
let clickHandler = function () {
	this.innerHTML = "Bravo, you have clicked me!";
	this.classList.toggle("eventFired");
};

// при 'click' с мишката върху първия параграф ще се изпълни функцията 'clickHandler'
p1.addEventListener("click", clickHandler);

// при 'dblclick' с мишката върху втория параграф ще се изпълни анонимната функция, дефинирана като втори аргумент по-долу:
p2.addEventListener("dblclick", function () {
	this.innerHTML = "Bravo, you have double clicked me!";
	this.classList.toggle("eventFired");
});
// може и да си имаме doubleClickHandler()

//ОТ СЛЕДВАЩ СЛАЙД
// Важно е да се разбере, че функцията (анонимна или не), 
// чиято дефиниция поддаваме като аргумент на метода addEventListener ще се извика от този метод едва при настъпването на събитието!