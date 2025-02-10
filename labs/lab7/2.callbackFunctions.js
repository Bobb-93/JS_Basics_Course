function caller(callback) {
  console.log("caller will call the callback:");
  callback();
}

function callback1() {
  console.log("I'm the callback1 function!");
}

function callback2() {
  console.log("I'm the callback2 function!");
}

caller(callback1);
caller(callback2);
