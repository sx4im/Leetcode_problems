// 278. First Bad Version
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
var solution = function(isBadVersion) {
    return function(n) {
        let left = 1, right = n;
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (isBadVersion(mid)) {
                right = mid; // check earlier versions
            } else {
                left = mid + 1; // move right
            }
        }
        return left;
    };
};
