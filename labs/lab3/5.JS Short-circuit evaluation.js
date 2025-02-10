var x = 42;
var y = 10;

// ако е вярно че x е четно , то изпиши в конзолата 'X e четно!':
x % 2 === 0 && console.log("X e четно!");

// задаване на стойност по подразбиране:
let userName;
userName = userName || "Anonymous";
console.log(`Hello, ${userName}`);
