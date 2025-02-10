const pi = 3.14;

// let circleArea = (r)=>{return r*r*pi};

// let circleArea = r=>{return r*r*pi};

let circleArea = (r) => r * r * pi;

let circleAreaUndefined = (r) => {
  r * r * pi;
};

console.log(`circleArea(2) = ${circleArea(2)}`);

console.log(`circleAreaUndefined(2) = ${circleAreaUndefined(2)}`);
