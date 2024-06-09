function rob (nums: number[]): number {
    if (nums.length <= 2) {
        return nums.reduce((m, n) => m = Math.max(m, n), nums[0])
    }

    const dp = new Array(nums.length).fill(0)
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0], nums[1])
    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2])
    }
    return dp[nums.length - 1];
};

console.log(rob([2, 9, 8]))