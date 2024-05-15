function letterCombinations (digits: string): string[] {
    const keyMap = new Map<string, string[]>([
        ['2', ['a', 'b', 'c']],
        ['3', ['d', 'e', 'f']],
        ['4', ['g', 'h', 'i']],
        ['5', ['j', 'k', 'l']],
        ['6', ['m', 'n', 'o']],
        ['7', ['p', 'q', 'r', 's']],
        ['8', ['t', 'u', 'v']],
        ['9', ['w', 'x', 'y', 'z']
        ]])

    const ans: string[] = []
    const c: string[] = []
    function helper (digits: string, start: number, answer: string[], combine: string[]) {
        if (start >= digits.length) {
            if (combine.length) {
                answer.push(combine.join(''))
            }
            return;
        }

        const chars = keyMap.get(digits[start])
        if (chars) {
            for (const c of chars) {
                combine.push(c)
                helper(digits, start + 1, answer, combine)
                combine.pop()
            }
        }
    }

    helper(digits, 0, ans, c);
    return ans
};

console.log(letterCombinations(""))