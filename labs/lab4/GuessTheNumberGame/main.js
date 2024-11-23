// let x = prompt('Enter a number'); // input
// alert(typeof(x)); // output

// Initialize variables
let machineNumber = Math.floor(Math.random()*100)+1;
let userGuess=null;
let gameCount = 0;

console.log(`Start`);

// Main game logic
do{
    userGuess = parseInt( prompt('Enter a number (1..100)') );

    // validate user guess (must be number in [1..100])
    if( isNaN(userGuess) || userGuess<1 || userGuess>100 ) {
        alert('Please, enter a number!');
        continue;
    }


    // compare user guess with machineNumber,  give feadback,
    if(userGuess>machineNumber){
        alert(`${userGuess} is too high!`)
    }else if(userGuess<machineNumber){
        alert(`${userGuess} is too low!`)
    }else if(userGuess==machineNumber){
        alert(`Bravo! ${userGuess} is correct!`)
    }else{
        alert('Unexpected case')
    }

    // Break on max tries reached
    gameCount++;
    if(gameCount===10){
        alert(`Game over! My number was ${machineNumber}`)
        break;
    }

} while (userGuess!==machineNumber);