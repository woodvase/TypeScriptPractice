/**
 * Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1].
In this case, 6 units of rain water (blue section) are being trapped.
 * @param height 
 */
function trap (height: number[]): number {
    const stack: number[] = [];
    let rain = 0;
    stack.push(0);
    for (const [index, val] of height.entries()) {
        if (index === 0) continue;
        while (stack.length > 0 && val > height[stack[stack.length - 1]]) {
            const bottom = stack.pop()!;
            if (stack.length > 0) {
                const left = stack[stack.length - 1]
                const h = Math.min(val, height[left]) - height[bottom];
                const w = index - left - 1;
                rain += h * w;
            }
        }

        stack.push(index);
    }
    return rain;
};

console.log(trap([4,2,0,3,2,5]))