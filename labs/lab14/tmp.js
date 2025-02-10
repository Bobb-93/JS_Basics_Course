// let obj = {
//     id:1,
//     color:'red'
// };

// let objStr = JSON.stringify(obj);
// console.log(objStr);

let objStr = '{"id":1,"color":"red"}';
let obj = JSON.parse(objStr);
console.log(obj.id);
