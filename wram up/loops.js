// Loops 

// For loop

for(let i = 0; i <= 5 ; i++){
    console.log("hello",i);
}

for (let i = 3; i < 5; i++){
    console.log('hw',i);
}

for (let i = 2;i < 9; i= i+2){
    console.log(i);;
}


// reverse loop
for (let i = 10; i > 5; i--){
    console.log("reverse loop",i);
}

for (let i = 5; i < 4; i++){
    console.log(i);
}

// infinite loop
// for (let i = 1; i > 0; i++){
//     console.log(i);
// }


// with function 

function person(i){
    console.log('menil',i);
}

for (let i = 0; i < 10; i++){
    person();           // call this function inside for loop so this function is run till condition is true.
}


// with array 

let arr = [5,6,7,8,9,3,2,4];

// for print every element in this array

for (let i = 0; i < arr.length; i++){       // this loop run till arr => length
    if(arr[i]%2 == 0)          // only even numbers
    console.log(arr[i],i);
}



// while loop

let i = 0;          // initialization

while(i < 5){       // condition

    console.log("while loop",i);        // messages or block of code 

    i++;            // increment or decriment.
    
}