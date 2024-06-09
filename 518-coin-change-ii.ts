function change (amount: number, coins: number[]): number {
    const dp = new Array(amount + 1).fill(0);
    dp[0] = 1;
    for (const c of coins) {
        for (let j = c; j <= amount; j++) {
            dp[j] += dp[j - c];
        }
        console.log(dp)
    }

    return dp[amount]
};

console.log(change(5, [1, 2, 5]))