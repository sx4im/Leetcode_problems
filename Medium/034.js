// 34. Find First and Last Position of Element in Sorted Array
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const findIndex = (isFirst) => {
        let left = 0, right = nums.length - 1, index = -1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                index = mid;
                if (isFirst) right = mid - 1;
                else left = mid + 1;
            } else if (nums[mid] < target) left = mid + 1;
            else right = mid - 1;
        }

        return index;
    };

    return [findIndex(true), findIndex(false)];
};
