//Constructor functions
function Product(name, type, price) {
    this.name = name;
    this.type = type;
    this.price = price;
}
Product.prototype.getDetails = function () {
    console.log("".concat(this.name, " price is ").concat(this.price));
};
var product = new Product('Cadbury', 'eatables', 45);
product.getDetails();
//class - prototypal inheritance
var Mineral = /** @class */ (function () {
    function Mineral(id, name, area) {
        this.id = id,
            this.name = name,
            this.area = area;
    }
    Mineral.prototype.getData = function () {
        console.log("".concat(this.name, " is in ").concat(this.area, " area."));
    };
    return Mineral;
}());
var mineral = new Mineral(2, 'Coal', 'Bengal');
mineral.getData();
