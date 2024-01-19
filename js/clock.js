const showClock = ()=>{
    let today = new Date();
    let hours = today.getHours()

    let mins = today.getMinutes()
    let seconds = today.getSeconds()
    document.getElementById('clock').innerHTML=hours+":"+mins+":"+seconds
}
setInterval(showClock,1000)
