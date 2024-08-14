# 438. 找到字符串中所有字母异位词

给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。

异位词 指由相同字母重排列形成的字符串（包括相同的字符串）。

示例 1:

输入: s = "cbaebabacd", p = "abc"
输出: [0,6]
解释:
起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。

示例 2:

输入: s = "abab", p = "ab"
输出: [0,1,2]
解释:
起始索引等于 0 的子串是 "ab", 它是 "ab" 的异位词。
起始索引等于 1 的子串是 "ba", 它是 "ab" 的异位词。
起始索引等于 2 的子串是 "ab", 它是 "ab" 的异位词。

提示:

1 <= s.length, p.length <= 3 \* 104
s 和 p 仅包含小写字母

## 方法一

滑动窗口+记录表对比

此题和[567. 字符串的排列](https://github.com/shellingfordly/algorithms/tree/master/SlidingWindow/567_checkInclusion)几乎一摸一样

只需要在满足时记录子字符串的起始索引即可

## 代码

- 数组记录

```ts
function findAnagrams(s: string, p: string): number[] {
  const hash1 = new Array(26).fill(0);
  const hash2 = new Array(26).fill(0);
  const index = (s: string) => s.charCodeAt(0) - "a".charCodeAt(0);
  const pLen = p.length;
  const res: number[] = [];
  if (pLen > s.length) return res;

  for (let i = 0; i < pLen; i++) {
    hash1[index(p[i])]++;
  }

  for (let i = 0; i < pLen; i++) {
    hash2[index(s[i])]++;
  }

  if (hash1.toString() == hash2.toString()) res.push(0);

  for (let i = pLen, j = 0; i < s.length; i++, j++) {
    hash2[index(s[i])]++;
    hash2[index(s[j])]--;
    if (hash1.toString() == hash2.toString()) res.push(j + 1);
  }
  return res;
}
```

- 对象记录

```ts
function findAnagrams1(s: string, p: string): number[] {
  const map1: any = {};
  const map2: any = {};
  const len1 = p.length;
  const res: number[] = [];
  const isSame = () => {
    for (const key in map2) if (map2[key] !== map1[key]) return false;
    return true;
  };

  for (let i = 0; i < len1; i++) {
    if (map1[p[i]]) map1[p[i]]++;
    else map1[p[i]] = 1;
  }

  for (let i = 0; i < len1; i++) {
    if (map2[s[i]]) map2[s[i]]++;
    else map2[s[i]] = 1;
  }

  if (isSame()) res.push(0);

  for (let i = len1, j = 0; i < s.length; i++, j++) {
    if (map2[s[i]]) map2[s[i]]++;
    else map2[s[i]] = 1;

    if (map2[s[j]] == 1) delete map2[s[j]];
    else map2[s[j]]--;

    if (isSame()) res.push(j + 1);
  }

  return res;
}
```

## 方法二

优化滑动窗口

### 思路

用 count 记录前 p.length 位字符在 s 字符串和 p 字符串中的差距次数，s[i] 存在，加 1；p[i]存在，减 1。用 differ 记录字符差距次数的总数，即 count 中不为 0 的个数总和。

当在 s 字符串上进行滑动滑块时，

删除第一个字符：
如果等于 1，表示它在 p 中不存在，删除此字符则减少一个字符差，differ++；
如果等于 0，表示它与 p 中存在，删除此字符则增加了一个字符差，differ--；

滑入的第一个字符：
如果 i + pLen 处等于 -1 ，表示此字符与 p 中存在，减少一个字符差，differ--；
如果 i + pLen 处等于 0 ，表示此字符与 p 中不存在，增加一个字符差，differ++；

### 代码

count[a] = 0 表示相同
count[a] = -1 表示 s 中不存在 p 中的此字符
count[a] = 1 表示 p 中不存在 s 中的词字符

```ts
function findAnagrams2(s: string, p: string): number[] {
  const sLen = s.length,
    pLen = p.length;
  if (sLen < pLen) return [];

  const index = (s: string) => s.charCodeAt(0) - "a".charCodeAt(0);
  const ans: number[] = [];

  //表示字母出现次数差距
  const count = Array(26).fill(0);

  for (let i = 0; i < pLen; ++i) {
    ++count[index(s[i])];
    --count[index(p[i])];
  }

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
}
```
