const pi = 3.14;

// function expression syntax:
let circleAreaExp = function(r){
    return r*r*pi;
}

// arrow function syntax:
let circleAreaArrow = r=>r*r*pi;

console.log(circleAreaArrow(4));
