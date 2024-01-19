const symb = Symbol('sym')
let myObj = {
[symb]:"symbom",
name: "Shady",
greeting: function(){
    console.log(`hello${this.name}`)
}


}
console.log(myObj[symb])





//changing the value of the object 
//This is the way to change the value 
myObj.name= `Atul`
console.log(myObj)

// if we wnat no one can change the value of the 
//object  we  use a method called freeze
//===============================================
/*
Object.freeze(myObj)// now we cannot change the value of object
myObj.name ='shady'
console.log(myObj)
   see value doenot change here with freeze method 
└──╼ $node js/obj.js 
symbom
{ name: 'Atul', [Symbol(sym)]: 'symbom' }
{ name: 'Atul', [Symbol(sym)]: 'symbom' }
===================================================
*/
a =myObj.greeting()
console.log(a)

// const tinderUser = new Object()// thiis is also 
//object but it is consider as singelton

const regularUser = {
    email: "a@gmail.com",
    fullname:{
        userFullname:{
            firstname:'shady',
            lastname:'dhital'
        }  
    }
}
//To access the lastname use acess like this 
//like 
console.log(regularUser.fullname.userFullname.lastname?.surname)
//There exist a concept of optional chaining 

// object.assign()

