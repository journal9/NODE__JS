//function types
var getValue;
getValue = function (a, b) {
    return a + b;
};
var t = getValue('fur', 'app');
console.log(t);
var FetchData = /** @class */ (function () {
    function FetchData(firstName, lastName, score) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.score = score;
    }
    FetchData.prototype.toJson = function () {
        return JSON.stringify(this);
    };
    return FetchData;
}());
var data = new FetchData('John', "Wick", 2003);
var x = data.toJson();
console.log(x);
var e = {
    type: 'abc',
    Cname: 'Flipkart'
};
console.log(e);
