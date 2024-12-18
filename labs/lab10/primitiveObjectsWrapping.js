
const arr = [1,2,3];
console.log(typeof arr);
console.log( arr.length );
arr.id = 'id1';
console.log(arr);
console.log('--------');


let str0 = 'abc';
console.log(typeof str0);
console.log( str0.length );// wrapping/boxing
str0.id = 'id1';
console.log(str0);

console.log('--------');


let str = 'abc';
let strObj = new String('abc');

console.log(str);
console.log(strObj);
let replacedStr = strObj.replace('ab', '@');
console.log(strObj);
console.log(replacedStr);
strObj.id = 12;
console.log(strObj.id);


console.log('----------');


let str1 = 'abc';
// let strObj = new String(str);
console.log( str1.toUpperCase());
console.log( (new String(str1)).toUpperCase());

let str2 = 'abc';
str2.id = 'id1'; // (new String(str).id)
console.log(str2.id);//undefined


// RAM:
//     str:0x123: 'abc';
//     anon1:0x345: [Object 'abc']
//     anon1.id:0x321:'id1'
//     anon2:0x345: [Object 'abc']