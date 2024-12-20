// try{
//     console.log(x);
// }catch(e){
//     console.dir(e);
//     if (e instanceof EvalError){
//         console.log(`handle the EvalError`);
//     } else if (e instanceof RangeError){
//         console.log(`handle the RangeError`);
//     } else if (e instanceof ReferenceError){
//         console.log(`handle the ReferenceError`);
//     } else if (e instanceof SyntaxError){
//         console.log(`handle the SyntaxError`);
//     } else if (e instanceof TypeError){
//         console.log(`handle the TypeError`);
//     } else if (e instanceof URIError){
//         console.log(`handle the URIError`);
//     } else{
//         console.log(`handle all others`);
//     }
// }


/* ---------------------------- Custom Exceptions --------------------------- */
// class DivideByZero extends Error{
//     constructor(message) {
//         super()
//         this.name = "DivideByZero Error";
//         this.message = message || "Can not divide by negative value";
//         this.stack = Error().stack;
//     };
// }


// function divide(x, y){
//     if( y === 0 ){
//         throw ( new DivideByZero() );
//     }else{
//         return x/y;
//     }
// }


// try{
//     //console.log(x);
//     console.log( `5/0= ${divide(5, 0)}` );
// }catch(e){
//      console.dir(e);
//     if(e instanceof DivideByZero){
//         console.log(`Handle DivideByZero`);
//     }else{
//         console.log(`Ups, something went wrong!`);
//     }
// }


/* ----------------------------- Console objects ---------------------------- */
// console.dir(console);
// console.warn('Warining')

//let x = 5;
// try{
//     console.log(x);
// }catch(e){
//     console.clear();
//     console.error(e);
// }


//  console.time("Timer"); // Start the timer with the label "Timer"

// let sum = 0;
// for (let i = 0; i < 1e6; i++) {
//   sum += i;
// }

// console.timeEnd("Timer"); // End the timer and log the elapsed time

/* ----------------------------- Window on error ---------------------------- */
window.onerror = function(message, source, lineno, colno, error) {
    console.error(`Message: ${message}`);
    console.error(`Source: ${source}`);
    console.error(`Line: ${lineno}`);
    console.error(`Column: ${colno}`);
    console.error(`Error object:`);
    console.dir(error);

    // Check if error contains a stack trace
    if (error && error.stack) {
        console.log(`Stack trace:\n${error.stack}`);
    } else {
        console.log('Stack trace is not available.');
    }

    // Prevent the error from showing in the browser console
    return true;
};


console.log(x);
