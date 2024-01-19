//create a prototyp for definfin a product
//create a properties ,aname price and discout in prodi
//assifn value through constructor 
//create a functuon to finfg price after givign discoutn
///and assin to 
//create aniter function 


// function Product (name, price, discount){
//     this.name = name
//     this.price =price
//     this._discount= discount

// }


// User.prototype.getPrice = function(){
//     this.priceafterdisc= this.price- (this.discout/100)*this.price
// }
// User.prototype.getValue = function(){
//     console.log("Name:", this.name)
//     console.log("price:", this.price)
//     console.log("agerdisc:",this.priceafterdisc )

// }

// const prod = new Product ()




/// writing in class based 


class Product
{
    name;
    price;
    discount;

    constructor(name,price,discount)
    {
        this.name= name
        this.price= price
        this.discount= discount
    }
    getDiscount= ()=>{
        this.afterDis =this.price-(this.discount/100)*this.price
    }


    printValue = () =>{
        console.log("name:",this.name)
        console.log("price:",this.price)
        console.log("priceafterdis:",this.afterDis)

    }
}

const  prod = new Product("Mypro", 1000,10)

prod.printValue()
