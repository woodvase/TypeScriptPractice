/**
 * F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
 * @param n 
 */
function fib (n: number): number {
    let n2 = 0;
    let n1 = 1;
    if (n === 0) return n2;
    if (n === 1) return n1;
    let i = 2;
    while (i <= n) {
        const fi = n1 + n2;
        n2 = n1;
        n1 = fi;
        i += 1;
    }

    return n1;
};

console.log(fib(0))
console.log(fib(1))
console.log(fib(5))