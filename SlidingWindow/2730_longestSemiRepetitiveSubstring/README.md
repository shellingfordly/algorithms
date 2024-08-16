# 2730. 找到最长的半重复子字符串

给你一个下标从 0 开始的字符串 s ，这个字符串只包含 0 到 9 的数字字符。

如果一个字符串 t 中至多有一对相邻字符是相等的，那么称这个字符串 t 是 半重复的 。例如，"0010" 、"002020" 、"0123" 、"2002" 和 "54944" 是半重复字符串，而 "00101022" （相邻的相同数字对是 00 和 22）和 "1101234883" （相邻的相同数字对是 11 和 88）不是半重复字符串。

请你返回 s 中最长半重复子字符串的长度。

示例 1：

> 输入：s = "52233"
>
> 输出：4
>
> 解释：
>
> 最长的半重复子字符串是 "5223"。整个字符串 "52233" 有两个相邻的相同数字对 22 和 33，但最多只能选取一个。

示例 2：

> 输入：s = "5494"
>
> 输出：4
>
> 解释：
>
> s 是一个半重复字符串。

示例 3：

> 输入：s = "1111111"
>
> 输出：2
>
> 解释：
>
> 最长的半重复子字符串是 "11"。子字符串 "111" 有两个相邻的相同数字对，但最多允许选取一个。

提示：

- 1 <= s.length <= 50
- '0' <= s[i] <= '9'

## 方法一

### 思路

半重复子字符串：指子字符串中最多只能有一对相邻字符相同，比如 1123，1234 都是符合条件的

也就是说，当 s[i] == s[i-1] 出现第二次时，就得计算前面字符串的长度了。

### 代码

start 用来记录起始位置，arr 用来记录每次出现重复数字时的下标

出现第一次时，不处理，出现第二次时，需要计算前面字符的长度，并将 start 调整到第一次出现第一次重复时的位置(也就是 arr[0])，将 arr[0] 推出，继续寻找重复字符。

遍历结束后，如果 arr.length == 0 ，start = 0，表示没有重复字符，则字符串长度为 s.length

若 arr.length == 1, 有两种情况，

一是 s 只出现一次重复字符，则 start = 0，子字符串的长度 为 s.length
二是 s 出现过多次重复字符，由于 arr.length == 2 时被推出了，因此 start 的位置位于倒数第二次重复字符的位置，arr 里为最后一次重复字符，因此 s.length - start 为尾部的子字符串长度

比如："1101234883456"，遍历结束时，start = 1 即第二个 1 的位置，而后续只有 88 重复，因此 "101234883456" 此字符满足要求且是最长的半重复子字符串。

```ts
function longestSemiRepetitiveSubstring(s: string): number {
  let res = 0;
  let start = 0;
  const arr: number[] = [];

  for (let i = 1; i < s.length; i++) {
    if (s[i] == s[i - 1]) {
      arr.push(i);
    }
    if (arr.length == 2) {
      res = Math.max(res, i - start);
      start = arr.shift() || 0;
    }
  }

  if (arr.length <= 1) res = Math.max(res, s.length - start);

  return res;
}
```

与灵神的思路差不多，花费了 144ms，击败 57.14%，改成 python 后花费 55ms，击败 92.12%，看来是语言的问题

```py
class Solution:
    def longestSemiRepetitiveSubstring(self, s: str) -> int:
        start = 0
        res = 0
        arr = []
        for i in range(1, len(s)):
            if s[i] == s[i - 1]:
                arr.append(i)
            if len(arr) == 2:
                res = max(res, i - start)
                start = arr.pop(0) if arr else 0
        if len(arr) <= 1:
            res = max(res, len(s) - start)
        return res
```

## 方法二

移动右指针 right，并统计相邻相同的情况出现了多少次，记作 same

如果 same>1，则不断移动左指针 left 直到 s[left]=s[left−1]，此时将一对相同的字符移到窗口之外。然后将 same 置为 1。

然后统计子串长度 right−left+1 的最大值。

[灵神的代码](https://leetcode.cn/problems/find-the-longest-semi-repetitive-substring/solutions/2304713/shuang-zhi-zhen-hua-chuang-pythonjavacgo-nurf/)

```py
class Solution:
    def longestSemiRepetitiveSubstring(self, s: str) -> int:
        ans, left, same = 1, 0, 0
        for right in range(1, len(s)):
            same += s[right] == s[right - 1]
            if same > 1:
                left += 1
                while s[left] != s[left - 1]:
                    left += 1
                same = 1
            ans = max(ans, right - left + 1)
        return ans
```
