export function longestSemiRepetitiveSubstring(s: string): number {
    let res = 0
    let start = 0
    const arr: number[] = []

    for (let i = 1; i < s.length; i++) {
        if (s[i] == s[i - 1]) {
            arr.push(i)
        }
        if (arr.length == 2) {
            res = Math.max(res, i - start)
            start = arr.shift() || 0
        }
    }

    if (arr.length <= 1) res = Math.max(res, s.length - start)

    return res
};