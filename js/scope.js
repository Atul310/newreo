//scope in js 
// let a = 200
// if(true){

//     let a = 20
//     console.log("inner, This is block scope",a)
// }

// console.log("his is global scope",a)
function one(){
    const userName= "shady"
    console.log(userName)
    function two(){
        console.log(`hello ${userName}`)
    }
    two()
    
}



one()

// immediately invoked function 
    


console.log(this)