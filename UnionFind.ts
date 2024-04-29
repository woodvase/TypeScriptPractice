export class UnionFind {
    private n = 0;
    public disjointSet: number[] = [];
    constructor(n: number) {
        this.n = n;
        for (let i = 0; i < n; ++i) {
            this.disjointSet[i] = i;
        }
    }

    public find (i: number): number {
        const p = this.disjointSet[i];
        if (p === i) return p;
        return this.disjointSet[i] = this.find(p);
    }

    public union (i: number, j: number) {
        const pi = this.find(i);
        const pj = this.find(j);
        if (pi !== pj) {
            this.disjointSet[pj] = pi;
        }
    }
}