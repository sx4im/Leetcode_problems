// 502. IPO
/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function(k, w, profits, capital) {
    const n = profits.length;
    if (n === 0) {
        return w;
    }
    const proj = new Array(n);
    for (let i = 0; i < n; i++) {
        proj[i] = { c: capital[i], p: profits[i] };
    }
    proj.sort((a, b) => a.c - b.c);
    const pq = [];
    const push = val => {
        pq.push(val);
        let i = pq.length - 1;
        while (i > 0) {
            const p = Math.floor((i - 1) / 2);
            if (pq[p] >= pq[i]) break;
            [pq[i], pq[p]] = [pq[p], pq[i]];
            i = p;
        }
    };
    const pop = () => {
        if (pq.length === 0) return null;
        const top = pq[0];
        if (pq.length > 1) {
            pq[0] = pq.pop();
            let i = 0;
            while (true) {
                let l = 2 * i + 1, r = 2 * i + 2;
                let swap = null;
                if (l < pq.length && pq[l] > pq[i]) {
                    swap = l;
                }
                if (r < pq.length && ((swap === null && pq[r] > pq[i]) || (swap !== null && pq[r] > pq[l]))) {
                    swap = r;
                }
                if (swap === null) break;
                [pq[i], pq[swap]] = [pq[swap], pq[i]];
                i = swap;
            }
        } else {
            pq.pop();
        }
        return top;
    };
    let i = 0;
    for (let j = 0; j < k; j++) {
        while (i < n && proj[i].c <= w) {
            push(proj[i].p);
            i++;
        }
        if (pq.length === 0) {
            break;
        }
        w += pop();
        // console.log(w, pq.length);
    }
    return w;
};