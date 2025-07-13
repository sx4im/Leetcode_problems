// 93. Restore IP Addresses
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    const result = [];

    function backtrack(start, path) {
        if (path.length === 4 && start === s.length) {
            result.push(path.join('.'));
            return;
        }

        if (path.length >= 4) return;

        for (let len = 1; len <= 3; len++) {
            if (start + len > s.length) break;
            const part = s.substring(start, start + len);
            if ((part.length > 1 && part[0] === '0') || parseInt(part) > 255) continue;

            path.push(part);
            backtrack(start + len, path);
            path.pop();
        }
    }

    backtrack(0, []);
    return result;
};
