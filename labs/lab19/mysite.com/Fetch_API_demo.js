function fetchData(url){
    fetch(url)
        .then(response=>{
            if(response.ok){
                return response.json(); // Return: A Promise that resolves to a JavaScript object
                // return response.text(); //Return: promise that resolves with a String.
            }
        })
        .then(data=>{
            console.log(data);
            render(data)
        })
        .catch(e=>console.error(`ERROR: ${e}`))
}


function render(todos) {
    // const todos = JSON.parse(data);
    todos.forEach(todo=>{
      todosContainer.innerHTML += `
        <li>
            <span class="title">${todo.title}</span>
            <span>status</span>
            <span>${todo.completed?'completed':'not'}</span>
        </li>
      `
    })
}

// let arr = [1,2,3,];

const todosContainer = document.querySelector('.todos');
// fetchData('/todos');//not working
// fetchData('/todos.json');//not working
// fetchData('./todos.json');//not working
// fetchData('../todos.json');//not working

fetchData('http://127.0.0.1:5500/labs/Lab19/mysite.com/data/todos.json');

