export function numSmallerByFrequency(queries: string[], words: string[]): number[] {
    // 最小字母出现的次数
    function getMinWordTimes(str: string) {
        const map = new Map<string, number>()
        let minS = "z"
        for (let i = 0; i < str.length; i++) {
            const s = str[i]
            const v = (map.get(s) || 0) + 1
            map.set(s, v)
            if (s <= minS) minS = s
        }
        return map.get(minS) || 0
    }

    // 查询满足 f(queries[i]) < f(W) 的个数
    function searchWord(wordTimes: number[], queryTime: number) {
        let left = 0, right = words.length - 1
        while (left <= right) {
            const mid = Math.floor((left + right) / 2)
            if (wordTimes[mid] > queryTime) right = mid - 1
            else left = mid + 1
        }
        return wordTimes.length - left
    }

    const wordTimes = words.map(getMinWordTimes).sort((a, b) => a - b)
    return queries.map(query => searchWord(wordTimes, getMinWordTimes(query)))
};

export function numSmallerByFrequency1(queries: string[], words: string[]): number[] {
    function f(s: string) {
        let cnt = 0;
        let ch = 'z';
        for (let c of s) {
            if (c < ch) {
                ch = c;
                cnt = 1;
            } else if (c == ch) {
                cnt++;
            }
        }
        return cnt;
    }

    let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let s of words) {
        count[f(s)]++;
    }
    for (let i = 9; i >= 0; i--) {
        count[i] += count[i + 1];
    }
    let res: number[] = [];
    for (let s of queries) {
        res.push(count[f(s) + 1]);
    }
    return res;
};
