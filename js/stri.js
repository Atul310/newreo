// // // string method 

// // let a = "helo welcome to the hell"

// // console.log(a[2])
// // console.log(a.split(' ') )

// // console.log(typeof(a))

// // let num = 1349094390449
// // console.log(num.toLocaleString())




// // find length of string 


// let myString = " Hello  welecoe here what are ypud doing @##$$$#$###"
// let newString = "again"
// console.log(myString.concat(" ",newString))
// console.log("Dog is goood animal".replace('dog','cat'))


// s1="2"+"2"
// console.log(typeof(s1))
// console.log(typeof(eval(s1)))

// /*  
// In JavaScript, the eval() function is a global function that evaluates a string of JavaScript code and executes it. The syntax for eval() is as follows:

// javascript

// eval(string);

// Here, string is the JavaScript code that you want to evaluate. When you call eval(), it takes the string as an argument, interprets it as JavaScript code, and executes it.

// Here's a simple example:

// javascript

// var x = 10;
// var y = 20;
// var result = eval('x + y');
// console.log(result); // Outputs 30

// In this example, the string 'x + y' is passed to eval(),
//  and it is evaluated as the sum of the variables x and y.

// However, it's important to note that using eval() is
//  generally discouraged because it can pose security 
//  risks and make the code harder to optimize by the 
//  JavaScript engine. It can also lead to unexpected behavior 
//  and vulnerabilities, 
// especially if the evaluated code comes from an untrusted source.

// Instead of using eval(), consider using alternative
//  approaches, such as using JSON.parse() for parsing JSON
//   or defining functions and using them to encapsulate behavior.
//    Using eval() should be avoided in most cases for security 
//    reasons and to promote cleaner, more maintainable code.


// */
// console.log(String.fromCharCode(189, 43, 190, 61));
// // Expected output: "½+¾="
// const sentence = 'The quick brown fox jumps over the lazy dog.';

// const index = -4;

// console.log(
//   `Character code ${sentence.at(index)} is equal to ${sentence.at()
    
//   }`,
// );


// // string method toUppercase 

// stringa = "mystring"
// console.log(stringa.toLowerCase())


// let strin = "hello at my name"
//  c = strin.matchAll("a")
//  console.log(c)

// var str = "Hello World";
// console.log(str.slice(-10,-1)); // Output: "o Wor"
// // console.log(str.substring( 7,2)); // Output: "Hello"
// // //it treat as 2,7 in substring
// //same in substring
// // console.group(str.substring(2,7))

// var st = "hello woerd"
// console.log(st.slice(-1,-10))
// //not same 



//extract gmail.com
str = "shadyatul@gmai1020@gmail.com"
console.log(str.indexOf('@gmail'))
console.log(str.substring(19))

//check the palindrome or not 
//check close to palindrome or not 
//reverse string
//convert string to array

arr=[]
class aras{
    str = "My string"
 constructor(){

 }
 newmeth(){
    if(str ==true ){

       a =str.split()
       return a 

    }
 }
 
    
};

ar = new aras()
console.log(ar.newmeth())