// let myPromise;
myPromise
    .then(result => {
        console.log(result);  // "Operation successful!" if resolved
    })
    .catch(error => {
        console.error(error);  // "Operation failed!" if rejected
    })
    .finally(() => {
        console.log("Promise completed, success or failure.");  // Always runs
    });

//not working