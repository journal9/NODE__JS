//Function types
var multiply;
multiply = function (a, b) {
    return a * b;
};
var value = multiply(2, 6);
console.log(value);
var add = function (x, y) {
    return x + y;
};
var sum = add(9, 6);
console.log(sum);
//optional parameters
var addOpt = function (x, y, z) {
    if (typeof z == 'undefined') {
        return x + y;
    }
    else {
        return x + y + z;
    }
};
var sumop = addOpt(9, 6, 10);
console.log(sumop);
//default parameters
//multipes of 500 or any other number
var multiples = function (a, b) {
    if (b === void 0) { b = 500; }
    return a * b;
};
var mt = multiples(15, 600);
console.log(mt);
function sump(a, b, c) {
    console.log("hiiiiiii");
}
sump(1, 2);
sump(1, 2, 3);
sump('dfd', 'fdgf', 6);
var mit = function (a, b) {
    console.log("arrow function overloading");
};
mit(4, 7);
mit('er', true);
