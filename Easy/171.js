// 171. Excel Sheet Column Number
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let result = 0;
    for (let i = 0; i < columnTitle.length; i++) {
        let charCode = columnTitle.charCodeAt(i) - 64; // 'A' = 65
        result = result * 26 + charCode;
    }
    return result;
};
