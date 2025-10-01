let n = 5;
for(let i = 0; i < n; i++){
    let row = " ";
    for (let j = 0; j < n; j++){
        row = row + " * ";
    }
    console.log(row);
}


for(let i = 0; i < n; i++){
    let row = " ";
    for (let j = 0; j <= i; j++){
        row = row + " * ";
    }
    console.log(row);
}
// both are give same result
// for(let i = 0; i < n; i++){
//     let row = " ";
//     for (let j = 0; j < i + 1; j++){
//         row = row + " * ";
//     }
//     console.log(row);
// }


for (let i = 0; i < n; i++){
    let count = [];
    for (let j = 0; j <= i; j++){
        count = count + (j+1);
    }
   console.log(count);
}


console.log('reversed loop');
for (let i = n; i > 0; i--){
    let count = [];
    for (let j = 1; j <= i; j++){
        count = count + j;
    }
    console.log(count);
}

console.log("another way");
// for (let i = 0; i < 5; i++){
//     let count = [];
//     for (let j = 0; j < (n - i); j++){
//         count = count + (j + 1);
//     }
//     console.log(count);
// }


console.log("with stars");
// for (let i = n; i > 0; i--){
//     let count = [];
//     for (let j = 1; j <= i; j++){
//         count = count + " * ";
//     }
//     console.log(count);
// }

for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < (n - i); j++) {
        row = row + " * ";
    }
    console.log(row);
}


for (let i = 0; i < n; i++){
    let row = [];
    for (let j = 0; j < n-(i+1); j++){      // only add empty spaces into row. j = 0 --> 0 < 5-(0+1) ans 4 ==> "   "
        row = row + "   ";
    }
    for (let k = 0; k < i+1; k++){          // add stars into row k=0  -->  0 < 1(0+1) ==> *
        row = row + " * " ;
    }
    console.log(row);
}


// binary numbers
console.log("binary numbers with pattern ");

for (i = 0; i < n; i++){
    let row = ''; 
    let value = 1;

    for (j = 0; j <= i; j++){
        // add value into row
        row = row + value;

        // we change it after put value into row 
        // switch the value  0 --> 1;
        if(value == 1){value = 0}
        else (value = 1)
        
    }
    console.log(row);
}


console.log("every time changeble value");
// if you put this value outside than it's change every time it's diffrent than privous question.
let value = 1;

for (i = 0; i < n; i++){
    let row = ''; 

    for (j = 0; j <= i; j++){
        // add value into row
        row = row + value;

        // we change it after put value into row 
        // switch the value  0 --> 1;
        if(value == 1){value = 0}
        else (value = 1)
    }
    console.log(row);
}


