function pacificAtlantic (heights: number[][]): number[][] {
    const pos = [[-1, 0], [1, 0], [0, -1], [0, 1]]
    function dfs (heights: number[][], position: [number, number], state: boolean[][]) {
        const [x, y] = position
        if (state[x][y] === true) return;
        state[x][y] = true
        const neighbours = pos.map((p) => { return [p[0] + x, p[1] + y] }).filter(([nx, ny]) => nx >= 0 && nx < heights.length && ny >= 0 && ny < heights[0].length)
        for (const [i, j] of neighbours) {
            if (heights[i][j] >= heights[x][y]) {
                dfs(heights, [i, j], state)
            }
        }
    }

    const pacific = new Array(heights.length).fill(false).map(() => new Array(heights[0].length).fill(false))
    const atlantic = new Array(heights.length).fill(false).map(() => new Array(heights[0].length).fill(false))
    for (let c = 0; c < heights[0].length; c++) {
        dfs(heights, [0, c], pacific)
        dfs(heights, [heights.length - 1, c], atlantic)
    }

    for (let r = 0; r < heights.length; r++) {
        dfs(heights, [r, 0], pacific)
        dfs(heights, [r, heights[0].length - 1], atlantic)
    }

    const ans: [number, number][] = [];
    for (let i = 0; i < heights.length; i++) {
        for (let j = 0; j < heights[0].length; j++) {
            if (pacific[i][j] && atlantic[i][j]) {
                ans.push([i, j])
            }
        }
    }

    return ans;
}