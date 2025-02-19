interface ITodo{
    id?:string,
    title:string,
    completed:boolean
    getTodo:(n:number)=>void
}

class Todo implements ITodo{
    constructor(public title:string, public completed:boolean){}
    getTodo(n: number){
        console.log('Test')
    }
}

// function addTodo(title:string):void {
//     const newTodo:Todo={
//         title:title,
//         completed:false
//     }
// }