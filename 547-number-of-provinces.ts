import { UnionFind } from "./UnionFind";

function findCircleNum (isConnected: number[][]): number {
    const n = isConnected.length;
    const uf = new UnionFind(n);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (isConnected[i][j] === 1) {
                uf.union(i, j)
            }
        }
    }

    const res = new Set()
    for (const s of new Set(uf.disjointSet)) { 
        res.add(uf.find(s))
    }
    return res.size
};

console.log(findCircleNum([[1, 1, 1, 0, 1, 1, 1, 0, 0, 0], [1, 1, 0, 0, 0, 0, 0, 1, 0, 0], [1, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 1, 0, 0, 0, 1, 0], [1, 0, 0, 1, 1, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 1, 0, 1, 0], [0, 1, 0, 0, 0, 0, 0, 1, 0, 1], [0, 0, 0, 1, 0, 0, 1, 0, 1, 1], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1]]))