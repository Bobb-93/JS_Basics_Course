const todoItems = [
  {
    id: 'one',
    task: 'Task1',
    completed: false,
  },
  {
    id: 'two',
    task: 'Task2',
    completed: true,
  },
  {
    id: 'three',
    task: 'Task3',
    completed: true,
  },
];

const idToDelete = 'two';

// const todoIndex = todoItems.findIndex((todo) => todo.id == idToDelete);
// console.log(`todoIndex: ${todoIndex}`);
// todoItems.splice(todoIndex, 1);

const todoItemsFiltered = todoItems.filter((todo) => todo.id !== idToDelete);

console.log(todoItems);
console.log(todoItemsFiltered);
