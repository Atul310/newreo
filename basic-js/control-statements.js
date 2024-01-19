/**
 * if-else 
 */
let product = {
    name: "Product Name",
    price: 1000, 
    discount: 10
}


// disoucnt => present 
// after disoucnt 
// product -> after_disoucnt => discount , price 
if(product.discount > 0) {
    // body
    //if(){}else {}
    product.after_discount = product.price - product.price * product.discount/100
} else {
    // optional 
    // else body
    product.after_discount = product.price
}

product.after_discount = (product.discount > 0) 
                            ? 
                                product.price - product.price * product.discount/100 
                            : 
                                product.price


// Calculate the Division based with marks 
let marks_obt = 340;
let total_mrks = 500;

const per = marks_obt/total_mrks * 100;

if(per >= 80){
    console.log("Distinction")
} else {
    // 
    if(per >= 60){
        console.log("First Division")
    } else {
        // 
        if(per >= 45){
            console.log("Second Division")
        } else {
            // 
            if(per >= 32) {
                console.log("Third Division")
            } else {
                // 
                console.log("Sorry! You are failed")
            }
        }
    }
}   


if(per >= 80) {
    console.log("Distinction")
} else if(per >= 60) {
    console.log("First Division")
} else if(per >= 45) {
    console.log("Second Division")
} else if(per >= 32) {
    console.log("Third Division")
} else {
    console.log("Sorry! You are failed")
}

console.log(
    (per >= 80) ? "Distinction" 
        : ((per >= 60) ? "First Division" 
                : ((per >= 45) ? "Second Division" 
                        : ((per >= 32) ? "Third Division" 
                                : "Sorry You are failed"
                        )
                )
         )
)
// calculate percentage based on the value above;
// Print 
    // percentage is greater than or equals to 80                   ==> Distinction
    // percentage is greater than or equals to 60 < 80              ==> First Division
    // percentage is greater than or equals to 45 < 60              ==> Second Division
    // percentage is greater than or equals to 32 < 45              ==> Third Division
    // percentage is less than                 32                   ==> Sorry! You are failed

// Task: 1 
// Calculate After Tax for a user 
// Suppose a software developer earns 5000000 per year. The tax bracket for the 
// earning is as follow: 
// for the first 500000 => 1% 
// for the next 1000000 => 15%
// for the next 1000000 => 25%
// for the next 1000000 => 30%
// for the next 1000000 => 35%
// and for all the extaa => 36%
// Calculate => 
    // a. Yearly tax paid by the developer
    // b. Annual Salry after deducting tax
    // c. Monthly Tax paid by the developer
    // d. Monthly Income after tax deduction


// Task: 2
// Calculate the Amount to be paid for the electricity bill 
// Support the total units consumed is 250 units 
// the cost is divided as follow: 
// for the first 20 units: Lumsum   => Npr. 80
// for next 30 units                => Npr. 5/unit
// for next 30 units                => Npr. 7/unit
// for next 30 units                => Npr. 10/unit
// for next all extra               => Npr. 15/unit

