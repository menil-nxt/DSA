// Palindrome Number 

function palindrome(number){
    if( number < 0 ){
        return false;
    }


    let nCopy = number;
    let rev = 0;
    while( number > 0 ){
        let rem = number % 10;     // this equations is give you last digit of your number.  --> basscally reminder.
        
        rev = (rev * 10) + rem;          // it's convert (10 * Privious-rev) + new rem

        number = Math.floor(number / 10);           // remove last digit of number
    }
    // if ( rev === nCopy){                     // this both statement are equal line 18 or line 25
    //     return true;
    // }
    // else {               
    //     return false;
    // }

    return rev === nCopy;           // this condition is ckeck condition if condition is true than return true otherwise return false
};

let number = 1221;

const result = palindrome(number);
console.log(result);