function loudAndRich (richer: number[][], quiet: number[]): number[] {
    const richerDegree: number[] = new Array(quiet.length).fill(0);
    for (const [r, p] of richer) {
        richerDegree[p] += 1;
    }

    const richerThanMe: Set<number>[] = [...quiet.keys()].map(i => new Set([i]))
    const ans = [];

    const q: number[] = [];
    for (const [i, v] of richerDegree.entries()) {
        if (v === 0) {
            q.push(i)
        }
    }

    while (q.length > 0) {
        const n = q.shift()!
        let qv = Number.MAX_SAFE_INTEGER
        for (const r of richerThanMe[n]) {
            if (quiet[r] < qv) {
                ans[n] = r;
                qv = quiet[r]
            }
        }
        for (const [r, p] of richer.filter(x => x[0] === n)) {
            richerThanMe[n].forEach(x => richerThanMe[p].add(x))
            richerDegree[p] -= 1;
            if (richerDegree[p] === 0) {
                q.push(p)
            }
        }
    }
    return ans;
};

console.log(loudAndRich([], [0]))