// making a 
let product = [
    {
        name:"prductA",
        price: 1000,
        discount:10
    },
    {
        name:"prductB",
        price: 2000,
        discount:20
    },
    {
        name:"prductC",
        price: 1500,
        discount:7
    },
]

lenpr=product.length
// console.log(product)
//loop to calculate the afeter discount and discount 
//amount and assign to the object itself 
for(i=0;i<=lenpr;i++){
product[i].discount=product[i].price * product[i].discount/100

product[i].afterdiscount= product[i].price- product[i].discount
console.log(product)
}