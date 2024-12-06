/* -------------------- Function declared with expression ------------------- */
const foo0 = function(x) {
    return x**2
};

/* ------------------ Function declared with arrow syntax: ------------------ */
const bar0 = x=>{return x**2};
const bar1 = x=>x**2;

console.log( foo0(2) );
console.log( bar0(2) );
console.log( bar1(2) );





const foo1 = function(x,y) {
    console.log(`Foo1`);
    return x+y;
}

// const f =  (param1, param2, …, paramN) => { statements }
const bar2 = (x,y)=>{
    console.log(`Foo`);
    return x+y;
}


console.log( foo1 );
console.log( bar2 );
console.log('--------');


/* -------------------------------- Examples -------------------------------- */
const foo2 = x=>{x**2};
// const foo = function(x){
//     x**2
// };

console.log( foo2(2) ); // undefined

const foo3 = x=>x**2;
// const foo = function(x){
//     return x**2
// };

console.log( foo3(2) ); // 2

console.log('---------');


/* ---------------------------- Example use case ---------------------------- */
function setTimeout(f, delay) {
    // wait(delay);
    f();
}

function greet(){
    console.log(`Hello`);
}


console.log(`Start`);

setTimeout( ()=>{console.log(`ss`)}, 2000);

// setTimeout(() => {

// }, 2000);

setTimeout(() => {
    console.log("Delayed for 1 second.");
  }, 5000);
  


