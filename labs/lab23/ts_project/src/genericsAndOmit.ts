// // Function that takes an argument of any type and returns the same type
// // function identity(arg:any):any {

// // }


// // identity(4)



// function identity<T>(arg: T): T {
//     return arg
// }

// const output1 = identity<string>("Hello");
// const output2 = identity<number>(42);


// // Function that accepts a type which extends { length: number }
// function logLength<T extends { length: number }>(arg: T): void {
//     console.log(arg.length);
// }

// logLength([1, 2, 3]); // Output: 3
// logLength("Hello!");   // Output: 6
// logLength(3)



interface Todo{
    id:string,
    title:string,
    completed:boolean
}


function addTodo(title:string):void {
    const newTodo:Omit<Todo,'id'>={
        title:title,
        completed:false
    }
}