function intersection (nums1: number[], nums2: number[]): number[] {
    const set1 = new Set<number>(nums1);
    const set2 = new Set<number>(nums2);
    const ret = []
    for (const n of set2) {
        if (set1.has(n)) {
            ret.push(n)
        }
    }

    return ret
};

console.log(intersection([4,9,5], [9,4,9,8,4]))