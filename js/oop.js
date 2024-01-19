//prototype
//class based 
//ApI call ==>> Data 
//Modeling 


//Authentication 
// user data 

//this is constructir of oop 
function User (_name, _email){
this.name = _name;
this.emai =_email;


}



//Defining function in prottoype 


User.prototype.getName= function(){
    return this.name
}
// making user object 
const user = new User("atul", "atuldhital@gmail.com")
console.log(user.getName())