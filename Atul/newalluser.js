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
let usrktm = allusers.filter((userinfo) => (userinfo.address.toLowerCase()==='ktm'));
let userbkt = allusers.filter(userinfo )
console.log(usrktm)