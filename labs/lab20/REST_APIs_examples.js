// fetch('https://jsonplaceholder.typicode.com/posts/10')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         fetch(`https://jsonplaceholder.typicode.com/users/${data.id}`)
//             .then(response => response.json())
//             .then(userData=>console.log(userData.address))
//     })
//     .catch(error => console.error('Error:', error));

// async function getPost() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//         const data = await response.json();
//         console.log(data);
//         const newResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${data.id}`)
//         const userData = await response.json()

//         console.log(data);
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }

// getPost();

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    totle: "New Post",
    body: "Post content",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => {
    console.log(`status code: ${response.status}`);
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(`No success: ${response.status}`);
    }
  })
  .then((data) => console.log(`data: ${data}`))
  .catch((error) => console.error("Error:", error));

// async function createPost() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
//             method: 'POST',
//             body: JSON.stringify({
//                 title: 'New Post',
//                 body: 'Post content',
//                 userId: 1,
//             }),
//             headers: {
//                 'Content-type': 'application/json; charset=UTF-8',
//             },
//         });
//         if(response.ok){
//             const data = await response.json();
//             console.log(data);
//         }else{
//             throw new Error(`No success: ${response.status}`);
//         }
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }

// createPost();
// console.log(`1`);

// {
//     title: 'New Post',
//     body: 'Post content',
//     userId: 10,
// }

// // Table Post:
// // id|title    |content        |userId
// // 1 |New Post |Post content   |10

// code 200

async function deletePost() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        method: "DELETE",
      },
    );
    console.log("Deleted with status:", response.status);
  } catch (error) {
    console.error("Error:", error);
  }
}

deletePost();
