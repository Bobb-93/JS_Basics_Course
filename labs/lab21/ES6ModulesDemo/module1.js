// Named Export
const add = (...args)=>args.reduce((a,c)=>a+c)
export const PI = 3.14;

//Default Export
function bar() {
    console.log(`Foo`);
}



export {add};
export default bar;

