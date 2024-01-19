//create a class with name ,score as properties
//asssign value using constructor 
//create private functipn to get percentage 
//create anoter private functipn to get division
//consider >=80% dist , >=60 first ,>= 45 second
//>=
//using public function calculate and print the value of the 
//stucent 

//any function which are not to be called outside class
//then make them private 

// private = is made by # acess modifier 
//pritected is made by _ under score 


class Student{
   
    constructor(name,score,marks){
        this.name= name
        this.score=score
        this.marks= marks
        this.getPercentage()
        this.getDiv()

        
    
    }
    getPercentage(){
        return this.percentage = (this.score/this.marks)*100
    }
    getDiv(){
        if(this.percentage>=80){
            return "Dist"
        }
        else if 
        (this.percentage>=60 )
        {
            return "First Div"
        }
        else if (this.percentage>=45)
        {
            return "second"
        }
        else if (this.percentage>=32) {
            return "third "
        }
        else (this.percetage <32)
         {
            return "fail"

        }
        
    }
    printStudent(){
        console.log("name:", this.name)
        console.log("Percentage", this.getPercentage()+"%")
        console.log("Divison:",this.getDiv())
    }

}

class Bachelorstudent extends Student{
level 
setlevel = (Level)=>{
    this.level-= this.level;
}
}
const std = new Student("Radom",158,500)
std.printStudent()

