// a = [2,3,4,5]
// for (let i= 0;i<a.length;i++){
//     console.log(a[i])

// }

//for -of loop in js 

const arr = [1,3,4,5,5]
for (const nium of arr){
    console.log(nium)
}


const greetings = 'Hello world'
for ( const greeting of greetings ){
    console.log(greeting)

}

obj = {
    name:{
        name:"atul",
        age: 23

    },
    language:{
        programming:"html, css , js, python",
        speak: "Nepali, engilish"
    }


}
let taking =( obj?.language?.programming)
console.log(taking)

// for(ob in obj){
//     console.log(ob['language'])
// }
