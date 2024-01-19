// Array
// collection of Data 
// comma seprated 
// index-value pair 
//  index is default assigned and always starts from 0 
// HR management 
let employee_name = "Ram Bahadur"
// let employee_email = "employe@test.com"
// let employee_address = "Kathmandu"
// let employee_phone = 1231231231
// let employee_role = "staff"


// lastIndex = size-1

let employee_1 = [
    employee_name,              // 0
    'employee@test.com',        // 1
    `Kathmandu`,                // 2
    1231231231,                 // 3
    "staff"                     // 4
]

let size = employee_1.length;   // no of elemets 
console.log(size);  // 5
//let name = "";


console.log(employee_1[0])
console.log(employee_1[1])
console.log(employee_1[2])
console.log(employee_1[3])
console.log(employee_1[4])
// console.log(employee_1[5])  // 

let employee_1_1 = new Array(
    "Ram Bahadur",
    "employee@test.com",
    "Kathmandu",
    1231231231,
    "staff"
); // array constructor 

// Single Dimensional and Multi Dimensional 
let user_1 = [
    "value",
    123,
    true, 
    null, 
]

user_1[2]   // true 

// Multi dimensional Array
let user = [
    [
        employee_name,              // 0
        'employee@test.com',        // 1
        `Kathmandu`,                // 2
        [1231231231, 323123123],                 // 3
        "staff"                     // 4
    ],
    [
        employee_name,              // 0
        'employee@test.com',        // 1
        `Kathmandu`,                // 2
        1231231231,                 // 3
        "staff"                     // 4
    ],
    [
        "name",
        "email",
        "address",
        123123,
        "role"
    ]
]

// Array operations // Insert // Retrive/Delete// read ===> loop // update 
console.log(user[0][3][1]) // [1231231231, 321123123]