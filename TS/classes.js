var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
            this._area = area;
    }
    Mineral.prototype.getData = function () {
        console.log("".concat(this.name, " is in ").concat(this.area, " area."));
    };
    Object.defineProperty(Mineral.prototype, "area", {
        get: function () {
            return this._area;
        },
        set: function (value) {
            this._area = value;
        },
        enumerable: false,
        configurable: true
    });
    Mineral.prototype.greet = function () {
        console.log("Hello from Mineral class");
    };
    return Mineral;
}());
// error TS1056: Accessors are only available when targeting ECMAScript 5 and higher.
// solution: tsc -t es5 classes.ts
var mineral = new Mineral(2, 'Coal', 'Bengal');
mineral.getData();
mineral.area = 'Uttrakhand';
console.log(mineral.area);
// Access modifiers and readonly can be specified/declared-
// In the property declaration.
// In the constructor of the same class.
//Inheritance
var Ore = /** @class */ (function (_super) {
    __extends(Ore, _super);
    function Ore(type, id, name, area) {
        var _this = _super.call(this, id, name, area) || this;
        _this.type = type;
        return _this;
    }
    Ore.prototype.greet = function () {
        console.log("Hello from Ore class");
        _super.prototype.greet.call(this);
    };
    return Ore;
}(Mineral));
var ore = new Ore('azse', 3, 'quartz', 'Himanchal Pradesh');
ore.greet();
ore.getData();
ore.area = 'Madhya Pradesh';
console.log(ore.area);
//Abstract Class
var Company = /** @class */ (function () {
    function Company(name, org_type) {
        this.name = name;
        this.org_type = org_type;
    }
    Company.prototype.companyName = function () {
        console.log("Company name is ".concat(this.name));
    };
    return Company;
}());
var Emp = /** @class */ (function (_super) {
    __extends(Emp, _super);
    function Emp(name, type, salary) {
        var _this = _super.call(this, name, type) || this;
        _this.salary = salary;
        return _this;
    }
    Emp.prototype.costToCompany = function () {
        return this.salary;
    };
    return Emp;
}(Company));
var Contractor = /** @class */ (function (_super) {
    __extends(Contractor, _super);
    function Contractor(name, type, rate, hours) {
        var _this = _super.call(this, name, type) || this;
        _this.rate = rate;
        _this.hours = hours;
        return _this;
    }
    Contractor.prototype.costToCompany = function () {
        return this.hours * this.rate;
    };
    return Contractor;
}(Company));
var John = new Emp('Amazon', 'Tech', 2400000);
var Mark = new Contractor('Amazon', 'Tech', 1500, 320);
var JohnIncome = John.costToCompany();
var MarkIncome = Mark.costToCompany();
console.log(JohnIncome);
console.log(MarkIncome);
