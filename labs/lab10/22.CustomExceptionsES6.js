'use strict';

class DivideByZero extends Error {
  constructor(msg) {
    super(msg);
    this.name = 'DivideByZero Error';
  }
}

function divide(x, y){
    try{
        if( y === 0 ){
            throw( new DivideByZero() );
        }else{
            return x/y;
        }
    }catch(e){
        console.log( e.name );
        console.log( e.stack );
        return undefined; // or whatever we want
    }
}

console.log( `5/4= ${divide(5, 4)}` );
console.log( `5/0= ${divide(5, 0)}` );