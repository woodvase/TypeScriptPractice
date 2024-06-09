function findTargetSumWays (nums: number[], target: number): number {
    const total = nums.reduce((s, n) => s + n, 0);
    if (target < total * -1 || target > total) {
        return 0
    }

    function index (i: number) {
        return i - -1 * total;
    }

    function value (r: number, i: number) {
        if (i < -1 * total || i > total) {
            return 0;
        }

        return ways[r][index(i)]
    }

    const ways = new Array(nums.length).fill(0).map(() => new Array(2 * total + 1).fill(0))
    ways[0][index(nums[0])] += 1;
    ways[0][index(-1 * nums[0])] += 1;

    for (let i = 1; i < nums.length; i++) {
        for (let t = total; t >= -1 * total; t--) {
            const way1 = value(i - 1, t + nums[i])
            const way2 = value(i - 1, t - nums[i])
            ways[i][index(t)] = way1 + way2;
        }
    }

    return ways[nums.length - 1][index(target)]
};



console.log(findTargetSumWays([0, 0, 1], 1))