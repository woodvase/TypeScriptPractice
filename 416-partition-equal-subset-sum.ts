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
    const dpState = new Array(target + 1).fill(0)

    for (let i = 0; i < nums.length; i++) {
        for (let t = target; t >= nums[i]; t--) {
            dpState[t] = Math.max(dpState[t], dpState[t - nums[i]] + nums[i])
        }
    }

    console.log(dpState)

    return dpState[target] === target;
};

console.log(canPartition([1, 5, 11, 5]))