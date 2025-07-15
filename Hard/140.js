// 140. Word Break II
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    const memo = new Map();
    const wordSet = new Set(wordDict);

    function dfs(start) {
        if (memo.has(start)) return memo.get(start);
        const res = [];
        if (start === s.length) {
            // Reached end: one empty sentence
            res.push('');
        }

        for (const word of wordSet) {
            if (s.startsWith(word, start)) {
                const tails = dfs(start + word.length);
                for (const tail of tails) {
                    res.push(tail ? word + ' ' + tail : word);
                }
            }
        }

        memo.set(start, res);
        return res;
    }

    return dfs(0);
};
