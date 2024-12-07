const prices = {
    'apples': 2.50,
    'oranges': 3.45,
    'bananas': 2.80
}

// името на пропъртито, което искаме да достъпим е дадено в ПРОМЕНЛИВА:
const fruitName = 'apples'

// използваме записът с квадратни скоби:
console.log( prices[fruitName] );
console.log( prices.fruitName );

// следният запис е еквивалентен:

console.log( prices['apples'] ); // 2.50
console.log( prices.apples ); // 2.50