// 39. Combination Sum
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result = [];

    const dfs = (i, current, total) => {
        if (total === target) {
            result.push([...current]);
            return;
        }
        if (i >= candidates.length || total > target) return;

        current.push(candidates[i]);
        dfs(i, current, total + candidates[i]);
        current.pop();

        dfs(i + 1, current, total);
    };

    dfs(0, [], 0);
    return result;
};
