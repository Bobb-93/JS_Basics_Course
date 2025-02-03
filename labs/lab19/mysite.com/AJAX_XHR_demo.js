/* -------------------------------- With XHR -------------------------------- */
function getDataXHR(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(`OK`);
      const data = xhr.responseText;
      console.log(`data: ${data}`);
      callback(data)
    } else if (xhr.readyState === 4) {
      console.error('Error:', xhr.statusText);
    }
  };

  xhr.onerror = function() {
    console.error('Error:', xhr.statusText);
  };

  xhr.send();
}


function render(data) {
  const todos = parseData(data);

  todos.forEach(todo=>{
    todosContainer.innerHTML += `
      <li>
          <span class="title">${todo.title}</span>
          <span>status</span>
          <span>${todo.status?'completed':'not'}</span>
      </li>
    `
  })
}

function parseData(data){
  const todos = [];

  data.split('\n').forEach(row=>{
    const todo = {}
    const todoData =row.split(';')
    todo.title = todoData[0];
    todo.completed = todoData[1];
    todos.push(todo)
  })

  return todos;
}


const todosContainer = document.querySelector('.todos');
getDataXHR('http://127.0.0.1:41427/Lab19/mysite.com/data/todos.txt', render);
