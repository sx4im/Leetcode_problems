// 475. Heaters
/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {
  let result = 0;

  houses.sort((a, b) => a - b);
  heaters.sort((a, b) => a - b);
  for (let i = 0, j = 0; i < houses.length; i++) {
    while (j < heaters.length - 1 && houses[i] - heaters[j] > heaters[j + 1] - houses[i]) {
      j++;
    }
    result = Math.max(result, Math.abs(heaters[j] - houses[i]));
  }

  return result;
};