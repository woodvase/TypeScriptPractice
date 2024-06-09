function maxProfit (prices: number[]): number {
    if (prices.length === 0) return 0;
    let ans = 0;
    const stack = [];
    stack.push(prices[0])
    for (const p of prices) {
        const top = stack[stack.length - 1]
        if (p < top) {
            ans += top - stack[0];
            while (stack.length) {
                stack.pop()
            }
        }
        stack.push(p)
    }

    if (stack.length > 0) {
        ans += stack[stack.length - 1] - stack[0]
    }
    return ans
};

console.log(maxProfit([7, 6, 4, 3, 1]))