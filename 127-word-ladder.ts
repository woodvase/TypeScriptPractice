/**
 * 
Example 1:

Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
Output: 5
Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.
Example 2:

Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
Output: 0
Explanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.

 * @param beginWord 
 * @param endWord 
 * @param wordList 
 */
function ladderLength (beginWord: string, endWord: string, wordList: string[]): number {
    if (!wordList.includes(endWord)) {
        return 0;
    }
    const wordListSet = new Set(wordList)
    const aChar = "a".charCodeAt(0)
    const chars = [...Array(26).keys()].map((i) => String.fromCharCode(aChar + i))
    const q: string[] = [];
    const matched = new Map<string, number>();
    matched.set(beginWord, 1);
    q.push(beginWord)
    while (q.length > 0) {
        const a = q.shift()
        if (!a) {
            break;
        }
        const path = matched.get(a)!
        for (let i = 0; i < a.length; i++) {
            for (const c of chars) {
                if (c != a[i]) {
                    const na = [...a]
                    na[i] = c;
                    const newW = na.join('')
                    if (newW === endWord) {
                        return path + 1;
                    }
                    if (!matched.get(newW) && wordListSet.has(newW)) {
                        q.push(newW)
                        matched.set(newW, path + 1)
                    }
                }
            }
        }
    }

    return 0
};

console.log(ladderLength("a", "c", ["a", "b", "c"]))