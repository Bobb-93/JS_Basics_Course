try{
    x + 2;
}catch(err){
    console.error(`Error: ${err.message}`);
    console.dir(err); // ok
}

console.dir(err); // ReferenceError: err is not defined
