// add 10 random items to arrya and  print


// let arr=  [2,43,4,3,4,3,4,6]


// for ( let i =0; i<=10; i++){
  
//     // arr.push(Math.floor(Math.random()*100))
//     arr.push(Math.floor(Math.random()*100))

// }
// console.log(arr)
// Example multidimensional array
let multiArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  // Using nested loops to iterate through the array
  for (let i = 0; i < multiArray.length; i++) {
    for( let j = 0; j < multiArray[i].length; j++)  {   
     console.log(multiArray[i][j]);
    }

    console.log()
}

