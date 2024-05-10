/**
 *  Input: n = 7, roads = [[0,6,7],[0,1,2],[1,2,3],[1,3,3],[6,3,3],[3,5,1],[6,5,1],[2,5,1],[0,4,5],[4,6,2]]
    Output: 4
    Explanation: The shortest amount of time it takes to go from intersection 0 to intersection 6 is 7 minutes.
    The four ways to get there in 7 minutes are:
    - 0 ➝ 6
    - 0 ➝ 4 ➝ 6
    - 0 ➝ 1 ➝ 2 ➝ 5 ➝ 6
    - 0 ➝ 1 ➝ 3 ➝ 5 ➝ 6
 */

import { PiorityQueue } from "./PriorityQueue";

function countPaths (n: number, roads: number[][]): number {
    const adjcentList = new Map<number, number[][]>();
    const dist = new Array(n).fill(Number.MAX_VALUE)
    const ways = new Array(n).fill(0)
    const prev = new Array(n).fill(0)
    for (const t of dist.keys()) {
        adjcentList.set(t, [])
    }

    const pq = new PiorityQueue<number>()
    for (const r of roads) {
        adjcentList.get(r[0])!.push([r[2], r[1]])
        adjcentList.get(r[1])!.push([r[2], r[0]])
    }

    pq.insert({ key: 0, value: 0 })
    dist[0] = 0;
    ways[0] = 1;
    while (!pq.isEmpty()) {
        const n = pq.pop()!
        console.log(`node: ${n.value}`)
        for (const [distance, node] of adjcentList.get(n.value)!) {
            if (dist[n.value] + distance < dist[node]) {
                dist[node] = dist[n.value] + distance;
                ways[node] = ways[n.value];
                prev[node] = n.value;
                pq.insert({ key: dist[node], value: node })
            } else if (dist[n.value] + distance === dist[node]) {
                ways[node] = ways[node] + ways[n.value]
            }
        }
    }
    console.log(dist)
    console.log(ways)
    console.log(prev)
    return ways[n - 1];
};


console.log(countPaths(7, [[0, 6, 7], [0, 1, 2], [1, 2, 3], [1, 3, 3], [6, 3, 3], [3, 5, 1], [6, 5, 1], [2, 5, 1], [0, 4, 5], [4, 6, 2]]))
console.log(countPaths(2, [[1, 0, 10]]))