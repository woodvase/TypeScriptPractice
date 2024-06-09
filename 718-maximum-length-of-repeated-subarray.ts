function findLength (nums1: number[], nums2: number[]): number {
    const dp = new Array(nums1.length).fill(0).map(() => new Array(nums2.length).fill(0));
    let ans = 0;
    if (nums1[0] === nums2[0]) {
        dp[0][0] = 1;
        ans = 1
    }

    for (let j = 1; j < nums2.length; j++) {
        if (nums2[j] === nums1[0]) {
            dp[0][j] = 1;
            ans = 1;
        }
    }

    for (let i = 1; i < nums1.length; i++) {
        if (nums2[0] === nums1[i]) {
            dp[i][0] = 1;
            ans = 1
        }
    }

    for (let i = 1; i < nums1.length; i++) {
        for (let j = 1; j < nums2.length; j++) {
            if (nums1[i] === nums2[j]) {
                dp[i][j] = 1 + dp[i - 1][j - 1]
                ans = Math.max(ans, dp[i][j])
            }
        }
    }

    return ans;
};

console.log(findLength([1, 2, 3, 2, 8], [5, 6, 1, 4, 7]))