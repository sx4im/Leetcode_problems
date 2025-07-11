// 40. Combination Sum II
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let result = [];
    candidates.sort((a, b) => a - b);

    const dfs = (start, current, total) => {
        if (total === target) {
            result.push([...current]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            if (i > start && candidates[i] === candidates[i - 1]) continue;

            if (total + candidates[i] > target) break;

            current.push(candidates[i]);
            dfs(i + 1, current, total + candidates[i]);
            current.pop();
        }
    };

    dfs(0, [], 0);
    return result;
};
