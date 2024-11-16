// това е коментар, който не се изпълнява от системата

// показва „изскачащо“ съобщение с текст „Welcome“ - грешка при Node.js
// alert("Welcome");
console.log("Welcome");

// декларира променливата answer
let answer;

// записва числото 42 в променливата answer
answer = 42;

// изписва стойността на answer в конзолата
console.log( answer );

// задава червен фон на документа - document is not defined в Node.js
//document.body.style.backgroundColor = "red";

let x234AB$$53;
console.log(x234AB$$53);

let lyrics = "В късна нощ — преди години — сам над книгите старинни," +
             "безотраден, вниквах, жаден, в знания незнайни тук; —" +
             "скръбен, търсех без сполука мир във тайната наука —" +
             "но оборен в сънна скука, чух внезапно бавен звук.";
console.log(lyrics);

let lyricsTwo = `В късна нощ — преди години — сам над книгите старинни,
                безотраден, вниквах, жаден, в знания незнайни тук; —
                скръбен, търсех без сполука мир във тайната наука —
                но оборен в сънна скука, чух внезапно бавен звук.`
console.log(lyricsTwo);

console.log( `2 + 4 = ${2+4}` );

console.log(`${lyrics} същото: ${lyricsTwo}`);

console.log(typeof null);

let res = 0 / "a";
console.log( res );         // NaN
console.log( typeof(res) ); // number

console.log(Number.isNaN(NaN));  // true
console.log(Number.isNaN("NaN")); // false
console.log('***********');

// декларираме променливите x и y:
let x, y;

// записваме в паметта, сочена от x, числото 3:
x = 3;

// в x записваме стойността на x, повдигната на степен 2:
x = x ** 2; // след този израз в x имаме стойността 9

console.log(x);

// декларираме променливите x и y
let x1,y1;

// присвояваме и на двете променливи стойността 1
y1 = x1 = 1;

console.log(`x1 = ${x1}`); // x = 1
console.log(`y1 = ${y1}`); // y = 1

console.log(2 + +40); //6
console.log(2 + -4); //-2

console.log(20 - 4); //16
console.log(20 - -4); //24

console.log(2 * 4); //8
console.log(2 * -4); //-8

console.log(100 / 5); //20
console.log(100 / -5); //-20
console.log(7 / 2); //3.5

console.log('*******');
console.log( 0 % 3 ); // 0
console.log( 1 % 3 ); // 1
console.log( 2 % 3 ); // 2
console.log( 3 % 3 ); // 0
console.log( 4 % 3 ); // 1
console.log( 5 % 3 ); // 2
console.log( 6 % 3 ); // 0
console.log( 7 % 3 ); // 1
console.log( 8 % 3 ); // 2
console.log( 9 % 3 ); // 0

let i2 = 2;

//postfix increment:
let j2 = i2++; // j2 = 2, i2 = 3
console.log(`${j2}, ${i2}`);

i2=2;

//prefix increment:
let j3 = ++i2; // j3 = 3, i2 = 3
console.log(`${j3}, ${i2}`);

let i3 = 2;

//postfix decrement:
let j4 = i3--; // j4 = 2, i3 = 1
console.log(`${j4}, ${i3}`);

i3=2;

//prefix decrement:
let j5 = --i3; // j5 = 1, i3 = 1
console.log(`${j5}, ${i3}`);

let x2 = 1;
console.log(x2++); //1
console.log(x2);   //2

let y2 = 1;
console.log(++y2); //2
console.log(y2);   //2

console.log(`******`);

let x3 = 1;
let y3 = 1;

console.log( x3++ + ++y3); // 3

console.log(`x3 = ${x3}`); // x = 2
console.log(`y3 = ${y3}`); // y = 2

console.log('**********');
let x4 = "42.5";

// Преобразува низа в число (десетично или цяло, в зависимост от съдържанието
console.log( Number(x4) ); //42.5

// Преобразува низа в число с плаваща запетая.
console.log( parseFloat(x4) ); // 42.5

// Преобразува низа в цяло число (премахва десетичната част).
console.log( parseInt(x4) ); //42

// Умножава низа по 1, което го преобразува автоматично в число.
console.log( x4*1 ); //42.5

// Унарният плюс (+) преобразува низа в число.
console.log( +x4 ); //42.5
