// 168. Excel Sheet Column Title
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let res = '';
    while (columnNumber > 0) {
        columnNumber--; // adjust for 1-indexing
        res = String.fromCharCode(columnNumber % 26 + 65) + res;
        columnNumber = Math.floor(columnNumber / 26);
    }
    return res;
};
