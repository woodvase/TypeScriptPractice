function isHappy (n: number): boolean {
    function sumBit (n: number) {
        const l = []
        let c = n
        while (c > 0) {
            const b = c % 10

            l.push(b * b)
            c = Math.floor(c / 10)
        }

        const r = l.reduce((acc, next) => acc + next, 0)
        return r;
    }

    const set = new Set<number>()
    let bitSum = sumBit(n);
    while (bitSum != 1) {
        if (set.has(bitSum)) return false;
        set.add(bitSum)
        bitSum = sumBit(bitSum)
    }
    
    return true
};

console.log(isHappy(2))