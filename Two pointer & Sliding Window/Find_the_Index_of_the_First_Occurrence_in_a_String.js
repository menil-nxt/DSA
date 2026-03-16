// Find the Index of the First Occurrence in a String

// Built-in Approch
function strStr(haystack, needle){
    return haystack.indexOf(needle);
}

// Optimized Approlch (Sliding Window Approch)

function strStr(haystack, needle){
    let n = haystack.length;
    let m = needle.length;

    for(let i = 0; i <= n - m; i++){    // i run till (n = haystack.length - window size)
        let j = 0;
        // check needle === haystack
        for(j = 0; j < m; j++){     // j loop check till needle.length
            if(haystack[i+j] !== needle[j]){        // if haystack[char] != needle[char] -> break
                break;
            }
        }
        if(j === m){        // if j loop reach at needle.length than just return i(starting point of same string in haystack)
            return i;
        }
    }
    return -1;      // otherwise return -1; if you dont get into haystack whole string 
}