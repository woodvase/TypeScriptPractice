/**
 *  Input: graph = [[1,2],[3],[3],[]]
    Output: [[0,1,3],[0,2,3]]
    Explanation: There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.
 * @param graph 
 */
function allPathsSourceTarget (graph: number[][]): number[][] {
    function helper (graph: number[][], nodeToCheck: number, ans: number[][], path: number[]) {
        if (graph.length === 0) return;
        const nodes = graph[nodeToCheck];
        for (const connected of nodes) {
            if (connected === graph.length - 1) {
                ans.push([...path, connected])
            } else {
                helper(graph, connected, ans, [...path, connected])
            }
        }

    }

    const ans: number[][] = [];
    helper(graph, 0, ans, [0])
    return ans;
};

const r = allPathsSourceTarget([[4,3,1],[3,2,4],[3],[4],[]])
for (const s of r) { 
    console.log(s)
}