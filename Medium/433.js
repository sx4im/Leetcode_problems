// 433. Minimum Genetic Mutation
/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(startGene, endGene, bank) {
  const set = new Set(bank);
  if (!set.has(endGene)) return -1;

  const queue = [[startGene, 0]];
  const seen = new Set([startGene]);

  while (queue.length) {
    const [gene, steps] = queue.shift();
    if (gene === endGene) return steps;

    for (let i = 0; i < 8; i++) {
      for (const char of ['A', 'C', 'G', 'T']) {
        if (char !== gene[i]) {
          const next = gene.slice(0, i) + char + gene.slice(i + 1);
          if (set.has(next) && !seen.has(next)) {
            queue.push([next, steps + 1]);
            seen.add(next);
          }
        }
      }
    }
  }

  return -1;
};