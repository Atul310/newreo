let allusers= [
   
    {
        name:'stdu1', 
        address:'ktm',
        email:'stdu1@gmail.com',
        lan:'Mern'
    },
    {
        name:'stdu2', 
        address:'lalitpur',
        email:'stdu2@gmail.com',
        lan:'React'
    },
    {
        name:'stdu3', 
        address:'ktm',
        email:'stdu3@gmail.com',
        lan:'Mern'
    },
    {
        name:'stdu4', 
        address:'lalitpur',
        email:'stdu1@gmail.com',
        lan:'React'
    },
    {
        name:'stdu5', 
        address:'bkt',
        email:'stdu5@gmail.com',
        lan:'Mern'
    },

]

/* 
Run a loop filter the data on the basis of 
console.log(stdFromKtm) 
the above outside should be 
{
        name:'stdu1', 
        address:'ktm',
        email:'stdu1@gmail.com',
        lan:'Mern'
}


*/
let stdFromKtm=[]
let stdFromLalitpur=[]
let stdFromBkt=[]
let Mern =[]
let react = []

let alluserl = allusers.length
for (i =0;i<=alluserl-1;i++){

    if(   allusers[i].address ==='ktm' )
    {
        stdFromKtm.push=allusers[i]
        console.log(stdFromKtm)
  
    } else if(allusers[i].address ==='lalitpur') {
        stdFromLalitpur.push=allusers[i]
        console.log(stdFromLalitpur)
    }

    else if(allusers[i].address ==='bkt') {
        stdFromBkt.push=allusers[i]
        console.log(stdFromBkt)
    }
  
}



// for (i =0;i<=alluserl-1;i++){

//     if(   allusers[i].address ==='lalitpur')
//     {
//         stdFromLalitpur=allusers[i]
//         console.log(stdFromLalitpur)
  
//     }

// }

// for (i =0;i<=alluserl-1;i++){

//     if(   allusers[i].lan ==='bkt')
//     {
//         react=allusers[i]
//         console.log(react.push)
  
//     }

// }



// for (i =0;i<=alluserl-1;i++){

//     if(allusers[i].lan ==='Mern')
//     {
//         Mern=allusers[i]
//         console.log(Mern)
  
//     }
// }