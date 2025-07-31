// 517. Super Washing Machines
/**
 * @param {number[]} machines
 * @return {number}
 */
var findMinMoves = function(machines) {
  const total = machines.reduce((sum, num) => sum + num, 0);
  const target = total / machines.length;
  if (total % machines.length !== 0) return -1;

  let result = 0;
  for (let i = 0, balance = 0; i < machines.length; i++) {
    balance += machines[i] - target;
    result = Math.max(result, Math.abs(balance), machines[i] - target);
  }
  return result;
};