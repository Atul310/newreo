//
// i = 1
// 
    // 1
    // i= 2 
    // i <= 10 => (2 <= 10)

    // 2 
    // i = 3
    // i<=10 => 3 <=10
    // ....
    // 9
    // i = 10
    // 10 <= 10
    // 10
    // i == 11
    // 11 <=10 false 
    ////
// do-while 
let i = 11
do {
    // console.log(i)
    i++;        // i = i + 1
    // console.log, document.w
} while(i <= 10)

// i = 11
    // do => 10
    // i++ => 11
    // WHILE(11 <= 10)

// 11

i = 1;
while(i <= 10){
    // if(i === 7) {
    //     continue;
    // }
    // console.log(i)
    i++
}

// CSV ==> import => export 

for(let j = 1; j <= 10; j++) {
    // console.log(j)
}

j = 1;
for(; j <= 10; j++){
    // console.log(j);
}

j = 1;
for(; j <= 10; ){
    // console.log(j);
    j++
}

j = 1;
for(;; ){
    
    // console.log(j);
    j++
    if(j === 11){
        break;
    }
}


/**
 * 
 * 
 * 1
 * 1    2
 * 1    2    3
 * 1    2    3    4
 * 1    2    3    4    5
 * 
 * 
 * 1    2    3    4    5
 * 1    2    3    4
 * 1    2    3
 * 1    2
 * 1
 * 
 * 
 * 1    1    1    1    1
 * 2                   2
 * 3                   3
 * 4                   4
 * 5    5    5    5    5
 * 
 * 1    1    1    1    1
 * 2                   2
 * 3                   3
 * 4                   4
 * 5    5    5    5    5
 * 6
 * 7
 * 8
 * 9
 * 
 * 
 * P
 * P    R
 * P    R    O
 * P    R    O    G
 * P    R    O    G    R
 * P    R    O    G    R    A
 * P    R    O    G    R    A     M
 * P    R    O    G    R    A     M     M
 * P    R    O    G    R    A     M     M    I
 * P    R    O    G    R    A     M     M    I    N 
 * P    R    O    G    R    A     M     M    I    N    G
 */


/**
 * 1
 * 1    2
 * 1    2    3
 * 1    2    3    4
 * 1    2    3    4    5
 * 
 * => 5 
 * 1    => 1
 * 2    => 1    2
 * 3    => 1    2    3
 * 4    => 1    2    3    4
 * 5    => 1    2    3    4    5
 * 
 */

for(let i = 1; i <= 5; i++){
    // 1, 2, 3, 4, 5
    let toPrint = ""
    for(let j = 1; j <= i; j++){
        // 
        toPrint += j+"    ";
    }
    console.log(toPrint)
}


let productList = [
    {
        product: "namer",
        rate: 4
    }
]



// product loop 
    // rate loop 

/**
 * 1
 * 1    2
 */

// i = 1 ; i <= 5; i =2
    // toPrint= ""
    // inner loop 
        // j = 1. 2 <= 2;  j++
            // toPrint = "1    2    "
            // end inner loop
    // 1    2
// outerLoop 

// 1 , 5

console.log("")

for(let i = 5; i >= 1; i--){
    // 5-1
    let toPrint = "";
    for(let j = 1; j <= i; j++){
        toPrint += j+'    ';
    }
    console.log(toPrint)
}

console.log("")
let word = "PROGRAMMING";
let size = word.length;

for(let i = 0; i < size; i++){
    // 1, 2, 3, 4, 5
    let toPrint = ""
    for(let j = 0; j <= i; j++){
        // 
        toPrint += word[j]+"    ";
    }
    console.log(toPrint)
}
