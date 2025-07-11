/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const res = [];

    const backtrack = (path, remaining) => {
        if (!remaining.length) {
            res.push(path);
            return;
        }

        for (let i = 0; i < remaining.length; i++) {
            backtrack(
                [...path, remaining[i]],
                [...remaining.slice(0, i), ...remaining.slice(i + 1)]
            );
        }
    };

    backtrack([], nums);
    return res;
};
