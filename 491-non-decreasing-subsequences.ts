/**
 * Example 1:

Input: nums = [4,6,7,7]
Output: [[4,6],[4,6,7],[4,6,7,7],[4,7],[4,7,7],[6,7],[6,7,7],[7,7]]
Example 2:

Input: nums = [4,4,3,2,1]
Output: [[4,4]]
 * @param nums 
 */
function findSubsequences (nums: number[]): number[][] {
    function helper (nums: number[], start: number, ans: number[][], path: number[]) {
        const used = new Set();
        if (path.length > 1) {
            ans.push([...path])
        }

        for (let i = start; i < nums.length; i++) {
            const n = nums[i]
            if (used.has(n) || (path.length > 0 && n < path[path.length - 1])) {
                continue;
            }
            path.push(n)
            used.add(n)
            helper(nums, i + 1, answer, path)
            path.pop()
        }

    }
    const answer: number[][] = []
    const p: number[] = [];
    helper(nums, 0, answer, p)
    return answer;
};

for (const x of findSubsequences([4, 6, 7, 7])) {
    console.log(x)
}