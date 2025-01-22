const demoArrow = (...args) => {
    let sum = 0;
    for (const num of args) {
        sum += num;
    }
    return sum;
};
console.log(demoArrow(1, 2, 3, 4)); // 10