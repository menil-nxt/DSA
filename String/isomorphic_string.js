// Isomorphic strings

function isIsomorphic(s, t) {
  // two maps are created
  let mapStoT = {};
  let mapTtoS = {};

  for (let i = 0; i < s.length; i++) {
    // if any of are not present inside map than add it.
    if (!mapStoT[s[i]] && !mapTtoS[t[i]]) {
      mapStoT[s[i]] = t[i];
      mapTtoS[t[i]] = s[i];
    }
    // if mapTtoS of t[i] is not equal to s[i]
    else if (mapTtoS[t[i]] != s[i]) {
      return false;
    }
    //  if mapStoT of s[i] is not equal to t[i]
    else if (mapStoT[s[i]] != t[i]) {
      return false;
    }
  }
  return true;
}
