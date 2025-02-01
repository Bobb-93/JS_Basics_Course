fetch('https://api.example.com/resource/1', {
    method: 'DELETE'
})
.then(response => console.log('Deleted'))
.catch(error => console.error('Error:', error));

//not working
