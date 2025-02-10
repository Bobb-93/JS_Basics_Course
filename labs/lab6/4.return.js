function f() {
  console.log("start");
  return true;
  console.log("end"); // никога няма да се изпълни!
}

f();
