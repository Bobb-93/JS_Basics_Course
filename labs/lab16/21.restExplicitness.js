function sum(...numbers) {
    let sum = 0;
    for (const num of numbers) {
        sum += num;
    }
    return sum;
}
console.log(sum(1, 2, 3)); // 6