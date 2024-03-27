//function types

interface myFunction {
    (a:string,b:string): string
}
let getValue: myFunction;
getValue = function(a:string,b:string){
    return a+b
}
var t = getValue('fur','app')
console.log(t)

//interfaces in classes

interface Json {
    toJson() : string
}

class FetchData implements Json{

    constructor( private firstName:string, private lastName:string, private score:number){}

    toJson(): string {
        return JSON.stringify(this)
    }
}

var data = new FetchData('John',"Wick",2003)
var x = data.toJson()
console.log(x)

//Type intersection

interface Industry{
    type:string
}
interface Business{
    revenue:number
}
interface CZompany{
    Cname:string
}

type customer = Industry & CZompany;

var e:customer = {
    type:'abc',
    Cname:'Flipkart'
}
console.log(e)