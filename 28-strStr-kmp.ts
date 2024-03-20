function strStr (haystack: string, needle: string): number {
    const next = getNext(needle)
    let j = -1;

    for (let i = 0; i < haystack.length; i++) {
        while (j >= 0 && haystack[i] !== needle[j + 1]) {
            j = next[j]
        }
        if (haystack[i] === needle[j + 1]) {
            j += 1
        }

        if (j === needle.length - 1) {
            return i - needle.length + 1
        }
    }
    return -1;
};

/**
 * aabaaf
 * @param needle 
 * @returns 
 */
function getNext (needle: string): number[] {
    let j = -1
    let ret: number[] = []
    let s = needle.length
    ret[0] = j
    for (let i = 1; i < s; i++) {
        while (j >= 0 && needle[j + 1] !== needle[i]) {
            j = ret[j]
        }

        if (needle[j + 1] === needle[i]) {
            j += 1;
        }

        ret[i] = j;
    }

    return ret;
}

console.log(strStr("aabaa", "ba"))
