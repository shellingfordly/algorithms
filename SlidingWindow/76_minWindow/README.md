# 76. 最小覆盖子串

给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。

注意：

对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
如果 s 中存在这样的子串，我们保证它是唯一的答案。

示例 1：

> 输入：s = "ADOBECODEBANC", t = "ABC"
>
> 输出："BANC"
>
> 解释：最小覆盖子串 "BANC" 包含来自字符串 t 的 'A'、'B' 和 'C'。

示例 2：

> 输入：s = "a", t = "a"
>
> 输出："a"
>
> 解释：整个字符串 s 是最小覆盖子串。

示例 3:

> 输入: s = "a", t = "aa"
>
> 输出: ""
>
> 解释: t 中两个字符 'a' 均应包含在 s 的子串中，
> 因此没有符合条件的子字符串，返回空字符串。

提示：

- m == s.length
- n == t.length
- 1 <= m, n <= 105
- s 和 t 由英文字母组成

进阶：你能设计一个在 o(m+n) 时间内解决此问题的算法吗？

## 方法一：滑动窗口+暴力比对

记录字符串 t 出现的字母个数，遍历字符串 s 并记录出现字母个数，每次比对所有 map 内的字母个数是否满足条件；
满足则 smap 从 left=0 处开始删除字母个数，再次比对，记录更短的字符

```ts
function minWindow(s: string, t: string): string {
  if (s.length < t.length) return "";
  const tMap: Record<string, number> = {};
  const sMap: Record<string, number> = {};

  const isSame = () => {
    for (const key in tMap) {
      if (!sMap[key] || sMap[key] < tMap[key]) return false;
    }
    return true;
  };

  let left = 0;
  let res = "";

  for (let i = 0; i < t.length; i++) {
    tMap[t[i]] = (tMap[t[i]] || 0) + 1;
  }

  for (let i = 0; i < s.length; i++) {
    sMap[s[i]] = (sMap[s[i]] || 0) + 1;
    while (left <= i && isSame()) {
      if (res == "" || i - left + 1 < res.length) res = s.slice(left, i + 1);
      sMap[s[left]]--;
      left++;
    }
  }
  return res;
}
```

## 方法二：滑动窗口+优化比对

使用 less 记录 t 字符串的字母种类，遍历 s 字符串时，当 smap 所记录的字母与 tmap 中的字母个数相同时，less 减去此字母种类；

如果 less === 0 则说明出现满足条件的字符串，进入循环；从 left = 0 处开始删除时，当 smap 所记录的字母与 tmap 中的字母个数相同时，less 需要将此字母种类加回去。

```ts
function minWindow1(s: string, t: string): string {
  if (s.length < t.length) return "";
  const tMap: Record<string, number> = {};
  const sMap: Record<string, number> = {};
  let left = 0;
  let res = "";
  let less = 0;

  for (let i = 0; i < t.length; i++) {
    if (!tMap[t[i]]) less++;
    tMap[t[i]] = (tMap[t[i]] || 0) + 1;
  }

  for (let i = 0; i < s.length; i++) {
    sMap[s[i]] = (sMap[s[i]] || 0) + 1;
    if (sMap[s[i]] === tMap[s[i]]) less--;

    while (left <= i && less === 0) {
      if (res == "" || i - left + 1 < res.length) res = s.slice(left, i + 1);
      if (sMap[s[left]]-- === tMap[s[left]]) less++;
      left++;
    }
  }
  return res;
}
```
