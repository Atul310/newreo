 
 //coding is separation of concern 
 // function is the process of breaking down complex 
 //linen of code into simpler form and grouping them
 //into tsome blocks so that wheenever and whereever 
 // i want to execute that code block i  can reuse them 


 // Function are the reusable code block which are 
//written for logic implemenatation anywhrrere in proagram 
//and can reuse them anywhere 



// two types of function 
//1) Built in function ==>> developed by js community 
// javascript developers ,scripting language ,Developers just uses the 
//built in function without writng the code 
//like we only use the function 

//eg array function 

Array.push();
Array.unshift();
console.log();
// here log is also function 
// log is linked with object or  datastructure


//sometimes function are not associated with any data 
// or objet and called non object related data.

//like confirm() ,alert() , prompt( ) function 



//they are pop up function , and features of js related 
//to any events

// We only use these type of function and explicitlly 
//we dont define the function and we dont write code to
//again for their 
//whenn we write these function like confirm()
// we are not definning that function we are only using 
//these function 



//============================================================




// 2)user-defined function 


//every function have three parts 
//1) definition , decleartion , call(fire,tigggred )

// function are also called as methods , evetsntds, function itself

// four ways to define function in js 

//1) basic
function addNumbers(a,b){ //functioal variable are a,and b

//the scope of a , b are within this addNumbers only

let c =a+b;
console.log(c)
}

addNumbers(20,30)


//function can return and receive anything



function addNum(a,b){ //define garda parameters 
    let d = a+b;
    return d; // this is where function are definded 
    // scope of definiton .  logic are implemented here 

}
let x = addNum(10,20); //value pass garda parameter 
console.log(x)




//anoterr waty of defining  function 
// assiginig to variable 
const addNumber1= function(q,w){
    let z = q+w
}
let h= addNumber1(10,1)



//3rd way of declaring  //arrow function 

// const addNumber2= a =>{
    
//in arrow function with only one parameter we dont 
//have to enclose in parentehesis 
// }

const addNumber3= (a,b)=>{ //we have to enclose 
    //in parenthesis for multiple parameter

}

//



//4th way of definifg function // 
// assiging to object

// let user ={ //this is object data 
//     //we call user as a object data 

//     setname:function(){

//     }
// }


// let user1 = {
//     setnamw:() => {

//     }
// }





let user = {

    setname:function(){  //this is function decleartion

    }
}

// function are also sometiomes called as data types 
//as in above case function is assigned to object datatyppe

// to call this funtion we do like this 


user.setname()  // this is calling the function 
//we write object data and write dot(.) operator and 
// then call the function defined


//everything in js is objects 



// Js is async 
// function value doesnot chage once declared and define 
// so we declare function as const 


// Js is asynchronocous programming language


//Programming language execute in 2 ways 

// 1) Synchronous ==>>
//==>> Generally every programming language are 
//synchrous in nature 

// Synchronous literal menaing is contarinous , in a harmony 
// yek paxi arko  
// synchrounos in programming ==>> line by line execute
// vayo vane 

// 


//async is randomly execution of 





//2) Asynchronous =y=>> Js show asynchronous 