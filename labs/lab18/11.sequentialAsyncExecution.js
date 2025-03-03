async function square(x) {
  console.log(`async square is executed`);
  return x ** 2;
}

async function add(x) {
  console.log(`calc sum1`);
  sum1 = await square(3);

  console.log(`calc sum2`);
  sum2 = await square(3);

  console.log(`Total sum: ${sum1 + sum2}`);
}

function print(msg) {
  // console.log("1"+msg);
  console.log(msg);
}

// console.log(`1`);
// add(3)
// console.log(`2`);

/* ------------------------------ more insights ----------------------------- */
square(3).then(print);

square(3).then((n) => console.log(`n:${n}`));

console.log(square(3));
