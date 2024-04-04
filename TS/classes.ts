//Constructor functions
function Product(name: string, type: string, price: number) {
    this.name = name;
    this.type = type;
    this.price = price;
}
//prototype function
Product.prototype.getDetails=function(){
    console.log(`${this.name} price is ${this.price}`)
}

var product = new Product('Cadbury','eatables',45)
product.getDetails()

//class - prototypal inheritance
class Mineral {
    readonly id:number;
    private name:string;
    protected _area:string;

    constructor(id,name,area){
        this.id = id,
        this.name = name,
        this._area = area
    }

    public getData() {
        console.log(`${this.name} is in ${this.area} area.`)
    }
    public set area(value: string){
        this._area = value
    }
    public get area(){
        return this._area
    }  
    greet(){
        console.log("Hello from Mineral class")
    }  
    
}

// error TS1056: Accessors are only available when targeting ECMAScript 5 and higher.
// solution: tsc -t es5 classes.ts

var mineral = new Mineral(2,'Coal','Bengal');
mineral.getData()

mineral.area='Uttrakhand'
console.log(mineral.area)

// Access modifiers and readonly can be specified/declared-
// In the property declaration.
// In the constructor of the same class.

//Inheritance
class Ore extends Mineral{
    type:string

    constructor(type:string, id: number,name:string, area:string){
        super(id,name,area)
        this.type = type
    }

    greet(){
        console.log("Hello from Ore class")
        super.greet()
    }
}

var ore = new Ore('azse',3,'quartz','Himanchal Pradesh')
ore.greet()
ore.getData()
ore.area = 'Madhya Pradesh'
console.log(ore.area)

//Abstract Class

abstract class Company{

    constructor(private name: string, private org_type: string){
    }
    abstract costToCompany()
    companyName(){
        console.log(`Company name is ${this.name}`); 
    }
}

class Emp extends Company{
    constructor(name:string,type: string,private salary:number){
        super(name,type)
    }
    costToCompany() {
        return this.salary
    }
}

class Contractor extends Company{
    constructor(name:string,type: string,private rate:number,private hours:number){
        super(name,type)
    }
    costToCompany() {
        return this.hours*this.rate
    }
}

var John = new Emp('Amazon','Tech',2400000)
var Mark = new Contractor('Amazon','Tech',1500,320)
var JohnIncome = John.costToCompany()
var MarkIncome = Mark.costToCompany()
console.log(JohnIncome)
console.log(MarkIncome)