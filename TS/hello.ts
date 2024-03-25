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
    name: string;
    marks: number;
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