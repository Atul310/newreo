// scope 
// global, local/block, functional 
let name = "Sandesh Bhattarai"
var email = "sandesh@broadwayinfosys.com"

var email = "test@test.com" // redeclaration

// let name = "Updated Name"   // error 
name = "Updated Name"   // correct


console.log("Hello");

// block 
var a = 10;             // 1234 = 10
console.log(a)  // 10   // 1234-> 10
{
    // block scope 
    var a = 20;             // 1234 => 20
    console.log(a); // 20   // 1234-> 20
}                           // var ===> self Destroy
console.log(a); // 10       // 1234-> 20

// node filename

// db config 
const DB_HOST = "url"  // text, number, boolean, null, ===> non changable

// DB_HOST = "update"  // error 