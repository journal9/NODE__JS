//Function types

let multiply: (a:number, b:number)=>number;
multiply=(a,b)=>{
    return a*b
}
var value = multiply(2,6)
console.log(value)


let add = (x:number,y:number):number => {
    return x+y
}
var sum = add(9,6)
console.log(sum)

//optional parameters
let addOpt = (x:number,y:number,z?: number):number => {
    if (typeof z=='undefined'){
        return x+y
    }
    else{
        return x+y+z
    }
    
}
var sumop = addOpt(9,6,10)
console.log(sumop)

//default parameters
//multipes of 500 or any other number
let multiples=(a:number,b:number=500): number=>{
    return a*b
}
var mt = multiples(15,600)
console.log(mt)

//function overloading
// function can have multiple signatures, called overload signatures, each with a different set of arguments that our function can take.
//The implementation signature parameters and return types must be generic enough to accommodate the overload signature types.
function sump(a: number, b: number): void;
function sump(a: number, b: number, c: number): void;
function sump(a: string, b: string, c: number): void;
function sump(a: any, b:any, c?:unknown): void {
    console.log("hiiiiiii")
}
sump(1,2)
sump(1,2,3)
sump('dfd','fdgf',6)

//overloading with arrow functions
type mpTypeOverload={
    (a:number,b:number):void;
    (a:string,b:boolean):void;
}
var mit: mpTypeOverload = (a:any,b:any)=>{
    console.log("arrow function overloading")
}
mit(4,7)
mit('er',true)