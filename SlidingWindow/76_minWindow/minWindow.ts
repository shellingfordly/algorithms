export function minWindow(s: string, t: string): string {
    if (s.length < t.length) return ""
    const tMap: Record<string, number> = {}
    const sMap: Record<string, number> = {}

    const isSame = () => {
        for (const key in tMap) {
            if (!sMap[key] || sMap[key] < tMap[key]) return false
        }
        return true
    }

    let left = 0
    let res = ""

    for (let i = 0; i < t.length; i++) {
        tMap[t[i]] = (tMap[t[i]] || 0) + 1
    }

    for (let i = 0; i < s.length; i++) {
        sMap[s[i]] = (sMap[s[i]] || 0) + 1
        while (left <= i && isSame()) {
            if (res == "" || i - left + 1 < res.length) res = s.slice(left, i + 1)
            sMap[s[left]]--
            left++
        }
    }
    return res
};

export function minWindow1(s: string, t: string): string {
    if (s.length < t.length) return ""
    const tMap: Record<string, number> = {}
    const sMap: Record<string, number> = {}
    let left = 0
    let res = ""
    let less = 0

    for (let i = 0; i < t.length; i++) {
        if (!tMap[t[i]]) less++
        tMap[t[i]] = (tMap[t[i]] || 0) + 1
    }

    for (let i = 0; i < s.length; i++) {
        sMap[s[i]] = (sMap[s[i]] || 0) + 1
        if (sMap[s[i]] === tMap[s[i]]) less--

        while (left <= i && less === 0) {
            if (res == "" || i - left + 1 < res.length) res = s.slice(left, i + 1)
            if (sMap[s[left]]-- === tMap[s[left]]) less++
            left++
        }
    }
    return res
};