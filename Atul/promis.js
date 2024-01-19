//develop a async function useinf promise to 
//calclate division of stude t
//take marks and total as an parmater of this 
// function and return promise with  divison and percentage
// as resovle if student is passed else reject 
//with proper reject message stating failure of student print this on console d

const div = (marks ,total)=> {
    return new Promise((res,rej)=>{
       let divison 
        const percent = (marks /total)*100
        if (percent>=80){
             divison = "Dist"
             res (divison)
        }
        else if (percent>=60){
            divison = "first div"
            res(divison)
        }
        else if (percent>=40){
            divison = "secon  div"
            res (divison)
        }
        else {
            divison= 'fail'
            res (divison)
        }
    })

}


    div.then((res)=>{
        return res


    })
    div.catch((rej)=>{
        return rej

    }) 