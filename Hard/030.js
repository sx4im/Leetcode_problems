// 30. Substring with Concatenation of All Words
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    if (words.length === 0) return [];

    const wordLength = words[0].length;
    const totalLength = wordLength * words.length;
    const wordCount = {};
    const result = [];

    for (let word of words) {
        wordCount[word] = (wordCount[word] || 0) + 1;
    }

    for (let i = 0; i <= s.length - totalLength; i++) {
        const seen = {};
        for (let j = 0; j < words.length; j++) {
            const wordIndex = i + j * wordLength;
            const word = s.substring(wordIndex, wordIndex + wordLength);

            if (!wordCount[word]) break;

            seen[word] = (seen[word] || 0) + 1;
            if (seen[word] > wordCount[word]) break;

            if (j === words.length - 1) result.push(i);
        }
    }

    return result;
};
