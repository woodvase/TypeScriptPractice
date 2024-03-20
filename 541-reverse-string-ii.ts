/**
 * Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

If there are fewer than k characters left, reverse all of them. 
If there are less than 2k but greater than or equal to k characters,
then reverse the first k characters and leave the other as original.

 * Example 1:
Input: s = "abcdefg", k = 2
Output: "bacdfeg"
Example 2:

Input: s = "abcd", k = 2
Output: "bacd"
 * 
 * @param s 
 * @param k 
 */
function reverseStr (s: string, k: number): string {
    function reverse (s: string): string { 
        let r = ""
        for (let i = s.length - 1; i >= 0; i --)
            r += s[i]

        return r;
    }
    
    let r: string = ""
    const fullSegments = Math.floor(s.length / (2 * k))
    const lastSegmentLength = s.length % (2 * k)

    for (let i = 0; i < fullSegments; i++) {
        let start = i * (2 * k)
        let end = start + k;
        r += reverse(s.substring(start, end))
       
        start = i * (2 * k) + k;
        end = start + k;
        r += s.substring(start, end);
    }

    if (lastSegmentLength < k) {
        let start = fullSegments * 2 * k
        r += reverse(s.substring(start))
    } else { 
        let start = fullSegments * 2 * k
        let end = start + k;
        r += reverse(s.substring(start, end))
        r += s.substring(end)
    }

    return r
};

console.log(reverseStr("abc", 4))