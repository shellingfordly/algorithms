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

export function lengthOfLongestSubstring1(s: string): number {
    let ans = 0;
    let left = 0;
    const hash = new Set(); // 维护从下标 left 到下标 right 的字符
    for (let right = 0; right < s.length; right++) {
        const c = s[right];
        // 如果窗口内已经包含 c，那么再加入一个 c 会导致窗口内有重复元素
        // 所以要在加入 c 之前，先移出窗口内的 c
        while (hash.has(c)) { // 窗口内有 c
            hash.delete(s[left++]); // 缩小窗口
        }
        hash.add(c); // 加入 c
        ans = Math.max(ans, right - left + 1); // 更新窗口长度最大值
    }
    return ans;
}