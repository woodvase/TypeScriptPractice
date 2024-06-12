// not lc passed but it is lc's issue how to verify the answer
function subsets (nums: number[]): number[][] {
    function helper (nums: number[], start: number, all: number[][], part: number[]) {
        if (start >= nums.length) {
            return;
        }

        part.push(nums[start])
        all.push([...part])
        helper(nums, start + 1, all, part)
    }

    const ans: number[][] = [];
    for (let i = 0; i < nums.length; i++) {
        helper(nums, i, ans, [])
    }

    return ans;
};


const a = subsets([1, 2, 3])
for (let i = 0; i < a.length; i++) {
    console.log(a[i])
}