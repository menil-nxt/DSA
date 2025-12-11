// Reverse String II(2)

function reverseStr(s, k) {
    // 1. convert string into array
    s = s.split("");    // -> output :- ['a','b','c'......]

    // move ahead each time by (2k)

    for(let x = 0; x < s.length; x = x + (2 * k)){
        // x = x + (2 * k) -> with this every time is increase by 2k (ex = 0 -> 4 -> 8 -> 12) (k = 2) (2k = 2 * 2 => 4)
        // x = 4 + (2 * 2) => 8 increase by every time x 
        // reverse string logic
        let n = k; 
        let mid = Math.floor(n/2);  // it's (k/2)
        for(let i = 0; i < mid; i++){
            // swapping value -> for k with k/2
            let temp = s[x + i];    // for each new jumped x we have to swap value -> x is allready jumped by 2k 
            s[x + i] = s[x + n - i - 1];    
            s[x + n - i - 1] = temp;
        }
    }

    // array to string  
    return s.join("");
};