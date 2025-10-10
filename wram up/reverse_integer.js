// Reverse integer  Ex : 231 -> 132.


function reverse(x){
    let xCopy = x;
    x = Math.abs(x); 

    let rev = 0;
    while (x > 0){
        let rem = x % 10;
        rev = (10 * rev) + rem;
        x = Math.floor(x / 10);
    }

    let limit = Math.pow(2,31);                 // 2 power 331 ==> 2147483648 you can not engter value less than 2 power 31 or more than 2 power 31.
    if (rev < -limit || rev > limit) return 0;

    return (xCopy < 0) ? -rev : rev;
}

// let x = 120;
// let result = reverse(x);
// console.log(result);



var reverse = function (x) {
    let num = Math.abs(x); // work with positive value
    let result = 0;

    while (num > 0) {
        const lastDigit = num % 10;
        result = result * 10 + lastDigit; // build reversed number      
        num = Math.floor(num / 10);
    }

    // restore sign
    if (x < 0) {
        result = -result;
    }

        // 32-bit signed integer range check
    if (result < -(2 ** 31) || result > (2 ** 31 - 1)) {
        return 0;
    }


    return result;
};


let x = 12334;
let result = reverse(x)
console.log(result);