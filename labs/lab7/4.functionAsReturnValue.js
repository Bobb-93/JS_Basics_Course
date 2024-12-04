function foo(){
    return function(){
        console.log(`I'm the returned function`);
    }
}

// foo()();

// foo()() е концептуално еквивалентно на:
var bar = foo();
bar();