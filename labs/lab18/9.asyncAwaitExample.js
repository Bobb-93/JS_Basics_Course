let getDataPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Some data");
    // reject('Error message');
  }, 1000);
});

async function renderData() {
  try {
    const data = await getDataPromise;
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

renderData();
