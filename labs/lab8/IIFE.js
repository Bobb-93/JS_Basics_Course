// Immediately Invoked Function Expression

// variant 1 - Function Expression
const foo0 = function () {
  console.log(`Foo`);
};

foo0();

console.log("-----");

// variant 2
function bar(x) {
  console.log(`x in Bar: ${x}`);
}
// // Function Expression
bar(function () {
  console.log(`Foo`);
});

// variant 3 - Function Expression in grouping operator
(function () {
  console.log(`Hello`);
});

console.log("********");

// Immediately Invoked Function Expression - Variant 1
const foo = (function () {
  console.log(`Foo`);
})();

console.log(foo); //

(function () {
  let x = 1;
  console.log(`x in anon: ${x}`);
})();

function foo2() {
  console.log(`Hello`);
}
foo2();
