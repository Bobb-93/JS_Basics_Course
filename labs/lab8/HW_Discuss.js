// ---------------------------------- Task 1 ---------------------------------- //
    /* DESCRIPTION:
    Write a function named `customMap` that should take two arguments:
    an array and a callback function that applies a specific operation
    to each element in the array (like square, i.e. takes `x` and returns `x` * `x`).

    The customMap function should return a new array with the
    results of calling the callback function on every element in the input array.
    */

    //YOUR CODE HERE
    const customMap =(inputArr, f) => {
        const outputArr = [];
        for (let i = 0; i < inputArr.length; i++) {
            const element = inputArr[i];
            const result = f(element);
            outputArr.push(result);
        }

        return outputArr;
    }

    // TEST
    const nums = [1, 2, 3, 4];
    const squared = customMap(nums, x=>x*x);
    console.log(squared);  // Expected output: [1, 4, 9, 16]

    //another test
    const squareRooted = customMap(nums, x=>Math.sqrt(x));
    console.log(squareRooted);
    console.log('-------------');

    // ---------------------------------- Task 2 ---------------------------------- //
        /* DESCRIPTION:
            Write a function named `customFilter` that should take two arguments:
            an array and a callback function (isPositive) that takes one argument (`x`) and
            returns `true` if the argument is positive (i.e.x > 0) and `false`
            if `x` is negative.

            The customFilter function should return a new array containing
            only the elements for which the callback function returns `true`.
        */

        // YOUR CODE HERE
        // Define customFilter function using function declaration
    function customFilter(array, callbackFunction) {
        let newArray = [];

        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            if(callbackFunction(element)){

                newArray.push(element);
            }
        }

        return newArray;
    }
        // Define isPositive function using arrow syntax
    let isPositive = x=>x>0;
    let isNegative = x=>x<0;

        // TEST
    const numsToFilter = [-1, 1, -2, 3, 4];
    const positiveNumbers = customFilter(numsToFilter, isPositive);
    console.log(positiveNumbers); // Expected output: [1, 3, 4]

    const negativeNumbers = customFilter(numsToFilter, isNegative);
    console.log(negativeNumbers);
    console.log('-------------');

    // ---------------------------------- Task 3 ---------------------------------- //
        /* DESCRIPTION:
        Implement a function `compose` that takes two functions (double and increment)
        as arguments and returns a new function that, when called, calls the first function,
        passes its result to the second function, and returns the result of the second function.
        */

        // // YOUR CODE HERE
        const compose = (f1, f2)=> x => f2( f1(x) );



        // //     // TEST
        const doubleThenIncrement = compose(x=>x*2, x=>x+1);
        console.log( doubleThenIncrement(3) ); // Expected output: 7




    //     // Define compose function using function declaration
    // function compose(functionOne, functionTwo){

    //     return function(x){
    //         let functionOneResult = functionOne(x);
    //         return functionTwo(functionOneResult);
    //     };
    // }
        // Define double and increment functions using arrow syntax
    // let double = x=>x*2;
    // let increment = x=>x+1;

    // const doubleThenIncrement = compose(double, increment);
    // console.log(doubleThenIncrement(3)); // Expected output: 7