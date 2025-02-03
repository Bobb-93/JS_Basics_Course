function fetchData(url){
    fetch(url)
        .then(response=>{
            if(response.ok){
                return response.json()
            }
        })
        .then(data=>{
            console.log(data);
            render(data)
        })
        .catch(e=>console.error(`ERROR: ${e}`))
}


function render(todos) {
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

const todosContainer = document.querySelector('.todos');
fetchData('/todos');
