"use strict";

const  branch_name= "Atul"
console.log(branch_name)
// branch_name = "dhital"  // This is not allowed
// console(branch_name)
//we cannot assing the value of vaiable again to the same 
// variable again with const keyword

let accountEmail = "atuldhital@gmail.com"
console.log(accountEmail)
accountEmail = 'shadyatul1020@gmail.com'
console.log(accountEmail)
// we can reassing value to variable assigned by 
// let


// prefer not to use var because of scope and function 
let state;

console.table([branch_name, accountEmail,state])


//implicit vs explict

/* 
In programming, type coercion refers to the automatic
 conversion of a value from one data type to another.
  This happens behind the scenes when necessary to 
  perform operations or fit values into certain contexts.

*/


// for eg

let a = parseInt('5')
let b = 5

const c = a+b
console.log(typeof(a))

/*
const c = a+b 
here the result between  a+b is (55) ==> the a is converted into string type while adding   
  // a is converted innto string it is implicit type conversion 
*/

               //except plus(+) all are converted into 

// const c = a-b
/*    here the result is zero (0)
the b = "5 " is converted into number 

*/
console.log(c)
// undefin