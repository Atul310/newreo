class God {
    getGod(){
        console.log("almighty")
    }

}
class User extends God {
    name;
    constructor(_name){
       super()
       this.name = _name
        console.log("i am  user class");
    }
    getGod(){
       super.getGod() //this calls the immediate parent same method  
        console.log("ulmighty son ")
    }
}




class AdminUser extends User {
    role ="min"
    constructor(name){
        super(name)
    console.log("i am admin user class");

    }
}

const adminobj = new AdminUser("Atul")
adminobj.name = "admin user"
adminobj.getGod()
 console.log(adminobj)






 // Normally when we create the inheritance 
 //we create object of child class


 // If there is no constructor in child(self) class
 // then it executes the parent constructor 



 // if therre is no constructor in parent class
 // and there is only constructor in child class
 //then it will throw error 
 // if we dont write constructor  in any class
 // there will be default constructor 

 // and if we write constructor in child class
 //then we have to call the default constructor 
 // in child class using super()keyword


 // the super() keyword calls the immediate parent
 // constructor 


