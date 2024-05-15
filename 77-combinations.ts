function combine (n: number, k: number): number[][] {
    function helper (start: number, end: number, k: number, answer: number[][], conbination: number[]) {
        if (conbination.length === k) {
            answer.push([...conbination])
            return;
        }

        for (let i = start; i <= n; i++) {
            conbination.push(i)
            helper(i + 1, end, k, answer, conbination)
            conbination.pop();
        }
    }

    const ans: number[][] = [];
    const c: number[] = [];
    helper(1, n, k, ans, c)

    return ans;
};

console.log(combine(2, 1))