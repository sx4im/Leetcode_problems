// 352. Data Stream as Disjoint Intervals
var SummaryRanges = function() {
  this.list = [];
};

/**
 * @param {number} value
 * @return {void}
 */
SummaryRanges.prototype.addNum = function(value) {
  this.list[value] = true;
};

/**
 * @return {number[][]}
 */
SummaryRanges.prototype.getIntervals = function() {
  const result = [];

  for (let i = 0; i < this.list.length; i++) {
    if (this.list[i]) {
      let j = i;
      while (this.list[j]) {
        j++;
      }
      result.push([i, j - 1]);
      i = j;
    }
  }

  return result;
};