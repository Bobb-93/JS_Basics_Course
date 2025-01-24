//TASK: You are given an array of user objects.
//Add an isAdmin property to each user object based on the user's role within the array of user objects.

// GIVEN
const users = [
    { name: 'Maria', role: 'user' },
    { name: 'Ivan', role: 'admin' },
    { name: 'Stoyan', role: 'user' }
];

// YOUR CODE HERE
users.forEach(user => {
    user.isAdmin = user.role === 'admin';
});

// TEST
console.log(users);

// EXPECTED OUTPUT:
// [
//     { name: 'Maria', role: 'user', isAdmin: false },
//     { name: 'Ivan', role: 'admin', isAdmin: true },
//     { name: 'Stoyan', role: 'user', isAdmin: false }
// ]