// 128. Longest Consecutive Sequence
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const numSet = new Set(nums);
    let longest = 0;

    for (let num of numSet) {
        if (!numSet.has(num - 1)) { // Start of sequence
            let currentNum = num;
            let length = 1;

            while (numSet.has(currentNum + 1)) {
                currentNum++;
                length++;
            }

            longest = Math.max(longest, length);
        }
    }

    return longest;
};
