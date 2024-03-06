function dailyTemperatures(temperatures: number[]): number[] {
    const stack: number[] = []
    const result: number[] = new Array(temperatures.length).fill(0)
    for (const t of temperatures.entries()) { 
        const [index, val] = t;
        let top = temperatures[stack.slice(-1)[0]]
        while (top !== undefined && val > top) {
            const pre = stack.pop()
            const preIndex = pre ?? 0
            result[preIndex] = index - preIndex;
            top = temperatures[stack.slice(-1)[0]]
        }
        stack.push(index)
    }
    
    return result;
};


/*
输入: temperatures = [73,74,75,71,69,72,76,73]
输出: [1,1,4,2,1,1,0,0]
*/
console.log(dailyTemperatures([30,60,90]))