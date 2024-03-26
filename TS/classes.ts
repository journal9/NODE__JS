//Constructor functions
function Product(name: string, type: string, price: number) {
    this.name = name;
    this.type = type;
    this.price = price;
}
Product.prototype.getDetails=function(){
    console.log(`${this.name} price is ${this.price}`)
}

var product = new Product('Cadbury','eatables',45)
product.getDetails()

//class - prototypal inheritance
class Mineral {
    id:number;
    name:string;
    area:string;

    constructor(id,name,area){
        this.id = id,
        this.name = name,
        this.area = area
    }

    getData() {
        console.log(`${this.name} is in ${this.area} area.`)
    }
}

var mineral = new Mineral(2,'Coal','Bengal');
mineral.getData()