//Modularity 
//Auth 


//class 
// object

function User(_name){
    this.name = _name

}
//Class has two things data (attribute) and function (methods)//
// To add method in this prootype class 
//we do it like 
// write class name and write prototype and then do (dot(.))
// protopye means whateever exist physically 
//we write it virtually like arch 
//
User.prototype.getName = function(){
    return this.name;
}


const userObj = new User("shady")
const usrobj1 = new User("Atul")
console.log(userObj," " ,usrobj1)
console.log(userObj.getName())
// 