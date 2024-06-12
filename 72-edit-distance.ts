function minDistance (word1: string, word2: string): number {
    if (word2.length < word1.length) {
        return minDistance(word2, word1);
    }

    const dp = new Array(word1.length + 1).fill(0).map(() => new Array(word2.length + 1).fill(word1.length * word2.length))
    for (let i = 0; i < dp[0].length; i++) {
        dp[0][i] = i;
    }
    for (let i = 0; i < dp.length; i++) {
        dp[i][0] = i;
    }

    for (let i = 1; i <= word1.length; i++) {
        for (let j = 1; j <= word2.length; j++) {
            if (word1[i - 1] == word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1]
            } else {
                dp[i][j] = 1 + Math.min(dp[i][j - 1], dp[i - 1][j - 1], dp[i - 1][j])
            }
        }
    }

    for (let i = 0; i < dp.length; i++) {
        console.log(dp[i])
    }
    return dp[word1.length][word2.length]
};


console.log(minDistance("sea", "eat"))
