{
    var x = 2;           // x e глобална променлива
    let y = 4;           // y e видима само в текущия блок
    const alpha = 2.34;  // alpha e видима само в текущия блок
}

console.log(`x=${x}`);          // x=2
//console.log(`y=${y}`);          // error: y is not defined
//console.log(`alpha=${alpha}`);  // error: alpha is not defined

let ourStatus = "none",
    userAge = 32;

if(userAge>=18){
    //тук не променяме глобалната променлива status, а създаваме нова променлива видима единствено в този блок
    let ourStatus = "Adult"
    console.log(ourStatus);
    
};

console.log(`status = ${ourStatus}`);
// status = none

var x = 4;
console.log(x);

const GOLDEN_RATIO =  1.618;
//GOLDEN_RATIO = 2; //TypeError: Assignment to constant variable.

//const YOMAMA;

console.log('+++++++++');

const someArray = [3.14];

// тук не re-assign-ваме променливата someArray, а променяме стойност в самия масив
someArray[0] = 99;
console.log( someArray[0] ); // 99

const someObject = {
    "pi": 3.14,
}

// тук не re-assign-ваме someObject, а променяме пропърти в самия обект:
someObject.pi = 4;
console.log( someObject.pi ); // 4

// тук правим опит за re-assign:
// someArray = 4;      // TypeError: Assignment to constant variable.
// someObject = {};    // TypeError: Assignment to constant variable.



