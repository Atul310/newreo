// setTimeout(() => {
//     console.log("I am inside callback")
// }, 3000)

const async1 = (cb) => {
    setTimeout(() => {
        console.log("I am first function")
        cb("From 1")
    }, 3000)
}

const async2 = (x) => {
    setTimeout(() => {
        console.log("I am Second function")
        console.log("Reply from 1: ", x)
    }, 2000)
}

const async3 = () => {
    setTimeout(() => {
        console.log("I am Third function")
    }, 1000)
}

async1(async2)        // 3
        // 2
async3()        // 1
// console.log("I am outside callback")

const login = (email, passowrd, accessDB) => {
    // validation
    
    /// 
    accessDB()
}

const dashbaordAccess = () => {
    // only after login
}

login("admin",'password', dashbaordAccess)

let users = [
    {
        name: "User Name",
        email: "email@user.com",
        address: 'kathmandu',
        role: "student"
    },
    {
        name: "User Two",
        email: "two@user.com",
        address: 'kathmandu',
        role: "student"
    },
]

console.log("")

users.map((item, index) => {
    console.log("sn. ", (index+1))
    console.log("Your name is:"+item.name)
    console.log("Your email is:"+item.email)
    console.log("Your address is:"+item.address)
    console.log("Your role is:"+item.role)
    console.log("")
})


const products = [
    {
        name: "Product One",
        disocunt: 10,
        price: 1000
    },
    {
        name: "Product Two",
        disocunt: 1,
        price: 2000
    },
    {
        name: "Product Three",
        disocunt: 13,
        price: 3000
    }
]

// discountAmt, 
// afterDiscount
console.log(" ")
products.map((item) => {
    item.discountAmt = item.price * item.disocunt/100;
    item.afterDiscount = item.price - item.discountAmt;
    console.log("Product Name: ", item.name)
    console.log("Product Price: ", item.price)
    console.log("Product Discount: ", item.disocunt,"%")
    console.log("Product Discount Amount: ", item.discountAmt)
    console.log("Price After discount: ", item.afterDiscount)
    console.log(" ")
    
})


products.forEach((item) => {
    item.discountAmt = item.price * item.disocunt/100;
    item.afterDiscount = item.price - item.discountAmt;
    console.log("Product Name: ", item.name)
    console.log("Product Price: ", item.price)
    console.log("Product Discount: ", item.disocunt,"%")
    console.log("Product Discount Amount: ", item.discountAmt)
    console.log("Price After discount: ", item.afterDiscount)
    console.log(" ")
    
})


let allUsers = [
    {
        name: "Student One",
        address: "Kathmandu",
        email: "one@student.com",
        lang: "MERN"
    },
    {
        name: "Student Two",
        address: "Kathmandu",
        email: "two@student.com",
        lang: "MERN"
    },
    {
        name: "Student Three",
        address: "Lalitpur",
        email: "three@student.com",
        lang: "React"
    },
    {
        name: "Student Four",
        address: "Bhaktapur",
        email: "four@student.com",
        lang: "MERN"
    },
    {
        name: "Student Five",
        address: "Lalitpur",
        email: "five@student.com",
        lang: "React"
    }
]
// Task> 
// for, for-in, for-of, map, forEach
const stdFromktm = []//loop filter for the data 
const stdFromLtd = []
const stdFromBkt = []

const stdMern = []
const stdReact = []

/**
 * 
 * [
 * {
        name: "Student One",
        address: "Kathmandu",
        email: "one@student.com",
        lang: "MERN"
    },
    {
        name: "Student Two",
        address: "Kathmandu",
        email: "two@student.com",
        lang: "MERN"
    },
 * ]
 */

    // array access 
        // loop 
            // .map()
                // 

allUsers.map((usrInfo) => {
    // usrInfo
    if(usrInfo.address.toLowerCase() === "kathmandu"){
        stdFromktm.push(usrInfo)
    } else if(usrInfo.address.toLowerCase() === "bhaktapur"){
        stdFromBkt.push(usrInfo)
    } else if(usrInfo.address.toLowerCase() === "lalitpur"){
        stdFromLtd.push(usrInfo)
    }

    if(usrInfo.lang.toUpperCase() === "MERN"){
        stdMern.push(usrInfo)
    } else if(usrInfo.lang.toUpperCase() === "REACT"){
        stdReact.push(usrInfo)
    }
})


let userKthm = allUsers.filter((usrInfo) => (usrInfo.address.toLowerCase() === 'kathmandu'));
let userLlt = allUsers.filter((usrInfo) => (usrInfo.address.toLowerCase() === 'lalitpur'));
let userBhkt = allUsers.filter((usrInfo) => (usrInfo.address.toLowerCase() === 'bhaktapur'));
let mernStd = allUsers.filter((usrInfo) => (usrInfo.lang.toLowerCase() === 'mern'));
let reactStd = allUsers.filter((usrInfo) => (usrInfo.lang.toLowerCase() === 'react'));

console.log(stdFromktm) // 
console.log(stdFromLtd) // 
console.log(stdFromBkt) // 
console.log(stdMern)    
console.log(stdReact)


let resultKtmMern = allUsers.filter((item) => item.address === 'kathmandu' && item.lang === "MERN")


let date = "2023-09-10"

const dateFormat = (date ) => (new Date(date));
// {
//     return new Date(date);
// }

// fwrite((error, success)=>{})
// multer => destincation: (req, res, cb) => {
    // /// cb(null, true) cb(erro, false)
//}
// (error, succ) => {}

const fun1 = (err, succ) => {
    // error 
    // succes
}

const func2 = (cb) => {
    cb(eror, succes)
    cb(null, ture)
}

func2(fun1);