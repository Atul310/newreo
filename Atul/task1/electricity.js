//create a class called electricity billing 
//accept 2 prperty for this class name and unit 
//consumed 
//1) create fuction to assign value to these variable 
//and assign   them 
//2) create a function to calucate the amout using  following conditons 
   // for units <= 20   ==>>Npr 80
   // for next 10 units ==>> Npr 5/units
   // for next 20 units ==>> Npr 7/units
   //for next 30 units ==>> Npr 10/units
   //for next 50 units ==>> Npr 15/units
   //above all  ==>> Npr 20/units

//Assume total units to be 150 units consumed 


class Electricity_Billing {

    name;
    units;
    constructor(_name, _units){
        this.name = _name
        this.units=_units

    }
    assign_value(_name, _units){
        this.name= _name
        this.units = _units

    }

    
calulate_amount(){
    let total = 0;
    if (this.units <= 20) {
        total = 80;
    } else if (this.units <= 30) {
        total = 80 + (this.unit - 20) * 5;
    } else if (this.units <= 50) {
        total = 80 + 10 * 5 + (this.units- 30) * 7;
    } else if (this.units<= 80) {
        total= 80 + 10 * 5 + 20 * 7 + (this.units - 50) * 10;
    } else if (this.units <= 130) {
        total = 80 + 10 * 5 + 20 * 7 + 30 * 10 + (this.units - 80) * 15;
    } else {
        total = 80 + 10 * 5 + 20 * 7 + 30 * 10 + 50 * 15 + (this.units- 130) * 20;
    }
    return total;
  



}

}
const obj1 = new Electricity_Billing("a",120)
const total = obj1.calulate_amount();
console.log("customer:"+ obj1.units , total)
