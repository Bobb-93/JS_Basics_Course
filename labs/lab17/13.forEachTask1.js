//TASK: calculate the total sales from an array of sales objects using the forEach method

// GIVEN
const sales = [
    { product: 'Laptop', amount: 1000 },
    { product: 'Phone', amount: 500 },
    { product: 'Tablet', amount: 300 }
];

// YOUR CODE HERE
let totalSales = 0;
sales.forEach(sale => totalSales += sale.amount);

// TEST
console.log(totalSales);

// OUTPUT:
// 1800