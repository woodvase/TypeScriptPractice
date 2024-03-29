function maxSlidingWindow (nums: number[], k: number): number[] {
    const ret: number[] = []
    const helper: number[] = [];
    if (nums.length === 0 || k <= 0) return ret;
    helper[0] = nums[0]
    let i = 1;
    while (i < k) {
        while (helper.length > 0 && nums[i] > helper[helper.length - 1]) {
            helper.pop()
        }
        helper.push(nums[i])
        i += 1
    }
    
    ret.push(helper[0])

    for (let i = k; i < nums.length; i++) {
        if (nums[i - k] == helper[0]) {
            helper.shift()
        }
        while (helper.length > 0 && nums[i] > helper[helper.length - 1]) {
            helper.pop()
        }

        helper.push(nums[i])
        ret.push(helper[0])
    }

    return ret;
};

console.log(maxSlidingWindow([1,3,1,2,0,5], 3))