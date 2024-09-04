export function numberOfSubstrings(s: string): number {
    const map: Record<string, number> = { a: 0, b: 0, c: 0 }
    let res = 0, count = 0, left = 0

    for (let i = 0; i < s.length; i++) {
        map[s[i]]++
        while (map.a >= 1 && map.b >= 1 && map.c >= 1) {
            count++
            map[s[left]]--
            left++
        }
        res += count
    }

    return res
};

export function numberOfSubstrings1(s: string): number {
    const map: Record<string, number> = { a: 0, b: 0, c: 0 }
    let res = 0, left = 0

    for (let i = 0; i < s.length; i++) {
        map[s[i]]++
        while (map.a >= 1 && map.b >= 1 && map.c >= 1) {
            map[s[left]]--
            left++
        }
        res += left
    }

    return res
};