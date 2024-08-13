export function checkInclusion(s1: string, s2: string): boolean {
    const map1: any = {}
    const map2: any = {}
    const len1 = s1.length
    const isSame = () => {
        for (const key in map2)
            if (map2[key] !== map1[key])
                return false
        return true
    }

    for (let i = 0; i < len1; i++) {
        if (map1[s1[i]]) map1[s1[i]]++
        else map1[s1[i]] = 1
    }

    for (let i = 0; i < len1; i++) {
        if (map2[s2[i]]) map2[s2[i]]++
        else map2[s2[i]] = 1
    }

    if (isSame()) return true

    for (let i = len1, j = 0; i < s2.length; i++, j++) {
        if (map2[s2[i]]) map2[s2[i]]++
        else map2[s2[i]] = 1

        if (map2[s2[j]] == 1) delete map2[s2[j]]
        else map2[s2[j]]--

        if (isSame()) return true
    }

    return false;
};


export function checkInclusion1(s1: string, s2: string): boolean {
    const hash1 = new Array(26).fill(0)
    const hash2 = new Array(26).fill(0)
    const index = (s: string) => s.charCodeAt(0) - "a".charCodeAt(0)
    const len1 = s1.length
    if (len1 > s2.length) return false;

    for (let i = 0; i < len1; i++) {
        hash1[index(s1[i])]++
    }

    for (let i = 0; i < len1; i++) {
        hash2[index(s2[i])]++
    }

    if (hash1.toString() == hash2.toString()) return true

    for (let i = len1, j = 0; i < s2.length; i++, j++) {
        hash2[index(s2[i])]++
        hash2[index(s2[j])]--
        if (hash1.toString() == hash2.toString()) return true
    }

    return false
};