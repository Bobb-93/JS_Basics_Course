fetch('https://api.example.com/resource/1', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: 'Updated Resource' })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));

//not working
