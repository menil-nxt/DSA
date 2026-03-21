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



// K M P (Knuth Morris Pratt) Algoritham
function strStr(haystack,needle){
    let n = haystack.length;
    let m = needle.length;


    // Claculating LPS (length of longest proper prefix that is also a proper suffix) of needle 
    let lps = [0];
    let i = 0;
    let j = 1;
    while(j < m){       // loop run till needle.length
        if(needle[i] === needle[j]){        // loop through needle till length of needle check prefix and suffix   
            lps[j] = i + 1;                    // if you find than lps[j] (curr) -> i + 1;
            i++;                               // than both pointer move ahead
            j++;    
        }
        else{
            if(i == 0){         // both are not equal needle[i] != needle[j] && -> needle[i] == 0 than and than if part is executade
                lps[j] = 0;         // for that (curr)lps[j] -> mark to 0
                j++;            // and j pointer move ahead
            }
            else{
                i = lps[i-1];       // otherwise needle[i] != 0 -> i pointer move to lps[i - 1] position(index) 
            }   
        }
    }
    
    // check for the string with haystack
    i = j = 0;     // inataily both pointer at 0 index
    while(i < n){       // loop run till haystack.length
        if(haystack[i] === needle[j]){      // if both char haystack[i] === needle[j] than both pointer move ahead
            i++;
            j++;
        }
        else{       // if both haystack[i] != needle[j] not equal than  
            if(j == 0){             // check j == 0 -> i move ahead
                i++;
            }
            else{       //other wise j != 0 than j pointer move to -> lps[j - 1] position(index)
                j = lps[j-1];
            }
        }
        if(j === m){        // if j pointer reach at length of needel than wahole needle is complately match than       
            return i - m;       // return i - m(length of needle)    from this point in haystack needle is match
        }
    }
    return -1;  // otherwise return -1
}