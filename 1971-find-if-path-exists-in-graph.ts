import { UnionFind } from "./UnionFind";

function validPath (n: number, edges: number[][], source: number, destination: number): boolean {
    const uf = new UnionFind(n);
    for (const [i, j] of edges) {
        uf.union(i, j)
    }

    console.log(uf.disjointSet)
    console.log(uf.find(7))
    console.log(uf.find(5))
    return uf.find(source) === uf.find(destination)
};

console.log(validPath(10, [[0,7],[0,8],[6,1],[2,0],[0,4],[5,8],[4,7],[1,3],[3,5],[6,5]], 7, 5))