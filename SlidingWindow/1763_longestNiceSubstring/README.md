# 1763. 最长的美好子字符串

当一个字符串 s 包含的每一种字母的大写和小写形式 同时 出现在 s 中，就称这个字符串 s 是 美好 字符串。比方说，"abABB" 是美好字符串，因为 'A' 和 'a' 同时出现了，且 'B' 和 'b' 也同时出现了。然而，"abA" 不是美好字符串因为 'b' 出现了，而 'B' 没有出现。

给你一个字符串 s ，请你返回 s 最长的 美好子字符串 。如果有多个答案，请你返回 最早 出现的一个。如果不存在美好子字符串，请你返回一个空字符串。

示例 1：

> 输入：s = "YazaAay"
>
> 输出："aAa"
>
> 解释："aAa" 是一个美好字符串，因为这个子串中仅含一种字母，其小写形式 'a' 和大写形式 'A' 也同时出现了。
> "aAa" 是最长的美好子字符串。

示例 2：

> 输入：s = "Bb"
>
> 输出："Bb"
>
> 解释："Bb" 是美好字符串，因为 'B' 和 'b' 都出现了。整个字符串也是原字符串的子字符串。

示例 3：

> 输入：s = "c"
>
> 输出：""
>
> 解释：没有美好子字符串。

示例 4：

> 输入：s = "dDzeE"
>
> 输出："dD"
>
> 解释："dD" 和 "eE" 都是最长美好子字符串。
> 由于有多个美好子字符串，返回 "dD" ，因为它出现得最早。

提示：

- 1 <= s.length <= 100
- s 只包含大写和小写英文字母。

## 方法一：枚举

