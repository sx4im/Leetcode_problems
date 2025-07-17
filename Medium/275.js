// 275. H-Index II
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  let start = 0;

  for (let end = citations.length - 1; start <= end;) {
    const middle = Math.floor((start + end) / 2);
    if (citations.length - middle - 1 < citations[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }

  return citations.length - start;
};