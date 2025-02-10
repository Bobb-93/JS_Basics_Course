// using built in arguments object - available within functions only!
function classFunction() {
  // console.log(this);
  console.log(arguments);
}

const arrowFunction = () => {
  // console.log(this);
  console.log(arguments);
};

classFunction(1, 2, 3);
arrowFunction(1, 2, 3);
classFunction(1, 2, 3, 4);
arrowFunction(1, 2, 3, 4);
