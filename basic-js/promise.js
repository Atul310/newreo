// promise is an object of Promise class 
// 3 stages 
// a. pending 
// b. Fullfilled/Reject 
// c. Settlement

const obj = new Promise((resolve, reject) => {
    // task 
    // 
    let user = {}
    // resolve("From Resolve")
    reject("User not found")
})

let loading = true
obj
    .then((res) => {
        console.log(res);
        // loading = false;
    })
    .catch((rej) => {
        // 
        // loading = false;
    })
    .finally(() => {
        loading=false
    })

    console.log("I am here")