/**
 * Input: n = 4
Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above
Example 2:

Input: n = 1
Output: [["Q"]]

 * @param n 
 */
function solveNQueens (n: number): string[][] {
    function helper (n: number, r: number, state: string[][], answer: string[][]) {
        if (r == n) {
            const solution: string[] = []
            for (let i = 0; i < n; i++) {
                solution.push(state[i].join(''))
            }
            answer.push(solution)
            return;
        }

        for (let i = 0; i < n; i++) {
            if (isValid(r, i, state)) {
                state[r][i] = "Q"
                helper(n, r + 1, state, answer)
                state[r][i] = "."
            }
        }
    }

    function isValid (row: number, col: number, state: string[][]) {
        for (let i = row - 1; i >= 0; i--) {
            if (state[i][col] === "Q") {
                return false;
            }
        }
 
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (state[i][j] === "Q") {
                return false;
            }
        }

        for (let i = row - 1, j = col - 1; i >= 0 && j < n; i--, j--) {
            if (state[i][j] === "Q") {
                return false;
            }
        }

        return true;
    }

    const ans: string[][] = [];
    const state: string[][] = new Array(n).fill(".").map(() => new Array(n).fill("."))
    helper(n, 0, state, ans)
    return ans
};

for (const x of solveNQueens(1)) {
    console.log(x)
}