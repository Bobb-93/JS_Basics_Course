let obj = {p1: 1, p2: 2};
let p1,p2;

// assign obj properties to variables with same name (note the braces):
({p1, p2} = obj);

console.log(p1);  // 1
console.log(p2);  // 2