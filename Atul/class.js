class User {
     // class has 2 things 
     //1 data(attributes) 
     //2) methods 


     name;
     address;    // these three are the attributes
     email;   
     
 // to define constat attributes(stttic value )
 // we use static keyword and remember we must 
 //assign value to the static varuable 
 static ROle = "user "


 // writing methods in oop in js

 //  for eg to set dat in the name,address and email variable


 //we make methods

 setName(_name){
    this.name = _name

 }
 getName(){
    return this.name
 }

}