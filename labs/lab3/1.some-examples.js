console.log( 3+2**2**3/2 );
console.log('**********');

console.log(2 == 2);    // true
console.log(2 == "2");  // true (the string is coerced to a number value.)
console.log(2 === "2"); // false (no type coercion)

// the Boolean operand "true" is converted to 1; "false" is converted to 0
console.log(true == 1);     // true
console.log(false == 0);    // true
console.log(true > false);  // true

// lexicographic order, when both operands are strings
console.log( "2" > "19999" )  // true, as ("2" > "1") is true
console.log( "b" > "azzzz" )  // true, as ("b" > "a") is true
console.log( "a" > "azzzz" )  // false
console.log('*********');

console.log( "1" < "11"); // true, as "none symbol" code is smaller than "1" symbol code
console.log( "2" > "11"); // true, as "2" code is bigger than "1" code
console.log( 'a' > 'A'); // true, as 'a' code is bigger than 'A' code
console.log( "1199" > "12"); // false, as "11">"12" is false
console.log( "1" == "12");  // false, as "none symbol" is not == "2"

console.log('*******');
console.log( true && false );	// false
console.log( true || false );	// true
console.log( !true ); 			   // false

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let userAge = 19;
let userCountry = 'BG'

console.log( userAge>=18 && userCountry==='UK' );	// false ( true && false = false)

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// когато операндите не са boolean, то и резултата не е boolean
let userName;
console.log( userName || 'Anonymous' ) // 'Anonymous'

console.log(0 && 0);
console.log(0 && 9);
console.log(9 && 0);
console.log(9 && 9);

console.log('****');

console.log(0 || 0);
console.log(0 || 9);
console.log(9 || 0);
console.log(9 || 9);

console.log('*******');

let x = 5;

if(x%2){
    console.log(`Odd`);
}else{
    console.log(`Even`);
}

let age = 18;
let ageStatus;
if( age >= 18 ){
    ageStatus = "adult";
}else if( age < 18 && age > 12){
    ageStatus = "teen";
}else{
    ageStatus = "child"
}
console.log(`ageStatus = ${ageStatus}`);

console.log('*******');
let fruit = "apples";

switch (fruit) {
    case "apple":
        console.log("Apple is red.");
        break;
    case "banana":
        console.log("Banana is yellow.");
        break;
    default:
        console.log("Unknown fruit.");
}

// Извежда: Apple is red.

console.log('********');
let x1 = 42;

let numType = x1%2===0 ? "even" : "odd";

console.log(numType); // "even"

console.log('************\n');
// half tree print
var treeDeep = 5;
for(var i = 1; i<=treeDeep; i++){
    console.log("*".repeat(i));
}

console.log('************\n');

// full tree print
var crownHeight = 6;
var boleHeight = 2;
var boleWidth = 3;
var spaceCount;


// print the crown:
for(var i = 1; i<=crownHeight; i++){
    spaceCount = Math.floor(crownHeight) - i;
    console.log( "*".repeat(spaceCount)+"*".repeat(i*2-1) );		
}

// print the bole:	
spaceCount = Math.floor(((crownHeight*2-1)-boleWidth)/2);
for(var i = 1; i<=boleHeight; i++){		
    console.log( "*".repeat(spaceCount)+"*".repeat(boleWidth));		
}

