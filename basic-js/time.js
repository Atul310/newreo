// setTimeout()
// setInterval()
// clearInterval()

// clouser and callback 
const func1 = () => {
    console.log("I am in func1")
    return true;
}

const func2 = (x) => {
    // x depened
    console.log("I am in func2")
    return true;
}

let res1 = func1();
let res2 = func2(res1);

// I am in func1
// I am in func2

let x = 10; // global 
const abc = () => {
    // 
    let x = 20;   // global
}
abc();
// x 
console.log(x); // 20

const func3 = () => {
    // ...... 
    let x = true;

    const func4 = () => {
        // ... 
        return x;
    }
    return {x, func4}
}
let result = func3()
result.func4()
result.x
// ..... 
// func4()      // true


const call1 = (cb) => {
    // ....
    cb()    // call2
}

const call2 = ()=> {
    console.log("I am in call2")
}


const call3 = (cb) => {
    cb()
}

call1(call2)
call3(call2)


const func11 = (cb) => {

    cb()
}
// 
func11(function() {
    // code block
})