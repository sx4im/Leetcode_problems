// 31. Next Permutation
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place.
 */
var nextPermutation = function(nums) {
    let i = nums.length - 2;

    // Find first decreasing element from the end
    while (i >= 0 && nums[i] >= nums[i + 1]) i--;

    if (i >= 0) {
        let j = nums.length - 1;
        while (nums[j] <= nums[i]) j--;
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    // Reverse the suffix
    let left = i + 1, right = nums.length - 1;
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
};
