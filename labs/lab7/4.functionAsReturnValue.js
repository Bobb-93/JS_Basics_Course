function foo(){
    return function(){
        console.log(`I'm the returned function`);
    }
    //return 5;
}


// foo()();

// foo()() е концептуално еквивалентно на:
var bar = foo();
bar();