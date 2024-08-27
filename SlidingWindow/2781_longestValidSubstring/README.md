# 2781. 最长合法子字符串的长度

给你一个字符串 word 和一个字符串数组 forbidden 。

如果一个字符串不包含 forbidden 中的任何字符串，我们称这个字符串是 合法 的。

请你返回字符串 word 的一个 最长合法子字符串 的长度。

子字符串 指的是一个字符串中一段连续的字符，它可以为空。

示例 1：

> 输入：word = "cbaaaabc", forbidden = ["aaa","cb"]
>
> 输出：4
>
> 解释：总共有 11 个合法子字符串："c", "b", "a", "ba", "aa", "bc", "baa", "aab", "ab", "abc" 和 "aabc"。最长合法子字符串的长度为 4 。
>
> 其他子字符串都要么包含 "aaa" ，要么包含 "cb" 。

示例 2：

> 输入：word = "leetcode", forbidden = ["de","le","e"]
>
> 输出：4
>
> 解释：总共有 11 个合法子字符串："l" ，"t" ，"c" ，"o" ，"d" ，"tc" ，"co" ，"od" ，"tco" ，"cod" 和 "tcod" 。最长合法子字符串的长度为 4 。
>
> 所有其他子字符串都至少包含 "de" ，"le" 和 "e" 之一。

提示：

- 1 <= word.length <= 105
- word 只包含小写英文字母。
- 1 <= forbidden.length <= 105
- 1 <= forbidden[i].length <= 10
- forbidden[i] 只包含小写英文字母。

## 方法一：滑动窗口+哈希表

直接用 forbidden 查询是否存在肯定超时，先遍历 forbidden 存在 set 中，去重

遍历字符串，取到 word [left, right+1] 的部分字符串，再遍历此字符串中是否有字符在 fb 中存在

遍历 [left, right+1] 部分的字符串时，i 从 right 处开始截取，因为如果右边的子字符串中已经在 fb 内存在的话，就不需要再向左截取判断了，将 left 移动到 i+1 处，此时 right - left + 1 就是满足条件的最长子串

i > right - 10 是因为题目的条件 1 <= forbidden[i].length <= 10，如果长度大于 10 了可以提前退出判断

```ts
function longestValidSubstring(word: string, forbidden: string[]): number {
  let left = 0;
  let res = 0;
  const fb = new Set<string>();
  for (let i = 0; i < forbidden.length; i++) {
    fb.add(forbidden[i]);
  }

  for (let right = 0; right < word.length; right++) {
    for (let i = right; i >= left && i > right - 10; i--) {
      if (fb.has(word.slice(i, right + 1))) {
        left = i + 1;
      }
    }

    res = Math.max(res, right - left + 1);
  }
  return res;
}
```

我一开始 i 从左开始遍历，就会导致超时

```ts
function longestValidSubstring(word: string, forbidden: string[]): number {
  let left = 0;
  let res = 0;
  const fb = new Set<string>();
  for (let i = 0; i < forbidden.length; i++) {
    fb.add(forbidden[i]);
  }
  for (let right = 0; right < word.length; right++) {
    for (let i = left; i <= right; i++) {
      if (fb.has(word.slice(i, right + 1))) left = i + 1;
    }
    res = Math.max(res, right - left + 1);
  }
  return res;
}
```
