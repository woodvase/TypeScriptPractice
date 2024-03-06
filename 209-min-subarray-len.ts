
/*
Example 1:

Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.
Example 2:

Input: target = 4, nums = [1,4,4]
Output: 1
Example 3:

Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0
*/
function minSubArrayLen (target: number, nums: number[]): number {
    let s = 0;
    let e = 0;
    let minLen = nums.length + 1;
    let curSum = 0
    while (e < nums.length) {
        curSum += nums[e];
        if (curSum > target) {
            while (curSum > target) { 
                curSum -= nums[s]
                s += 1
            }
            if (curSum === target) {
                minLen = Math.min(minLen, e - s + 1)
            }
        }
        e += 1;
    }

    if (minLen > nums.length) {
        minLen = 0
    }

    return minLen;
};

console.log(minSubArrayLen(11, [1,1,1,1,1,1,1,1]))
