var message: string = "Hello World!"
console.log("Welcome to TS basics.")
// /home/deepika/Downloads/node-v18.16.1-linux-x64.tar.xz

//type interpolation
//number and string type
var total_cost: number | string;
var rate: string = "amaz";
var days: string = "ing";

// var rate :number = 2500;
// var days :number= 30;
// total_cost :number= rate * days;

total_cost = rate + days;
console.log(total_cost)

//object type
var Employee: {
    firstName: string;
    middleName: string;
    lastName: string;
    age: number;
    resident: boolean
}
Employee = {
    firstName: "haris",
    middleName: "Bon",
    lastName: "strwe",
    age: 12,
    resident: true
}
console.log(Employee)
console.log(Employee.resident)

//with interfaces
interface Person {
    readonly name: string;
    marks?: number;
    //interfaces can have optional and readonly classes
}

function getName(person: Person): void {
    var wist = `The person name is ${person.name}.`
    console.log(wist)
}

var Jane = {
    "name": "Jane",
    "marks": 65,
    "age": 23
}
getName(Jane)

//Array Type
var scores: number[];
scores=[]
scores[0]=89;
scores[1]=84;
console.log(scores)
console.log(typeof(scores[0]));
console.log(typeof(scores)); //object

var items: any[];
items=[]
items[0]=100;
items[1]='apple';
items[2]=false;
console.log(items)
console.log(typeof(items)); //object

//Tuple type
var tup: [string,number];
tup = ["sql",7] //order matters
console.log(tup)

var rgb: [number,number,number,string?];
rgb = [201,190,0] //optional elements are also supported

//Enum Type
enum Status {
    "Submitted",
    "Approved",
    "Rejected"
}
var stat = Status.Approved
if(stat==Status.Approved){
    console.log("good")
}

//Never type
// function raiseError(): never{
//     throw new Error('error occurred')
// }
// raiseError()

//Type aliases
type alphanumeric = string | number;
var input: alphanumeric;
input = "tree23"
console.log(typeof(input))

//String literal types
type Fruits = 'Apple' | 'Orange' | 'Mango';
let fruit: Fruits
fruit= "Apple"

//JSON type
var kt = {
    "quote": {
      "name":"Alfa",
      "capture":454,
      "theory":true,
      "lists": [
        "You must be the change you wish to see in the world.",
        "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        "The only thing we have to fear is fear itself.",
        "Do one thing every day that scares you.",
        "It is during our darkest moments that we must focus to see the light."
      ],
      "address":{
        "code":123464,
        "city":"Pune"
      }
    }
  }

interface Root {
    quote: Quote
}
  
interface Quote {
    name: string
    capture: number
    lists: string[]
    address: Address
    theory:boolean
}
  
interface Address {
    code: number
    city: string
}

console.log(kt.quote.lists[1])