const handleError = (err) => {
  console.error(`Error: ${err}`);
};

const prepareDinner = () => {
  console.log(`prepareDinner will take 2000ms`);
  setTimeout(() => {
    // do work on prepare dinner
    const dinner = "pizza";
    // const dinner = false;

    if (dinner) {
      console.log(`${dinner} is prepared!`);
      eatDinner(dinner);
    } else {
      handleError(`Can not buy dinner!`);
    }
  }, 2000);
};

//moms spaghetti
const eatDinner = (dinner) => console.log(`Eating ${dinner}`);

const dinner = prepareDinner(); // undef

console.log(`Do something else`);

// prepareDinner will take 2000ms
// Eating undefined
// Pizza is prepared
