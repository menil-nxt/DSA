// First Bad Version

// Linear Search -> time complexity => O(n)

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    // Linear Search
    for (let i = 1; i <= n; i++) {
      let ans = isBadVersion(i);
      if (ans === true) {
        return i;
        break;
      }
    }
  };
};

// Binary Search -> O(log n)

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let l = 1;
    let r = n;

    while (l < r) {
      // this time only (l < r) -> not (l <= r)
      let mid = l + Math.floor((r - l) / 2);

      if (!isBadVersion(mid)) {
        // good virsion
        l = mid + 1;
      } else {
        // Bad virsion
        r = mid; // mid also included in searching space
      }
    }
    return r; // always r is bad virsion so return it.
  };
};
