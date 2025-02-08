// const todoItems = [
//     {
//       "id": "bcbc",
//       "task": "Task1",
//       "completed": false
//     },
//     {
//       "id": "998f",
//       "task": "Task2",
//       "completed": true
//     }
// ];

// const id = '998f';
// // todoItems.forEach(todo=> todo.id===id && (todo.completed = !todo.completed))

// const newTodos  = todoItems.map(todo=>todo.id===id?{...todo, 'completed':!todo.completed}:todo)

// console.log(newTodos );


// [
//     {
//       "id": "bcbc",
//       "task": "Task1",
//       "completed": true
//     },
//     {
//       "id": "998f",
//       "task": "Task2",
//       "completed": false
//     }
// ];

// const todo = {
//     "id": "998f",
//     "task": "Task2",
//     "completed": true
// }

// const newTodo = {...todo, "completed":!todo.completed};

// console.log(newTodo);

// {
//     "id": "998f",
//     "task": "Task2",
//     "completed": false
// }



const todoItems = [
    {
      "id": "bcbc",
      "task": "Task1",
      "completed": false
    },
    {
      "id": "998f",
      "task": "Task2",
      "completed": true
    }
];


const idx = 'bcbc';
const todo = todoItems.filter(todo=>todo.id===idx)[0]

console.log(todo);

// {
//     "id": "998f",
//     "task": "Task2",
//     "completed": true
// }

