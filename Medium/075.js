// 75. Sort Colors
var sortColors = function(nums) {
    let low = 0, mid = 0, high = nums.length - 1;

    while (mid <= high) {
        if (nums[mid] === 0) {
            // Swap current mid with low pointer
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        } else if (nums[mid] === 1) {
            // Move mid ahead if it's already in correct place
            mid++;
        } else { // nums[mid] === 2
            // Swap current mid with high pointer
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }
};
