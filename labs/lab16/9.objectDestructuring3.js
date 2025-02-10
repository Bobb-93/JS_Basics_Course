const userData = {
  id: 1,
  name: "Ada",
  age: 23,
};

function greetPlain(name, age) {
  //console.log(userData);

  console.log(`Hello ${name}. You are ${age} years old!`);
}

greetPlain(userData.name, userData.age);

// note the curly braces in params declaration
function greetObject({ name, age }) {
  //console.log(userData);

  console.log(`Hello ${name}. You are ${age} years old!`);
}

greetObject(userData);

/*
    If we have the same name function, we get Hello undefined. You are undefined years old! for the first call.
*/
