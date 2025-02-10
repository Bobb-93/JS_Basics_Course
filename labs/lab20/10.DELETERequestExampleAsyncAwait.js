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
