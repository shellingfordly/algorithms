export function findAnagrams(s: string, p: string): number[] {
    const hash1 = new Array(26).fill(0)
    const hash2 = new Array(26).fill(0)
    const index = (s: string) => s.charCodeAt(0) - "a".charCodeAt(0)
    const pLen = p.length
    const res: number[] = []
    if (pLen > s.length) return res;

    for (let i = 0; i < pLen; i++) {
        hash1[index(p[i])]++
    }

    for (let i = 0; i < pLen; i++) {
        hash2[index(s[i])]++
    }

    if (hash1.toString() == hash2.toString()) res.push(0)

    for (let i = pLen, j = 0; i < s.length; i++, j++) {
        hash2[index(s[i])]++
        hash2[index(s[j])]--
        if (hash1.toString() == hash2.toString()) res.push(j + 1)
    }
    return res
};

export function findAnagrams1(s: string, p: string): number[] {
    const map1: any = {}
    const map2: any = {}
    const len1 = p.length
    const res: number[] = []
    const isSame = () => {
        for (const key in map2)
            if (map2[key] !== map1[key])
                return false
        return true
    }

    for (let i = 0; i < len1; i++) {
        if (map1[p[i]]) map1[p[i]]++
        else map1[p[i]] = 1
    }

    for (let i = 0; i < len1; i++) {
        if (map2[s[i]]) map2[s[i]]++
        else map2[s[i]] = 1
    }

    if (isSame()) res.push(0)

    for (let i = len1, j = 0; i < s.length; i++, j++) {
        if (map2[s[i]]) map2[s[i]]++
        else map2[s[i]] = 1

        if (map2[s[j]] == 1) delete map2[s[j]]
        else map2[s[j]]--

        if (isSame()) res.push(j + 1)
    }

    return res;
};

export function findAnagrams2(s: string, p: string): number[] {
    const sLen = s.length, pLen = p.length;
    if (sLen < pLen) return [];

    const index = (s: string) => s.charCodeAt(0) - "a".charCodeAt(0)
    const ans: number[] = [];

    //表示字母出现次数差距
    const count = Array(26).fill(0);

    for (let i = 0; i < pLen; ++i) {
        ++count[index(s[i])];
        --count[index(p[i])];
    }
    console.log("count:", count)

    //表示字母差异个数
    let differ = 0;
    for (let j = 0; j < 26; ++j) {
        if (count[j] !== 0) {
            ++differ;
        }
    }

    if (differ === 0) ans.push(0);

    for (let i = 0; i < sLen - pLen; ++i) {
        if (count[index(s[i])] === 1) {
            --differ;
        } else if (count[index(s[i])] === 0) {
            ++differ;
        }
        --count[index(s[i])];

        if (count[index(s[i + pLen])] === -1) {
            --differ;
        } else if (count[index(s[i + pLen])] === 0) {
            ++differ;
        }
        ++count[index(s[i + pLen])];

        if (differ === 0) {
            ans.push(i + 1);
        }
    }

    return ans;
};
