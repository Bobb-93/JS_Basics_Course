// Машината си "намисля" число:
let machineNumber = Math.round(Math.random() * 10);
//console.log(`machineNumber: ${machineNumber}`);

// Потребителя "въвежда" число:
let userNumber = Math.round(Math.random() * 10);
console.log(`userNumber: ${userNumber}`);

// while(userNumber != machineNumber){
//     // Потребителя "въвежда" ново число:
//     userNumber = Math.round(Math.random() * 10);
//     console.log(`new userNumber: ${userNumber}`);
// }

// for(;userNumber != machineNumber;){
//     userNumber = Math.round(Math.random() * 10);
//     console.log(`new userNumber: ${userNumber}`);
// }

do {
  // Потребителя "въвежда" число:
  userNumber = Math.round(Math.random() * 10);
  console.log(`userNumber: ${userNumber}`);
} while (userNumber != machineNumber);
