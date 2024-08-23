export function takeCharacters(s: string, k: number): number {
    if (k == 0) return 0

    const len = s.length
    let map: Record<string, number> = { a: 0, b: 0, c: 0 }
    let res = Infinity
    let left = len - 3 * k
    if (left < 0) return -1
    // 满足条件
    const isTrue = () => map.a >= k && map.b >= k && k && map.c >= k
    // 最小
    const isMin = () => res == 3 * k

    for (let i = 0; i < len; i++) {
        map[s[i]]++
        if (isTrue()) {
            res = Math.min(res, i + 1)
            break
        }
    }
    map = { a: 0, b: 0, c: 0 }

    if (res == 3 * k) return res

    for (let i = len - 1; i >= 0; i--) {
        map[s[i]]++
        if (isTrue()) {
            res = Math.min(res, len - i)
            break
        }
    }

    map = { a: 0, b: 0, c: 0 }
    if (res == 3 * k) return res

    for (let i = left; i < len + left; i++) {
        map[s[i % len]]++

        while (map[s[left]] > k) {
            map[s[left]]--
            left++
        }

        if (isTrue()) {
            res = Math.min(res, i - left + 1)
            if (isMin()) return res
        }
    }

    if (res === Infinity) return -1
    return res
}

export function takeCharacters1(s: string, k: number): number {
    let map: Record<string, number> = { a: 0, b: 0, c: 0 }
    let len = s.length
    let right = len
    let res = Infinity

    while (map.a < k || map.b < k || map.c < k) {
        if (right == 0) return -1
        right--
        map[s[right]]++
    }
    res = len - right

    for (let left = 0; left < len; left++) {
        map[s[left]]++
        while (map[s[right]] > k) {
            map[s[right]]--
            right++
        }
        res = Math.min(res, left + 1 + len - right)
        if (right == len) break
    }
    return res
}