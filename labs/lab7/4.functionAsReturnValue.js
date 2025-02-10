function foo() {
  return function (b) {
    console.log(`I'm the returned function ${b}`);
  };
  //return 5;
}

// foo()();

// foo()() е концептуално еквивалентно на:
var bar = foo();
bar(5);
