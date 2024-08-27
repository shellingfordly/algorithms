export function longestValidSubstring(word: string, forbidden: string[]): number {
    let left = 0
    let res = 0
    const fb = new Set<string>()
    for (let i = 0; i < forbidden.length; i++) {
        fb.add(forbidden[i])
    }

    for (let right = 0; right < word.length; right++) {
        for (let i = right; i >= left && i > right - 10; i--) {
            if (fb.has(word.slice(i, right + 1))) {
                left = i + 1
            }
        }

        res = Math.max(res, right - left + 1)
    }
    return res
};