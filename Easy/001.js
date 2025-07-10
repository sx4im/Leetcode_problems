/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map(); // Stores number → index

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i]; // Found the pair
        }
        map.set(nums[i], i); // Store the current number with its index
    }

    return []; // If no solution found (won't happen per problem guarantee)
};
