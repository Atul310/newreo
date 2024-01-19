
//variable are something whose value changes 
// to declare variable in Js we have two methods 
//by let keyword and var keyword
//While talking about variable we talk about scope 
//three scope 
// global scope ,local scope and functional 
//let and var both give both global scope 

let name = 'shady'//this is declaration 
var email = 'shadyatul@gmail.com'
console.log(name,email)
var email = 'test@gmail.com'
console.log(email)
name ='sjady'// this is change of variabale value 
///We cannot redeclare the variable value in let scope 
console.log(name) 

//variable scope 
//block scope 
let a = 10;
console.log(a)
{
    let a = 20;
    console.log(a)  // here in let scope provide 
    // block scope and we redeclare the a variable 
    //in this block and they are within the block scope 
    //when the block end their scope ends 

}
console.log(a)

// var f= 20
// console.log(f)
// {
//     var f =2          //var doesnot support block scope 
// var always use globla scope 

//var  doesnot provide 
//     console.log(f) 
// }
// console.log(f)
/*     Block Scope: let and const are block-scoped, which means they are 
limited to the block of code in which they are declared (inside curly braces {}). 
This helps prevent variable name conflicts and makes your code more predictable.

    Reassignment: Use let when you need to reassign a variable's value.
     If you declare a variable with const, its value cannot be changed once assigned.

    Recommended Choice: let is the recommended choice for most variables in modern 
    JavaScript because it offers block scoping and allows reassignment when necessary. If 
    a variable's value should never change, then use const for added safety.

var:

    Function Scope (Pre-ES6): Variables declared with var are 
    function-scoped, meaning they are only limited to the function in
     which they are declared. They are not block-scoped. Be cautious when 
     using var because it can lead to unexpected behavior and naming conflicts in larger codebases.

    Hoisting: Variables declared with var are hoisted, meaning their 
    declarations are moved to the top of the function or global scope
     during the compilation phase. However, they are initialized with 
     undefined. This can lead to potential bugs if not used carefully.

    Legacy Usage: var is still present in older codebases and may 
    be encountered in some situations. It's less commonly used in
     modern JavaScript due to the introduction of let and const.

In summary:

    Use let or const when you want block scope and clear variable scoping.
    Use const for variables whose values should not change after assignment.
    Avoid using var in modern JavaScript unless you have a specific reason 
    to do so, or if you are working in an environment that does not support ES6+ features.

Choosing between let and const largely depends on whether you intend to 
reassign the variable's value. For variables that should remain constant, use const. 
For variables that may be reassigned, use let. This approach leads to more robust 
and maintainable code.
*/


// constnt variable and const satic 

//const are used when we dont want to change the
//value once it is declared //const scope is global
//we must define the value in constant
//like 