[力扣官方题解](https://leetcode.cn/problems/longest-nice-substring/submissions/559624208/)

### 思路

题目要求找到最长的美好子字符串，题目中给定的字符串 s 的长度 length 范围为 1≤length≤100。由于字符串的长度比较小，因此可以枚举所有可能的子字符串，然后检测该字符串是否为美好的字符串，并得到长度最长的美好字符串。

题目关于美好字符串的定义为: 字符串中的每个字母的大写和小写形式同时出现在该字符串中。检测时，由于英文字母 ‘a’−‘z’ 最多只有 26 个, 因此可以利用二进制位来进行标记，lower 标记字符中出现过小写英文字母，upper 标记字符中出现过大写英文字母。如果满足 lower=upper ，我们则认为字符串中所有的字符都满足大小写形式同时出现，则认定该字符串为美好字符串。

题目要求如果有多个答案，返回在字符串中最早出现的那个。此时，只需要首先检测从以字符串索引 0 为起始的子字符串。

### 代码

```ts
function longestNiceSubstring(s: string): string {
  const n = s.length;
  let maxPos = 0;
  let maxLen = 0;
  for (let i = 0; i < n; ++i) {
    let lower = 0;
    let upper = 0;
    for (let j = i; j < n; ++j) {
      if ("a" <= s[j] && s[j] <= "z") {
        lower |= 1 << (s[j].charCodeAt(0) - "a".charCodeAt(0));
      } else {
        upper |= 1 << (s[j].charCodeAt(0) - "A".charCodeAt(0));
      }
      if (lower === upper && j - i + 1 > maxLen) {
        maxPos = i;
        maxLen = j - i + 1;
      }
    }
  }
  return s.slice(maxPos, maxPos + maxLen);
}
```

## 方法二：滑动窗口

### 思路

滑动窗口的解法同样参考「395. 至少有 K 个重复字符的最长子串」。
我们枚举最长子串中的字符种类数目，它最小为 1，最大为 ∣Σ∣/2，其中同一个字符的大小写形式视为同一种字符。

对于给定的字符种类数量 typeNum，我们维护滑动窗口的左右边界 l,r、滑动窗口内部大小字符出现的次数 upperCnt,lowerCnt，以及滑动窗口内的字符种类数目 total。当 total>typeNum 时，我们不断地右移左边界 l，并对应地更新 upperCnt,lowerCnt 以及 total，直到 total≤typeNum 为止。这样，对于任何一个右边界 r，我们都能找到最小的 l（记为 lmin，使得 s[lmin...r] 之间的字符种类数目不多于 typeNum。

完美字符串定义为所有的字符同时出现大写和小写形式，最长的完美字符串一定出现在某个窗口中。对于任何一组 lmin,r 而言，我们需要判断当前 s[lmin...r] 是否为完美字符串，检测方法如下：

- 当前字符串中的字符种类数量为 typeNum，当前字符串中同时出现大小写的字符的种类数量为 cnt，只有满足 cnt 等于 typeNum 时，我们可以判定字符串为完美字符串。
- 遍历 upperCnt,lowerCnt 两个数组，第 i 个字符同时满足 upperCnt[i]>0,lowerCnt[i]>0 时，则认为第 i 个字符的大小写形式同时出现。

根据上面的结论，当限定字符种类数目为 typeNum 时，满足题意的最长子串，就一定出自某个 s[lmin...r]。因此，在滑动窗口的维护过程中，就可以直接得到最长子串的大小。

最后，还剩下一个细节：如何在滑动窗口的同时高效地维护 total 和 cnt。

- 右移右边界 r 时，假设 s[r] 对应的字符的索引为 idx，当满足 upperCnt[r]+lowerCnt[r]=1 时，则我们认为此时新增了一种字符，将 total 加 1。

- 右移右边界 r 时，假设 s[r] 对应的字符的索引为 idx，如果 s[r] 为小写字母，右移右边界后，当满足 lowerCnt[idx]=1 且 upperCnt[idx]>0 时，则我们认为此时新增了一种大小写同时存在的字符，将 cnt 加 1；如果 s[r] 为大写字母，右移右边界后，当满足 upperCnt[idx]=1 且 lowerCnt[idx]>0 时，则我们认为此时新增了一种大小写同时存在的字符，将 cnt 加 1。

- 右移左边界 l 时，假设 s[l] 对应的字符的索引为 idx，当满足 upperCnt[idx]+lowerCnt[idx]=1 时，右移左边界后则我们认为此时将减少一种字符，将 total 减 1。

- 右移左边界 l 时，假设 s[l] 对应的字符的索引为 idx，如果 s[l] 为小写字母，右移左边界后，当满足 lowerCnt[idx]=0 且 upperCnt[idx]>0 时，则我们认为此时减少了一种大小写同时存在的字符，将 cnt 减 1；如果 s[l] 为大写字母，右移左边界后，当满足 upperCnt[idx]=0 且 lowerCnt[idx]>0 时，则我们认为此时减少了一种大小写同时存在的字符，将 cnt 减 1。

### 代码

```ts
function longestNiceSubstring1(s: string): string {
  let maxPos = 0;
  let maxLen = 0;

  var bitCount = function (n: number) {
    let ret = 0;
    while (n) {
      n &= n - 1;
      ret++;
    }
    return ret;
  };

  let types = 0;
  for (let i = 0; i < s.length; ++i) {
    types |= 1 << (s[i].toLowerCase().charCodeAt(0) - "a".charCodeAt(0));
  }
  types = bitCount(types);

  for (let i = 1; i <= types; ++i) {
    const lowerCnt = new Array(26).fill(0);
    const upperCnt = new Array(26).fill(0);
    let cnt = 0;

    for (let l = 0, r = 0, total = 0; r < s.length; ++r) {
      let idx = s[r].toLowerCase().charCodeAt(0) - "a".charCodeAt(0);

      if ("a" <= s[r] && s[r] <= "z") {
        ++lowerCnt[idx];
        if (lowerCnt[idx] === 1 && upperCnt[idx] > 0) {
          ++cnt;
        }
      } else {
        ++upperCnt[idx];
        if (upperCnt[idx] === 1 && lowerCnt[idx] > 0) {
          ++cnt;
        }
      }

      total += lowerCnt[idx] + upperCnt[idx] === 1 ? 1 : 0;

      while (total > i) {
        idx = s[l].toLowerCase().charCodeAt(0) - "a".charCodeAt(0);
        total -= lowerCnt[idx] + upperCnt[idx] === 1 ? 1 : 0;

        if ("a" <= s[l] && s[l] <= "z") {
          --lowerCnt[idx];

          if (lowerCnt[idx] === 0 && upperCnt[idx] > 0) {
            --cnt;
          }
        } else {
          --upperCnt[idx];

          if (upperCnt[idx] === 0 && lowerCnt[idx] > 0) {
            --cnt;
          }
        }
        ++l;
      }

      if (cnt === i && r - l + 1 > maxLen) {
        maxPos = l;
        maxLen = r - l + 1;
      }
    }
  }

  return s.slice(maxPos, maxPos + maxLen);
}
```
