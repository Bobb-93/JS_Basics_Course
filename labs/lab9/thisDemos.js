/* ------------------------------ about 'this' ------------------------------ */
const showX = function() {
    console.log(this.x);
}

let obj1 = {
    x:1,
    showX:showX
};
let obj2 = {
    x:2,
    showX:showX
}
let obj3 = {
    x:3,
    showX: function() {
        console.log(`this: ${this}`);
        console.log(`this.x: ${this.x}`);
    },
    bar: ()=>{
        console.log(`this: ${this}`);
    }
}


let foo = obj3.showX;
console.log(`foo():  ${foo()}`);
console.log('--------');

obj3.showX();
console.log('--------');

obj3.bar();

console.log('--------');

obj1.showX();
obj2.showX();