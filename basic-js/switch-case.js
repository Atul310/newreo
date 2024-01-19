let action = "add"  // add, edit, view, delete

if(action === 'add') {
    console.log("Add Opertion -  CREATE")
} else if(action === 'edit'){
    console.log("Update Operation - UPDATE")
} else if(action === 'view'){
    console.log("Read Operation - READ")
} else {
    console.log("Delete Operation - DELETE")
}

switch(action){
    case "add":
        console.log("Add Operation - CREATE")
        // code 
        break;
    case "edit":
        console.log("Update Operation - UPDATE")
        // code 
        break;
    case "view":
        console.log("Read Operation - READ")
        // code 
        break;
    default:        // optional
        console.log("Delete Operation -  DELETE")
        break   // optional
}

let day = "Sunday"  // Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday
// Friday ===> Weekend
// Saturday or Sunday ===> Holiday
// remaining ====> Weekday

switch(day) {
    case "Friday":
        console.log("Weekend")
        break;
    case "Saturday":
    case "Sunday":
        console.log("Holiday");
        break;
    default: 
        if(["Monday", "Tuesday", "Wednesday", "Thursday"].includes(day)){
                console.log('Weekeday')
        } else {
            console.log("Undefined")
        }
        break;
}


let marks = 340
let per  = marks/5;

switch(true) {
    case (per >= 80):
        console.log("Distinction");
        break;
    case (per >= 60):
        console.log("First Division")
        break;
    case (per >= 45):
        console.log("Second Division")
        break;
    case (per >= 32): 
        console.log("Thrid Division");
        break;
    default: 
        console.log("Sorry! You are failed")
        break;
}