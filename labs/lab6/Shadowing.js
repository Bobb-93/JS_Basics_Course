let a = 3;

function foo(a) {
    // тук параметъра а "засенчва" глобалната променлива а ;
    console.log("a in foo(): ", a);
}

foo(2);
console.log("a in global:", a);