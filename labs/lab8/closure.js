function outer(x){
    console.log(`Outer is called!`);

    return function(){
        console.log(`Inner is called with x: ${x}!`);
        return x*2;
    };
}

const inner = outer(5);

// cloure do:
const inner2 = function(){
    console.log(`Inner is called!`);
    return 2*2;
};

inner();


let omega = inner2();
console.log(omega);
