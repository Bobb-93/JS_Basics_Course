let add = function(x,y) {
    console.log(x+y)
}

// this is legal JS call, but TypScript will raise an error:
add(3);

//test.ts(5,1): error TS2554: Expected 2 arguments, but got 1.