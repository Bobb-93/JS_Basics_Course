"use strict";
let start = false;
let age = 16;
let userName = "Ada";
let dataList = [1, 2, 3];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
let c = Color.Green;
// console.log(`c: ${c}`);
let anything = 42;
anything = "now I'm a string";
anything = false;
function add(x, y) {
    return x + y;
}
console.log(add(1, 2));
function foo(x, y, z) {
    console.log(x, y, z);
}
foo(1, 2);
