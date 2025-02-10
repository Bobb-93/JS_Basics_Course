// async function foo() {
//     return 1
// }
// console.log( foo() );

//-----------
// let getDataPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Some data');
//         // reject('Error message');
//     }, 1000);
// });

// async function renderData() {
//     try {
//         const data = await getDataPromise
//         console.log(data);
//     } catch (error) {
//         console.error(error);
//     }
// }

// function renderDataWithThen() {
//     getDataPromise
//         .then(data=>console.log(data))
//         .catch(error=>console.error(error))

// }

// renderData()
// renderDataWithThen()

// console.log(`Do other tasks`);

//----------
async function square(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x ** 2);
    }, 1000); // Simulate a delay (1 second)
  });
}

async function calculate() {
  const sum1 = await square(3); // Waits for the result of square(3)
  const sum2 = await square(3); // Waits for the result of square(3)
  console.log(`Total sum: ${sum1 + sum2}`);
}

console.log(`Start`);
calculate();
console.log(`End`);

const fetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "Hello, the data are here!";
      const succes = true;

      if (succes) {
        resolve(data);
      } else {
        reject(`No connection to ${url}`);
      }
    }, 2000);
  });
};

fetch("http://dataserver.com")
  .then((d) => {
    console.log(`1: ${d}`);
  })
  .catch((e) => console.log(`ERROR: ${e}`));

async function getData(url) {
  try {
    const data = await fetch(url);
    console.log(`1: ${data}`);
  } catch (e) {
    console.log(`ERROR: ${e}`);
  }
}

getData("http://dataserver.com");
