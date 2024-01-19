// const func1 = () => {
//     console.log("I am in func1")
//     return new Promise((res, rej) => {
//         // ...logic
//         let x = true;   //
//         if(x) {
//             res("I am resolve of 1")
//         } else {
//             rej("I am reject of 1")
//         }
//     });
//     // return Promise.resolve("Resolve of func1")
//     // return Promise.reject()
// }

// const func2 = () => {
//     console.log("I am in func2")
//     return new Promise((res, rej) => {
//         let x = true;   //
//         if(x) {
//             res("I am resolve of 2")
//         } else {
//             rej("I am reject of 2")
//         }
//     });
// }


// const func3 = () => {
//     console.log("I am in func3")
//     return new Promise((res, rej) => {
//         let x = true;   //
//         if(x) {
//             res("I am resolve of 3")
//         } else {
//             rej("I am reject of 3")
//         }
//     });
// }


// // func1()
// //     .then((res)=>{
// //         console.log(res);
        
// //         func2()
// //             .then((res2) => {
// //                 console.log(res2)

// //                 func3()
// //                     .then((res3) => {
// //                         console.log(res3)
// //                     })
// //                     .catch((rej) => {
// //                         console.log(rej)
// //                     })
// //             })
// //             .catch((rej) => {
// //                 console.log(rej)
// //             })
// //     })
// //     .catch((rej) => {
// //         console.log(rej)
// //     })


// // func1()
// //     .then((res) => {
// //         // operation
// //         console.log(res)
// //         return func2()
// //     })
// //     .then((res2) => {
// //         console.log(res2)
// //         return func3()
// //     })
// //     .then((res3) => {
// //         console.log(res3)
// //     })
// //     .catch((rej) => {
// //         console.log(rej)
// //     })

// // read 
// // row by row
// let std1 = Promise.resolve("I am resolve of first row")
// let std2 = Promise.resolve("I am resolve of second row");
// let std3 = Promise.resolve("I am resolve of third row");
// let std4 = Promise.reject("I am rejcect of fourth row")
// let std5 = Promise.resolve("I am resolve of fifth row");    


// // Promise.all([std1, std2, std3, std4, std5])
// Promise.allSettled([std1, std2, std3, std4, std5])
//     .then((res) => {
//         console.log(res)
//     })
//     .catch((rej) => {
//         console.log(rej)
//     })
// // Promise.allSettled()



// // develop an asynchronous function using promise to calculate division of a student. 
// // take marks and total as an parameter of this function and return promise with
// // division and percentage as resolve if the student is passed 
// // else reject with proper reject message stating the failure of the student 
// // Print this on the console. 
// const asyncf = () => {
//     return Promise.resolve("Hello")
// }

// // return type is always a promise, resolve 
// const asyncRes = async () => {
//     let x = false;
//     if(x) {
//         return "hello"
//     } else {
//         throw "I am sorry"
//     }
// }

// const asyncrej = () => {
//     return Promise.reject("Reject")
// }

// const asyncRejFunc = async() => {
    
//     try {
//         let result = await asyncRes();
        
//         // ... 
//     } catch(rej) {
//         // reject exception
//     }

//     throw "Reject"
// }


// // let result = await asyncf()



// asyncf()
// .then()

// asyncrej()
// .catch()


// async function name() {

// }

// const func123 = async function(){

// }

// const funcxyz = async () => {
//     let response = await name()
//     await func123(response)
// }

// const userObj = {
//     func123: async() => {

//     }
// }

// name()
// .then((res) => {
//     return funcxyz()
// })
// .then()
// .catch()


const getDivision = async (marks, total) => {
    let per = marks/total *100
    if(per >= 80) {
        return {division: "Distinction", per: per};
    } else if(per >= 60) {
        return {division: "First Division", per: per};
    } else if(per >= 45) {
        return {division: "Second Division", per: per};
    } else if(per >= 32) {
        return {division: "Third Division", per: per};
    } else {
        throw {division: "Sorry! You are failed", per:per};
    }
}

// const getCalculation = (std) => {
//     std.map(async (stdData) => {
//         try {
//             let response = await getDivision(stdData.markObt, 500)
//             console.log("Name: "+stdData.name+", Marks: "+stdData.markObt+", per: "+response.per+"%, Division: "+response.division)
//         } catch(exception) {
//             console.log("Name: "+stdData.name+", Marks: "+stdData.markObt+", per: "+exception.per+"%, Division: "+exception.division)
//         }
//     })
// }

let stds = [
    {
        name: "Student One",
        markObt: 123
    },
    {
        name: "Student Two",
        markObt: 234
    }
]

const printDivision = async (stdData) => {
    try {
        let response = await getDivision(stdData.markObt, 500)
        stdData = {
            ...stdData,
            ...response
        }
        console.log("Name: "+stdData.name+", Marks: "+stdData.markObt+", per: "+response.per+"%, Division: "+response.division)
    } catch(exception) {
        // console.log("Name: "+stdData.name)
        // console.log("Marks: ")
        stdData = {
            ...stdData,
            ...exception        
        }
        console.log("Name: "+stdData.name+", Marks: "+stdData.markObt+", per: "+exception.per+"%, Division: "+exception.division)
    }
}

stds.map(printDivision)
// getCalculation(stds);