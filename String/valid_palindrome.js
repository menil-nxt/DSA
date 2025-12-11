// Valid Palindrome

// Approch - 1 (with built in function)
function isPalindrome(s) {
  // convert all charecter into lowercase
  s = s.toLowerCase();
  // filteredString create and remove all non-alphanumerical charecter into it
  let filteredString = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i].match(/[a-z0-9]/i)) {
      // matches each charecter is present in side (a-z)or(0-9) if yes than only putn inside filteredString
      filteredString = filteredString + s[i];
    }
  }

  // reversing a string
  let rev = filteredString.split("").reverse().join("");

  // if(filteredString == rev){
  //     return true;
  // }
  // else{
  //     return false;
  // }
  return filteredString == rev;
}

// if you dont't want to calculate seprate reverse than

function isPalindrome(s) {
  s = s.toLowerCase();

  let filteredString = "";
  let rev = "";

  for (let i = 0; i < s.length; i++) {
    if (
      (s[i].charCodeAt() >= "a".charCodeAt() &&
        s[i].charCodeAt() <= "z".charCodeAt()) ||
      (s[i].charCodeAt() >= "a".charCodeAt() &&
        s[i].charCodeAt() <= "z".charCodeAt())
    )
      if (s[i].match(/[a-z0-9]/i)) {
        filteredString = filteredString + s[i]; // adding s[i] rigth end side

        rev = s[i] + rev; // adding s[i] left and side
      }
  }
  return filteredString == rev;
}
