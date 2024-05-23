/**
 * 
 * Example 1:

Input: nums = [1,5,11,5]
Output: true
Explanation: The array can be partitioned as [1, 5, 5] and [11].
Example 2:

Input: nums = [1,2,3,5]
Output: false
Explanation: The array cannot be partitioned into equal sum subsets.

 * @param nums 
 */
function canPartition (nums: number[]): boolean {
    const sum = nums.reduce((s, n) => s + n, 0)
    if (sum % 2 !== 0) {
        return false;
    }

    const target = Math.floor(sum / 2)
    const aa = new Array(nums.length).fill(0).map(x => new Array(target + 1).fill(nums[0]))
    for (let i = 0; i < nums.length; i++) {
        aa[i][0] = 0;
    }

    for (let i = 1; i < nums.length; i++) {
        for (let t = 1; t <= target; t++) {
            if (t >= nums[i]) {
                aa[i][t] = Math.max(aa[i - 1][t], aa[i - 1][t - nums[i]] + nums[i])
            } else {
                aa[i][t] = aa[i - 1][t]
            }
        }
    }

    for (let i = 0; i < nums.length; i++) {
        console.log(aa[i])
    }

    for (let i = 0; i < nums.length; i++) {
        if (aa[i][target] === target) {
            return true
        }
    }

    return false;
};

console.log(canPartition([1, 5, 11, 5]))