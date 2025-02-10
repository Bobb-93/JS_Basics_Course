// намисленото число:
var myNumber = 17;

// променлива, в която ще броим опитите на потребителя:
var count = 1;

// "cache" DOM:
var outputNode = document.getElementById("output");
var btnNode = document.getElementsByTagName("button")[0];

// асоциираме събитието onclick на бутона с функцията guessNumber
btnNode.addEventListener("click", guessNumber);

function guessNumber() {
  // прочитаме какво е въвел потребителя, като преобразуваме текста до число:
  var userNumber = document.getElementById("userNumber").value * 1;
  // console.log("typeof userNumber: ", typeof(userNumber) );

  // логика на играта:
  if (userNumber > myNumber) {
    outputNode.innerHTML = "Не познахте: Надолу!";
    outputNode.style.backgroundColor = "#99F";
  } else if (userNumber === myNumber) {
    outputNode.innerHTML = "Браво, познахте от " + count + "-я път!";
    outputNode.style.backgroundColor = "#99FF99";
  } else {
    outputNode.innerHTML = "Не познахте: Нагоре!";
    outputNode.style.backgroundColor = "#F99";
  }
}
