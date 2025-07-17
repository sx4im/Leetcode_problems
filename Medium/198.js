// 198. House Robber
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let prev1 = 0, prev2 = 0;

    for (let num of nums) {
        let temp = prev1;
        prev1 = Math.max(prev2 + num, prev1);
        prev2 = temp;
    }

    return prev1;
};
