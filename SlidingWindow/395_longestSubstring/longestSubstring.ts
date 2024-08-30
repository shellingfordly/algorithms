export function longestSubstring(s: string, k: number): number {
    const getIndex = (w: string) => w.charCodeAt(0) - 'a'.charCodeAt(0)
    let res = 0

    for (let t = 1; t <= 26; t++) {
        let total = 0
        let less = 0
        let left = 0
        const cnt = Array(26).fill(0)

        for (let right = 0; right < s.length; right++) {
            let rightIndex = getIndex(s[right])
            cnt[rightIndex]++

            if (cnt[rightIndex] === 1) {
                total++
                less++
            }
            if (cnt[rightIndex] === k) {
                less--
            }

            while (total > t) {
                const leftIndex = getIndex(s[left])
                cnt[leftIndex]--

                if (cnt[leftIndex] === k - 1) {
                    less++
                }
                if (cnt[leftIndex] === 0) {
                    total--
                    less--
                }

                left++
            }

            if (less === 0) res = Math.max(res, right - left + 1)
        }
    }

    return res
}