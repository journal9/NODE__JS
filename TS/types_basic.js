var message = "Hello World!";
console.log("Welcome to TS basics.");
// /home/deepika/Downloads/node-v18.16.1-linux-x64.tar.xz
//type interpolation
//number and string type
var total_cost;
var rate = "amaz";
var days = "ing";
// var rate :number = 2500;
// var days :number= 30;
// total_cost :number= rate * days;
total_cost = rate + days;
console.log(total_cost);
//object type
var Employee;
Employee = {
    firstName: "haris",
    middleName: "Bon",
    lastName: "strwe",
    age: 12,
    resident: true
};
console.log(Employee);
console.log(Employee.resident);
function getName(person) {
    var wist = "The person name is ".concat(person.name, ".");
    console.log(wist);
}
var Jane = {
    "name": "Jane",
    "marks": 65,
    "age": 23
};
getName(Jane);
//Array Type
var scores;
scores = [];
scores[0] = 89;
scores[1] = 84;
console.log(scores);
console.log(typeof (scores[0]));
console.log(typeof (scores)); //object
var items;
items = [];
items[0] = 100;
items[1] = 'apple';
items[2] = false;
console.log(items);
console.log(typeof (items)); //object
//Tuple type
var tup;
tup = ["sql", 7]; //order matters
console.log(tup);
var rgb;
rgb = [201, 190, 0]; //optional elements are also supported
//Enum Type
var Status;
(function (Status) {
    Status[Status["Submitted"] = 0] = "Submitted";
    Status[Status["Approved"] = 1] = "Approved";
    Status[Status["Rejected"] = 2] = "Rejected";
})(Status || (Status = {}));
var stat = Status.Approved;
if (stat == Status.Approved) {
    console.log("good");
}
var input;
input = "tree23";
console.log(typeof (input));
var fruit;
fruit = "Apple";
//JSON type
var kt = {
    "quote": {
        "name": "Alfa",
        "capture": 454,
        "theory": true,
        "lists": [
            "You must be the change you wish to see in the world.",
            "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
            "The only thing we have to fear is fear itself.",
            "Do one thing every day that scares you.",
            "It is during our darkest moments that we must focus to see the light."
        ],
        "address": {
            "code": 123434,
            "city": "Pune"
        }
    }
};
console.log(kt.quote.lists[1]);
