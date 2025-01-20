let obj = {'a':1,'b':2,'c':3}

// 'c' will go into c, and the rest of obj into obj2
let {c,...obj2} = obj;

console.log(c);
console.log(obj2);