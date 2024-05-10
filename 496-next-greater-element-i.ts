function nextGreaterElement (nums1: number[], nums2: number[]): number[] {
    const m = new Map<number, number>();
    for (const [i, v] of nums1.entries()) {
        m.set(v, i)
    }

    const r = new Array(nums1.length).fill(-1)
    const s: number[] = [];
    s.push(nums2[0]);
    for (const n of nums2) {
        while (s.length > 0 && n > s[s.length - 1]) {
            const top = s.pop()!;
            const p = m.get(top)
            if (p !== undefined) {
                r[p] = n;
            }
        }
        s.push(n);
    }

    return r;
};

console.log(nextGreaterElement([1, 3, 5, 2, 4], [6, 5, 4, 3, 2, 1, 7]))