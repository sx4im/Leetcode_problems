// 149. Max Points on a Line
/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    const n = points.length;
    if (n < 3) return n;

    // Helper to compute GCD
    const gcd = (a, b) => {
        if (b === 0) return a;
        return gcd(b, a % b);
    };

    let result = 0;

    for (let i = 0; i < n; i++) {
        const [x1, y1] = points[i];
        const slopeCount = new Map();
        let duplicates = 0;
        let localMax = 0;

        for (let j = i + 1; j < n; j++) {
            const [x2, y2] = points[j];
            let dx = x2 - x1;
            let dy = y2 - y1;

            if (dx === 0 && dy === 0) {
                // same point
                duplicates++;
                continue;
            }

            // Normalize direction by GCD, and fix sign
            const g = gcd(Math.abs(dx), Math.abs(dy));
            dx /= g;
            dy /= g;
            // Ensure unique representation: make dx positive,
            // or if dx==0 (vertical), ensure dy==1
            if (dx < 0) {
                dx = -dx;
                dy = -dy;
            } else if (dx === 0) {
                // vertical line
                dy = 1;
            }

            const key = dy + '/' + dx;
            const count = (slopeCount.get(key) || 0) + 1;
            slopeCount.set(key, count);
            localMax = Math.max(localMax, count);
        }

        // +1 for the anchor point, +duplicates
        result = Math.max(result, localMax + duplicates + 1);
    }

    return result;
};
