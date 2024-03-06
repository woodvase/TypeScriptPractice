function removeElement(nums: number[], val: number): number {
    let s = 0;
    let e = nums.length - 1;
    while (s <= e) { 
        if (nums[s] == val) {
            if(nums[e] != val) {
                const tmp = nums[e];
                nums[e] = nums[s];
                nums[s] = tmp;
            }
            e -= 1;
        } else { 
            s += 1;
        }
    }

    return s;
};

console.log(removeElement([3, 2, 2, 3], 3))
console.log(removeElement([0,1,2,2,3,0,4,2], 2))