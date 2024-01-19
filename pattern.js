//start to print patern in js 
/* 
*
**
***
****
*****
*/
let row , column;
for(row = 5; row>=1; row--){
    let line=""
    for (column=5; column >=row;column--){
        line+= "*"
        
    
    }
 
    console.log(line)
    
}