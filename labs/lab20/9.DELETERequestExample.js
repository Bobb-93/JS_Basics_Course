fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE",
})
  .then((response) => console.log("Deleted with status:", response.status))
  .catch((error) => console.error("Error:", error));
