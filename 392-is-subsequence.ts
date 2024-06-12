function isSubsequence (s: string, t: string): boolean {
    const dp = new Array(s.length + 1).fill(false).map(() => new Array(t.length + 1).fill(false))
    dp[0].fill(true)
    for (let i = 1; i <= s.length; i++) {
        for (let j = 1; j <= t.length; j++) {
            if (s[i - 1] === t[j - 1]) {
                if (dp[i - 1][j - 1]) {
                    dp[i][j] = true;
                }
            } else {
                dp[i][j] = dp[i][j - 1]
            }
        }
    }


    for (let i = 0; i < dp.length; i++) {
        console.log(dp[i])
    }
    return dp[s.length][t.length]
};

console.log(isSubsequence("b", "abc"))