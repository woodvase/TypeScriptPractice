/**
 * Example 1:

Input: s = "25525511135"
Output: ["255.255.11.135","255.255.111.35"]
Example 2:

Input: s = "0000"
Output: ["0.0.0.0"]
Example 3:

Input: s = "101023"
Output: ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
 * @param s 
 */
function restoreIpAddresses (s: string): string[] {
    const ans: string[] = []
    const parts: string[] = []
    const l: number[] = [1, 2, 3]
    function helper (s: string, start: number, answer: string[], ipParts: string[]) {
        if (ipParts.length == 4 && start < s.length) {
            return;
        }

        if (ipParts.length < 4 && start >= s.length) {
            return;
        }

        if (ipParts.length == 4 && start >= s.length) {
            answer.push(ipParts.join('.'))
            return;
        }

        const subStrs: string[] = [];
        for (const x of l) {
            if ((start + x) <= s.length) {
                subStrs.push(s.slice(start, start + x))
            }
        }
        for (const p of subStrs) {
            if (p.length > 1 && p[0] === '0') {
                continue;
            }
            if (Number(p) > 255 || Number(p) < 0) {
                continue;
            }
            ipParts.push(p);
            helper(s, start + p.length, answer, ipParts);
            ipParts.pop();
        }
    }

    helper(s, 0, ans, parts)

    return ans;
};

console.log(restoreIpAddresses("101023"))