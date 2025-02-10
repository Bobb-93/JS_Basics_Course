function foo() {
  let x = 1;
  function bar() {
    console.log(`Bar: ${x}`); // 1
  }

  bar();
  console.log(`Foo: ${x}`);
}

let x = 9;

foo();
console.log(`Main: ${x}`);

// RAM:
// Global:
//     x: 0x123: 9
//   foo: 0x234: [function foo]
//
