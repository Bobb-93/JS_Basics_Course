function foo(a, b, ...args){
    // a = 1, b = 2, args = [3,4,5]
    console.log(args); //"3, 4, 5"
}
foo(1, 2, 3, 4, 5);

// function bar(a,...args, b){
//     console.log(args);
// }
// SyntaxError: Rest parameter must be last formal parameter