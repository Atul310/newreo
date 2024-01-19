//promises in js 
// promise doesnot wait until a timem 
// it doesnot wait 
//fixed timeout is done by settimeout
//api call garnu paryo vane aru aru
//vayo vane we use promise 

//promise is always object tyooe 
//fulfill/reject ==>> sucess /fail
const prom= new Promise((resolve, reject) => {})
const login = ()=> {
    //sucess login 
    return new Promise ((resolve,reject)=>{
        //login logic
        //response == sucess ,fail
        resolve("sucess call")
        // reject('reject')

    })
    

}


let loginResponse = login()
console.log(loginResponse)

