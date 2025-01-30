let prepareDinner = new Promise((resolve,reject)=>{
    setTimeout(() => {
        // // prepare dinner
        const success = false;
        if(success){
            resolve('pizza')
        }else{
            reject('The oven is broken');
        }
    }, 2000);
});

prepareDinner
    .then((dinner)=>{console.log(`Dinner is ready: ${dinner}`)})
    .catch((e)=>{console.error(`Error: ${e}`)})


console.log(`Do something ...`);



// const fetch = (url)=>{
//     return new Promise( (resolve,reject)=>{
//         setTimeout(() => {
//             const data = 'Hello, the data are here!';
//             const succes = true;

//             if(succes){
//                 resolve(data)
//             }else{
//                 reject(`No connection to ${url}`)
//             }
//         }, 2000);
//     } )
// }

// fetch('http://dataserver.com')
//     .then((d)=>{console.log(`1: ${d}`)})
//     .catch(e=>console.log(`ERROR: ${e}`));


// console.log(`Do some other tasks...`);


// // // Example EvenNumberPromise

// const evenNumberPromise = new Promise((resolve, reject)=>{
//     const number = Math.round(Math.random()*10);
//     if(number%2===0){
//         resolve(number)
//     }else{
//         reject(`Not even: ${number}`)
//     }
// });


// evenNumberPromise
//     .then(even=>console.log(even))
//     .catch(e=>console.log(`ERROR: ${e}`));


// console.log(`do other tasks`);


// const sumPromise = new Promise((resolve, reject)=>{
//     const hugeArr = Array.from( new Array(10_000_000), (_, idx)=>idx+1);
//     const sum = hugeArr.reduce((a,c)=>a+c);
//     resolve(sum);
// });

// sumPromise
//     .then(sum=>console.log(`Sum: ${sum}`));

// console.log(`Do other tasks.`);

