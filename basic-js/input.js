// let name = prompt("Enter Your Name:")
// console.log(name)

const handleClick = () => {
    console.log(" Btn clicked")
    document.querySelector("#name").innerHTML = "Hello"
    setTimeout(() => {
        document.getElementById("name").innerHTML = "There"
    }, 2000)
}

setInterval(() => {
    let date = new Date()
    let hour = date.getHours(); // 0-23
    if(hour < 10){
        hour = "0"+hour
    }
    let minutes = date.getMinutes() // 0-59
    if(minutes < 10){
        minutes = "0"+minutes
    }
    let secs = date.getSeconds()    // 0-59
    if(secs < 10){
        secs = "0"+secs
    }
    let time = hour+":"+minutes+":"+secs
    document.getElementById("clock").innerHTML = time
}, 1000)

// document.getElementById('clickme').setAttribute()


// Create CLick Me game in js 
// a. Build one html with  two or more buttons(If you need)
//  - the first button should say Enter your name and on clicking the button, 
// user should promted with a promt to get the name. 
// - ask untill user enters the name, if not passed do not allow the user to go next step
// b. the second button should enable only when the name is entered. 
// - the second button should show Clik me on the text and the first button should be disabled 
// - Upon clicking this button, the counter should be raised by 1 on every click, 
// till 5 secs of first click 
// c. Print the name and count on the page after 5 secs of the first click 
// d. Reset the page except the print all the buttons and counter to initial state 
// e. let the next game should restart