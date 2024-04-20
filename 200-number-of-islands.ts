function numIslands (grid: string[][]): number {
    const rows = grid.length
    const cols = grid[0].length
    const state: Boolean[][] = new Array(rows).fill(false).map(() => new Array(cols).fill(false))

    let ans = 0;
    let pos = [[-1, 0], [1, 0], [0, -1], [0, 1]]
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === '1' && !state[i][j]) {
                const q: [number, number][] = []
                state[i][j] = true;
                q.push([i, j]);
                while (q.length > 0) {
                    const l = q.shift()
                    if (l) {
                        const newPositions = pos.map((p) => { return [l[0] + p[0], l[1] + p[1]] }).filter(([x, y]) => x >= 0 && x < rows && y >= 0 && y < cols)
                        for (const [x, y] of newPositions) {
                            if (grid[x][y] === '1' && !state[x][y]) {
                                state[x][y] = true
                                q.push([x, y])
                            }
                        }
                    }
                }
                ans += 1;
            }
        }
    }
    return ans;
};

console.log(numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
]))