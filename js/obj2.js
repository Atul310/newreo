const obj1= {1:'a',2:"b"}
const obj2 = {3:"c",4:'5'}
// const obj3 =Object.assign({},obj1,obj2)
// console.log(obj3)
// // the use of Object.assign() static method 
// it is used 
/*
The method copies the properties in the 
order they appear in the argument list. 
If multiple sources have properties with 
the same key, the later 
sources will overwrite the earlier ones.

*/

// Insted of usig  the Object.assign() method
// we can use the spread operators 
 obj3 = {...obj1,...obj2}
 console.log(obj3)


 // from data base the value comes as array of objects
 //like 






 const users = [
    {
        id:1,
        email:"hist@gmail.com"
    },
    {
        id:1,
        email:"hist@gmail.com"
    },
    {
        id:1,
        email:"hist@gmail.com"
    },
    {
        id:1,
        email:"hist@gmail.com"
    },

 ]
 console.log(users[0])

// About destrucutre both array and objects have 

//object destrucuture 


const course = {
    courseName: "js",
    price:999,
    coureseInstructor:'shady'
}
// now to acess or use the value 
// like 
course.courseName
// now for sometimes we need to use the value
// many times and it is not clear to use 
//coourse.courseName is not viable 
// for this we havve a new synxtax



const {coureseInstructor} = course
// this coureseInstructor can nbe put as Instctor 
// to shorten the name also it wors same
// now we dont have to write courese.courseInsturctor 
//everytime we use courseInsturctor 
// the above is object destructure 






//array can also be destructure but it is rare


