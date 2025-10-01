// Write a function of it's return count of digits in a Number


// with array but only positive numbers.
let number = 123392; // so it's return count of this number --> 3.
let stringNumber = String(number);
let arrayOfString = Array.from(stringNumber);
console.log(arrayOfString);


function countDigit(arrayOfString){
    count = 0;
    for (let i = 0; i < arrayOfString.length; i++){
        count = count + 1;
    }
    return count;
}


let result = countDigit(arrayOfString);
console.log(result);





// with out array 
function countNumber(n){
    if (n == 0 ) return 1;         // if n is equal than return 1.
    n = Math.abs(n);      // Math .abs() => make the number positive 

    let count = 0; 
    while(n > 0){
        n = Math.floor(n / 10);       // Math.floor() it's change(convert) any floating number to whole number (10.2) -> 10 ,(10.9) -> 10.   
        count++;
    }
    return count;
}

let n = 5645;

let counter = countNumber(n);
console.log(counter);