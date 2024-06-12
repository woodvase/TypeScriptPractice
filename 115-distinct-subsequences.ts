/**
 * Example 1:

Input: s = "rabbbit", t = "rabbit"
Output: 3
Explanation:
As shown below, there are 3 ways you can generate "rabbit" from s.
rabbbit
rabbbit
rabbbit
 * @param s 
 * @param t 
 */
function numDistinct (s: string, t: string): number {
    const dp = new Array(t.length + 1).fill(0).map(() => new Array(s.length + 1).fill(0))
    dp[0].fill(1)
    for (let i = 1; i <= t.length; i++) {
        for (let j = i; j <= s.length; j++) {
            if (t[i - 1] === s[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + dp[i][j - 1]
            } else {
                dp[i][j] = dp[i][j - 1]
            }
        }
    }

    for (let i = 0; i < dp.length; i++) {
        console.log(dp[i])
    }
    return dp[t.length][s.length]
};

console.log(numDistinct("rabbbit", "rabbit"))