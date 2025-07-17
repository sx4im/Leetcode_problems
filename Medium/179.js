// 179. Largest Number
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    const sorted = nums.map(String).sort((a, b) => (b + a).localeCompare(a + b));
    if (sorted[0] === "0") return "0";
    return sorted.join("");
};
