// interface Point{
//     x:number,
//     y:number
// }

// function drawPoint(obj:Point) {
//     console.log(obj.x);
// }

// drawPoint({
//     x:1,
//     y:2
// })
// // 1 2
// // no error is generated!


interface Todo{
    id: number,
    title:string,
    completed: boolean
}

let todoItems:Array<Todo> = [];