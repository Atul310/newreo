let products = [
    {
        name: "Product One",
        price: 1000, 
        discount: 10
    },
    {
        name: "Product Two",
        price: 2000, 
        discount: 20
    },
    {
        name: "Product Three",
        price: 1500, 
        discount: 7
    }
]

// loop to calculate after discount and discount amount and assign to the object itself.
// let discount = products[0].price * products[0].discount/100;
// let afterDiscount = products[0].price - discount
// products[0].discount =products[0].price * products[0].discount/100;
// products[0].afterDiscount = products[0].price - products[0].discount;
console.log(products)


products[5] = {
    name: "product Five",
    price: 100, 
    discount: 3
}


// delete products[2];

for(let i = 0; i < products.length; i++) {
    if(products[i]){
        let discount = products[i].price * products[i].discount/100;
        let afterDiscount = products[i].price - discount
        products[i].afterDiscount = afterDiscount;
        products[i].discountAmt = discount;
    }
}

console.log(products)
// discount = products[1].price * products[1].discount/100;
// afterDiscount = products[1].price - discount
// products[1].afterDiscount = afterDiscount;
// products[1].discount = discount;


// discount = products[2].price * products[2].discount/100;
// afterDiscount = products[2].price - discount
// products[2].afterDiscount = afterDiscount;
// products[2].discount = discount;


// products 
// 0,1,2,3,4,5

// for of 
// for in 
for(let index in products){
    let discount = products[index].price * products[index].discount/100;
        let afterDiscount = products[index].price - discount
        products[index].afterDiscount = afterDiscount;
        products[index].discountAmt = discount;
}

for (let prod of products){
    if(prod) {
        let discount = prod.price * prod.discount/100;
        let afterDiscount = prod.price - discount
        prod.afterDiscount = afterDiscount;
        prod.discountAmt = discount;
    }
}
console.log(products)