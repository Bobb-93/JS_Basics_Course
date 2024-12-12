const Math = {
    PI:2.00,
    max:function() {
        console.log(`max`);
        return 5;
    }
};

console.log(Math.PI);
console.log(Math.max());

console.log('-----------');


/* ---------------------------------- Date ---------------------------------- */
let currentDateTime = Date.now();
console.log(currentDateTime);


// create DateTime instance (object)
let now = new Date();
// // TASK: Log current hour:minutes
console.log( `${now.getHours()}:${now.getMinutes()}` );


// TASK: calcUserAge
let userBirthDate = '03.03.1990';//'DD.MM.YYYY'
let userYear = new Date(userBirthDate);
let currentYear = (new Date()).getFullYear();

console.log(userYear);
console.log(currentYear);


/* ---------------------------- arguments object ---------------------------- */
function sum() {
    console.log(arguments);

    let currentSum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        currentSum+=element;

    }
    return currentSum;
}

console.log( sum(1,2) );
console.log( sum(1,2,3,4) );


