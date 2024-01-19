/**
 * a. Arithematic Operators 
 *  +, -,  *, /, %
 * 
 * b. Increment or Decrement Operators 
 *      ++, -- 
 * 
 * c. Assignment Operator 
 *  =, +=, -=, *=, /=, %=
 * 
 * d. String/Concatination 
 *      +, , comma 
 * 
 * // TODO: tomorrow session
 * e. Comparision Operators 
 *  <, >, <=, >=, ==, !=, ===, !==
 * 
 * f. Logical Operators 
 *           &&, ||, !
 * 
 * g. Ternary Operators 
 *  (exp) ? true : false
 *      (null colleaching )
 * 
 * & |
 * h. Spread And Rest Operators 
 *  ...
 * i. Object Destructure
 * 
 * Control statements 
 *  - if-else 
 *  - else-if 
 *  - switch-case 
 *  - loop 
 */

// !Array.includes('search')

let a = 10; 
let b = 5; 

let c = a / b
console.log(c); // 2

let d = a % b;  
console.log(d)  // 0

let e = ((a + b) - c )* d;
console.log(e); //  

let x = 10; // 10
x = x +1;   // x 1 => x , 11
x++;    // 12
++x;    // 13

// x = 13

console.log(x++);   // ?? 13, post assign 
console.log(x); // 14
console.log(++x);   // ?? 15, pre assign

let sn = 1;
// loop 
console.log(sn++);  // 1,2 3,
console.log(++sn);  // 2, 3,4
// 14, 14
// 13, 14

// 13, 15

// 14, 15

x = 1;

x++;
++x; 

x = x + 2;
x += 2;

a = '10';

b = 10;

c = a + b;      // 1010, 

// numb padding 
// 0, 1, 2, 
// 00, 01, 02

var name = "Sandesh";
let last= "Bhattarai";

// name = name + " " + last;

name += " "+last;


console.log("Name: ",name);          // Name: Sandesh Bhattarai

a = 10;
b = '10';

console.log(a == b)         // true
console.log(a === b)        // false

((a == b) && (a === b)) // true && false => false 
    // true false
((a == b) || (a === b)) // true || false => true


// validation
let userRegi = {
    name: "User Name",
    email: "user@email.com",
    address: null, 
    password: null
}

// spread 
let admin = {
    ...userRegi,
    role: "admin"
}

let {password, address, ...rest} = admin;
// truthy
    // 
// Falsy 
    // null, 0, undefined, false, NaN, '', ""
(userRegi.email !== null)
(userRegi.email === null)
(!userRegi.email)
// 
(userRegi.name === null || 
    userRegi.email === null || 
    userRegi.address === null || 
    userRegi.password === null
)


// let age= userRegi.age ? userRegi.age : null;
let age = userRegi.age ?? null;

// neting 
// (exp) ? ((exp1) ? true : (exp2 ? true : false)) : false


let prod = {
    name: "Product One",
    price: 100,
    brand: "brand 1"
}

// spread operator
let prod_1 = {...prod};

prod_1.name = "Updated";

console.log(prod.name)  //

let offer_prod = {
    ...prod,
    discount: 10
}


// offet_prod => name, price, brand, discount
// name = offer_prod.name
// let price = offer_prod.price
// let other = {
//     brand: offer_prod.brand, 
//     discount: offer_prod.discount
// }

// object Destructing 
let {name, price, ...other} = offer_prod;

console.log(price);

console.log(offer_prod?.price)   // 