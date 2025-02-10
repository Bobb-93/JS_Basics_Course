const jsonStr = `[1,2,3]`;
const numbers = JSON.parse(jsonStr);
console.log(numbers[0]);

let todos = [
  {
    title: "Todo1",
    completed: true,
  },
  {
    title: "Todo2",
    completed: false,
  },
];

const todosStr = JSON.stringify(todos);
console.log(todosStr);
