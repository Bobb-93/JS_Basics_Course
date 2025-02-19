let start: boolean = false;
let age: number = 16;
let userName: string = "Ada";
let dataList: number[] = [1, 2, 3];

enum Color {Red, Green, Blue};
let c: Color = Color.Green;
// console.log(`c: ${c}`);


let anything: any = 42;
anything = "now I'm a string";
anything = false;

function add(x:number,y:number): number{
    return x+y
}

console.log( add(1,2) );


function foo(x:number,y:number,z?:number) {
    console.log(x,y,z);
}

foo(1,2)