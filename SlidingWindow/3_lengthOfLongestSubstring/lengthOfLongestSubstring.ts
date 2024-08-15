export function lengthOfLongestSubstring(s: string): number {
    const map = new Map<string, number>()

    let count = 0
    let res = 0
    let flag = 0

    for (let i = 0; i < s.length; i++) {
        const word = s[i];
        if (map.has(word)) {
            let j = map.get(word) || 0
            if (j >= flag) {
                res = Math.max(res, i - flag)
                flag = j + 1
                count = i - j - 1
            }
        }
        map.set(word, i)
        count++
    }

    if (count > 0)
        res = Math.max(res, count)

    return res
};