function longestCommonSubsequence (text1: string, text2: string): number {
    const dp = new Array(text1.length + 1).fill(0).map(() => new Array(text2.length + 1).fill(0))
    for (let i = 1; i <= text1.length; i++) {
        for (let j = 1; j <= text2.length; j++) {
            if (text2[j - 1] === text1[i - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1]
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }

    for (let i = 0; i < dp.length; i++) {
        console.log(dp[i])
    }
    return dp[text1.length][text2.length]
};

console.log(longestCommonSubsequence("abcba", "abcbcba"))