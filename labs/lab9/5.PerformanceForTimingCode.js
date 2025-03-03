// We have 2 functions doing a same task: calculate the sum of all positive even numbers in a given range. But the algorithm for each of them is different.
function calcEvenNumbersSum_1(start, end) {
  var sum = 0;
  start = start % 2 ? start + 1 : start; //отиваме на четното число

  for (var i = start; i <= end; i += 2) {
    sum += i;
  }
  console.log(`calcEvenNumbersSum_1 result is: ${sum}`);
}

function calcEvenNumbersSum_2(start, end) {
  var sum = 0;

  for (var i = start; i <= end; i++) {
    if (i % 2 == 0) {
      //проверяваме всяко число дали е четно
      sum += i;
    }
  }
  console.log(`calcEvenNumbersSum_2 result is: ${sum}`);
}

// So lets compare which of the two functions is faster (NB! This test is very rough, and is not reliable for real-world algorithm speed tests.)
// let's time the calcEvenNumbersSum_1() execution:
var timeStart = performance.now();
calcEvenNumbersSum_1(1, 1_000_000);
var timeEnd = performance.now();
console.log(`Time taken for calcEvenNumbersSum_1 = ${timeEnd - timeStart}ms.`);

// let's time the calcEvenNumbersSum_2() execution:
timeStart = performance.now();
calcEvenNumbersSum_2(1, 1000000);
timeEnd = performance.now();
console.log(`Time taken for calcEvenNumbersSum_2 = ${timeEnd - timeStart}ms.`);
