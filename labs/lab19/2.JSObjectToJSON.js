// this is a JS object
const data = {
  title: "Learn HTML",
  completed: true,
  id: 1,
};
console.log(typeof data);
console.log(data);

// let's convert it into JSON string:
const dataJSON = JSON.stringify(data);
console.log(typeof dataJSON);
console.log(dataJSON);
