const fun1 = ()=> {
    return new Promise((res,rej) => {
        console.log("i am fun1")
        let x = true;
        if (x){
            res("i am resolve of 1")


        }else {
            rej(" I am reh of 1")
        }
    })
}


const fun2 = ()=> {
    return new Promise((res2,rej2) => {
        console.log("i am fun2")
        let x = true;
        if (x){
            res2("i am resolve of 2")


        }else {
            rej2(" I am reh of 2")
        }
    })
}

const fun3 = ()=> {
    return new Promise((res3,rej3) => {
        console.log("i am fun1")
        let x = true;
        if (x){
            res3("i am resolve of 3")


        }else {
            rej3(" I am reh of 3")
        }
    })
}
fun1()
  .then( (res)=>{
    fun2()
    
    .then((res2)=>{
        console.log(res2)
    })
    .catch(rej2=> {
        return rej2
    })

    console.log(res)
  }

  )
  .catch((rej)=> {
    return (rej)
  }

  )

