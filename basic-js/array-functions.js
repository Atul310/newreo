let allStudents = [];

let firstStd = [
    "Student Name",
    "std@email.com",
    "address",
    123123123,
    "class"
]

// Insert 
// [] => empty
// console.log(allStudents)
allStudents.push(firstStd)  // 0

// console.log(allStudents)

let secondStd = [
    "Std Two",
    "std2@email.com",
    "address2",
    9876543210,
    "class 2"
]
// at the end of an array 
// allStudents => [0]
allStudents.push(secondStd)  // 1
// console.log(allStudents)

let thirdStd = [
    "Std Three",
    "std3@email.com",
    "address 3",
    9876543210,
    "class 3"
]

// at the top 
// 0, 1
allStudents.unshift(thirdStd)   // current elem => 0, old 0 => 1, 1 => 2
// // 0, 1, 2

// console.log(allStudents)
// allStudents[1] = secondStd;

// push => end => size-1
//
let len = allStudents.length;   // 3    0,1,2
// new postion => 3 
allStudents[len] = thirdStd // 3 , 0123

console.log(allStudents)


// products => 
// 5 data entry => Product name, brand, price, discount, stock, category
// ["iPhone 14", "apple", 148000, 10, 15, "Smart Phones"]


let collection = [];    // data 

// operation filter loop 

let chunkData = []

// 
// allStudents => 4
// let topElem = allStudents.shift()   // first Index value
// let lastElem = allStudents.pop();   // last index value

// let oneIndex = allStudents.splice(1,1)

// 0, 1, 2, 3 
let newEle = ["test"];

// 0,1, 2, 3, 4
let firstChunk = allStudents.splice(0, 2);
let index = 1;

// firstChunk.push(newEle)
allStudents.unshift(newEle)
allStudents = firstChunk.concat(allStudents)

// console.log(firstChunk, allStudents)


// jpg, jpeg, png, svg, bmp, webp, gif 
// filename.ext
let ext = "jpg";
const allowed = ["jpg", "jpeg", "png", "svg", "bmp", "webp", "gif" ]
allowed.includes(ext);  // boolean

allowed.reverse();
allowed.sort()

// TODO: During Functions session 
// .map()
// .filter()
// .reduce()
// .forEach()

// let user_1 = [
//     "Name",
//     "email",
//     "address"
// ]
// user_1[0];

// object 
let user_1 = {
    name: "User name",
    email: "email@user.com",
    address: "Kathmandu" 
}
user_1.name;

let user_2 = {
    email: "email@user.com",
    name: "User name",
    address: "Kathmandu" 
}
user_2.name;

// let user_2 = [
//     "email",
//     "name",
//     "address"
// ]
// user_2[0];

firstStd ={
    name: "Student One",
    email: "one@std.com",
    phone: 123123123, 
}

secondStd ={
    name: "Student Two",
    email: "two@std.com",
    phone: 123123123, 
}

let keys = Object.keys(secondStd);  // []
console.log(keys) // ['name', 'email', 'phone']
let values = Object.values(secondStd); // 
// ['Student two', "two@std.com", 123123123]

let stds = [];

stds.push(firstStd);
stds.push(secondStd);

console.log(stds[0].name)
console.log(stds[0]['name']) 