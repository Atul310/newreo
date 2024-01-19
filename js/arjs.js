// let std1 = {
//     name:"atul",
//     age:12

// }
//  std2  = std1
//  console.log(std2)
//  std2.name= "shady"
//  console.log(std1)


 // while cchangig the name in std2 it alspo 
 //reflects in std1 so, it is only aliasing 
 //nothing more than that it shows the mutability
 // of the data 



 // show the below data in the format like 
 //product one: catergory1i, category1ii 
 //product two: catergory21
 //product one: catergory2i, category2ii,category2iii
let products = [
    {
        name: "product one",
        unitprice: 1000,
        disc : 10,
        qunati: 2,
        category:['cat1i', 'cat1ii']

    },
    {
        name: "product two",
        unitprice: 1000,
        disc : 10,
        qunati: 2,
        category:['cat2i']

    },
    {
        name: "product three",
        unitprice: 1000,
        disc : 10,
        qunati: 2,
        category:['cat3i', 'cat3ii','cat3iii']

    },


]
for(let i =0;i<products.length;i++){
   let printStruct = ""
       printStruct+= products[i].name+":"
    for(let j = 0;j<products[i].category.length;j++){
          printStruct+=products[i].category[j]+','

    }
    console.log(printStruct)
}