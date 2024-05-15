function permute (nums: number[]): number[][] {
    function helper (nums: number[], usedPosition: number[], answer: number[][], path: number[]) {
        if (path.length === nums.length) {
            answer.push([...path])
            return;
        }

        const allPositions = nums.keys()
        for (const p of allPositions) {
            if (usedPosition.includes(p)) {
                continue;
            }
            path.push(nums[p])
            usedPosition.push(p)
            helper(nums, usedPosition, answer, path)
            path.pop()
            usedPosition.pop()
        }
    }

    const answer: number[][] = []
    const p: number[] = [];
    helper(nums, [], answer, p)
    return answer;
};

for (const x of permute([7])) {
    console.log(x)
}