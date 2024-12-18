//console.log(x);// Run-time (Dynamic) error === Excpetion
//console.log(x`); // Compile-time (Static) error === Error

/* ------------------------------ Throw Error: ------------------------------ */
// function validateAge(age) {
//     if(age<=0 || age>120){
//         // throw an Error:
//         throw new Error('Invalid value for age!')
//     }else{
//         console.log(`Age is valid: ${age}`);
//     }
// }

// validateAge(34);
// validateAge(-5);


/* ----------------------------- Catch Excpetion ---------------------------- */
// try{
//     console.log(x);
//     console.log(`Continue?`);
// }catch(e){
//     console.log(`Upps, something went wrong!: ${e}`);
//     // console.dir(e);
// }

// console.log(`END`);


/* ---------------------------- try-catch-finally --------------------------- */
try {
    // Connect to db
    console.log(1);
} catch (error) {
    console.log(`Error`);
    // exit();
}finally{
    // clear db connection
    console.log(`Finally`);
}


/* ------------------------------- throw Error ------------------------------ */
console.log(`Start`);
//throw new Error('Error');

console.log(`End`);

function divide(x, y){
    try{
        if( y === 0 ){
            throw new Error("I would not divide by zero!");
        }else{
            return x/y;
        }
    }catch(e){
        console.dir( e );
        return undefined;
    }
}

let res = divide(5, 0);
console.log(`res: ${res}`);
