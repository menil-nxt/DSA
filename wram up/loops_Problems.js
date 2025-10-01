// 1. Write a function that serches for an element in an array and return the index, if the element is not present than just return -1.

let arr = [ 4, 6, 30, -56, 87, -67, 2, -1, -78 ,87];

function search(arr , x){   
    for (let i = 0; i < arr.length; i++){   
        if (arr[i] == x){               // if x is == arr[i] than return index of that array element.
            return i;
        }
    }
    return -1;
}

let result = search(arr , 1);           // (arr_name , x = value)
console.log("Problem 1 ==> answer   ",result);




// 2. Write a function that returns the number of negetive numbers in an array.


// function nagativeNumber(nav){
//     for (let i = 0; i < nav.length; i++){
//         if (nav[i] < 0){ 

//             console.log(nav[i]);
//         }
//     }
// }
// let result = nagativeNumber(nav);
// console.log(result);

function countNagative(arr){
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            count++;            // if number was found than it's increase by one count = count + 1.
        }
    }
    return count;
}

let navNumber = countNagative(arr);
console.log("Problem 2 ==> answer   ",navNumber);




// 3. Write a function that returns largest number in an array

function largestNumber(arr){
    let max = arr[0];           // you can also put instand of arr[0] ==>  ( -Infinity ).
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i];           // if max < arr[i] than arr[i] is max value and it's check with next one element if that element is max < arr[i] than it's max value.
        }
    }
    return max;
}

let large = largestNumber(arr);
console.log("Problem 3 ==> answer   ",large);


// 4. write a function that return smallest number in an array

function samllestNumber(arr){
    let max = arr[0];           // you can also put instand of arr[0] ==>  (Infinity ).
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < max){
            max = arr[i];           // if max > arr[i] than arr[i] is max value and it's check with next one element if that element is max < arr[i] than it's max value.
        }
    }
    return max;
}

let min = samllestNumber(arr);
console.log("Problem 4 ==> answer   ",min);


// 5. Find Second Largest number in an Array

function secondLargest(arr){
    if (arr.length < 1){            // if your Array is Empty than retur Error message.
        return new Error("Array is empty");
    }
    if (arr.length < 2){            // if your Array has less than two element in it than return null. --> ask about this to interviewer.
        return null;
    }
    firstLarge = -Infinity;
    secondLarge = -Infinity;
    for (let i = 0; i < arr.length; i++){
        if(firstLarge < arr[i]){          // if this condition is true than your firstLarge number is --> your secondLarge number.
            secondLarge = firstLarge;   // firat of all you assiean that firstlarge value to second large value than after update your firstlarge value(number).
            firstLarge = arr[i];          // than after update firstLarge value.
        }
        else if(secondLarge < arr[i] && arr[i] != firstLarge){    // if First if condition is false than this loop check this elseif condition and in this if secondLarge number is <(lessthan) arr[i].
                                        // arr[i] != firstLarge means it's not allow dublicate value in it. It allways give second large number.
            secondLarge = arr[i];           // than secondlarge number is arr[i].
        }
    }
    return secondLarge;
}

let second = secondLargest(arr);
console.log("Problem 5 ==> answer   ",second);