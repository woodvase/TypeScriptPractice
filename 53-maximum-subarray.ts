function maxSubArray (nums: number[]): number {
    if (nums.length === 0) return 0;
    const dp = new Array(nums.length).fill(Number.MIN_SAFE_INTEGER);
    dp[0] = nums[0]
    let ans = Math.max(Number.MIN_SAFE_INTEGER, dp[0]);
    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(nums[i], dp[i - 1] + nums[i])
        ans = Math.max(ans, dp[i])
    }
    return ans;
};

console.log(maxSubArray([-2]))