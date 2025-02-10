// ***********************
// Function Declarations:
// ***********************

// Дефиниция на функция с 1 параметър, и връщане на явен резултат
function isЕven(x) {
  if (x % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

// Дефиниция на функция с 1 параметър, върнатия резултат е 'undefined'
function conditionalStatemens(age) {
  let status;
  if (age > 19) {
    status = "adult";
  } else if (age < 19 && age > 13) {
    status = "teen";
  } else {
    status = "child";
  }

  alert(status);
}

// Дефиниция на функция с 2 параметъра, върнатия резултат е 'undefined'
function sum(x, y) {
  let total = x + y;
  alert("Сумата е " + total);
}

// Дефиниция на функция с 2 параметъра, и връщане на явен резултат
function sum(x, y) {
  let total = x + y;
  return total;
}

// ***********************
// Function in Variable:
// ***********************
// Името на функцията е променлива, чиято стойност (function object) можем да присвоим на друга променлива:
let sumVar = sum;
console.log("sumVar(3,4) = ", sumVar(3, 4));

// ***********************
// Function Expression:
// ***********************
// Можем да дефинираме една функция и чрез израз:
let sumVarNew = function (x, y) {
  let total = x + y;
  return total;
}; //тук трябва да сложим ';'
console.log("sumVarNew(3,4) = ", sumVarNew(3, 4));
