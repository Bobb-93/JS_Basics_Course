// fetch('https://api.example.com/resource', {
fetch('https://jsonplaceholder.typicode.com/posts/1', {

    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: 'New Resource' })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));