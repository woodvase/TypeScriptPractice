function coinChange (coins: number[], amount: number): number {
    const dp = new Array(amount + 1).fill(Number.MAX_SAFE_INTEGER);
    dp[0] = 0;
    for (const c of coins) {
        for (let a = c; a <= amount; a++) {
            dp[a] = Math.min(dp[a], dp[a - c] + 1);
        }
    }

    if (dp[amount] === Number.MAX_SAFE_INTEGER) {
        return -1;
    }

    return dp[amount]
};

console.log(coinChange([1, 2, 5], 11))