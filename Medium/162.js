// 162. Find Peak Element
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let left = 0, right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[mid + 1]) {
            // Peak is on the left side (or mid itself)
            right = mid;
        } else {
            // Peak is on the right side
            left = mid + 1;
        }
    }

    return left; // or right — both will be at peak
};
