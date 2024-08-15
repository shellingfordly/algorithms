# 3. 无重复字符的最长子串

给定一个字符串 s ，请你找出其中不含有重复字符的最长子串的长度。

示例 1:

---

> 输入: s = "abcabcbb"
>
> 输出: 3
>
> 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

示例 2:

> 输入: s = "bbbbb"
>
> 输出: 1
>
> 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

示例 3:

> 输入: s = "pwwkew"
>
> 输出: 3
>
> 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
> 请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

提示：

- 0 <= s.length <= 5 \* 104
- s 由英文字母、数字、符号和空格组成

## 方法一

[3. 无重复字符的最长子串](https://github.com/shellingfordly/algorithms/tree/master/src/3_lengthOfLongestSubstring)

以前做的

## 方法二

- map 记录已经出现字母下标
- flag 上一次出现重复字母的下一个下标
- count 记录没有出现重复字母的个数

当有字母重复出现时，当前字母到上一次出现重复字母处的长度 i - flag 即是无重复字符最长子串

1. flag

更新 flag 时，需要注意一个点，从 map 中获取的上一次出现 s[i] 的下标时，如果 map.get(s[i]) 小于了 flag 的记录则不更新 flag

举例："baaabc"，在此事例中，遍历到第二个 b 时，因为 a 的重复目前 flag = 3，当 i = 4 遇到 b 时，map.get(s[i])取到 0，flag 不可往回走，因此不更新。count 已经从 i = 3 处重新计数了。

2. count

记录 count 主要是为了字符串没有重复字母时，比如 "abcdef"这种情况。

还有另一种情况，尾部的子串大于前面出现的子串，比如 "baaabc" ，前半部分 "baa" 最大为 2，最后 "abc" 最大为 3
但是无法再进入到 map.has(word) 的判断中了。

当没有重复字母时，count 一直累加，当出现重复时，count 需要进行重制

需要注意在重制 count 值时，比如 "baalvabc"

当 i = 5 时，也就是第三个 a 出现时，此时 flag 在上一次 a 出现的位置，即 flag = 2，j = 2，i - flag = 5 - 2 = 3；
更新 flag = j + 1 = 2 + 1 = 3 ，也就是来到了 l 的位置，此时 a 前面有 lv 两个字符，count = i - j - 1 = 5 - 2 - 1 = 2；
因为每次循环都会执行 count++，所以要减一，后续没有重复，count 累计 5。

```ts
function lengthOfLongestSubstring(s: string): number {
  const map = new Map<string, number>();

  let count = 0;
  let res = 0;
  let flag = 0;

  for (let i = 0; i < s.length; i++) {
    const word = s[i];
    if (map.has(word)) {
      let j = map.get(word) || 0;
      if (j >= flag) {
        res = Math.max(res, i - flag);
        flag = j + 1;
        count = i - j - 1;
      }
    }
    map.set(word, i);
    count++;
  }

  if (count > 0) res = Math.max(res, count);

  return res;
}
```

## 方法三

用 set 记录字母，遇到重复时，一直删除到没有重复字母处

```ts
function lengthOfLongestSubstring1(s: string): number {
  let ans = 0;
  let left = 0;
  const hash = new Set(); // 维护从下标 left 到下标 right 的字符
  for (let right = 0; right < s.length; right++) {
    const c = s[right];
    // 如果窗口内已经包含 c，那么再加入一个 c 会导致窗口内有重复元素
    // 所以要在加入 c 之前，先移出窗口内的 c
    while (hash.has(c)) {
      // 窗口内有 c
      hash.delete(s[left++]); // 缩小窗口
    }
    hash.add(c); // 加入 c
    ans = Math.max(ans, right - left + 1); // 更新窗口长度最大值
  }
  return ans;
}
```
