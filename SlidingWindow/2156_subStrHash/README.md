# 2156. 查找给定哈希值的子串

给定整数 p 和 m ，一个长度为 k 且下标从 0 开始的字符串 s 的哈希值按照如下函数计算：

hash(s, p, m) = (val(s[0]) _ p0 + val(s[1]) _ p1 + ... + val(s[k-1]) \* pk-1) mod m.
其中 val(s[i]) 表示 s[i] 在字母表中的下标，从 val('a') = 1 到 val('z') = 26 。

给你一个字符串 s 和整数 power，modulo，k 和 hashValue 。请你返回 s 中 第一个 长度为 k 的 子串 sub ，满足 hash(sub, power, modulo) == hashValue 。

测试数据保证一定 存在 至少一个这样的子串。

子串 定义为一个字符串中连续非空字符组成的序列。

示例 1：

> 输入：s = "leetcode", power = 7, modulo = 20, k = 2, hashValue = 0
>
> 输出："ee"
>
> 解释："ee" 的哈希值为 hash("ee", 7, 20) = (5 \* 1 + 5 \* 7) mod 20 = 40 mod 20 = 0 。
> "ee" 是长度为 2 的第一个哈希值为 0 的子串，所以我们返回 "ee" 。

示例 2：

> 输入：s = "fbxzaad", power = 31, modulo = 100, k = 3, hashValue = 32
>
> 输出："fbx"
>
> 解释："fbx" 的哈希值为 hash("fbx", 31, 100) = (6 \* 1 + 2 \* 31 + 24 \* 31²) mod 100 = 23132 mod 100 = 32 。
> "bxz" 的哈希值为 hash("bxz", 31, 100) = (2 \* 1 + 24 \* 31 + 26 \* 31²) mod 100 = 25732 mod 100 = 32 。
> "fbx" 是长度为 3 的第一个哈希值为 32 的子串，所以我们返回 "fbx" 。
> 注意，"bxz" 的哈希值也为 32 ，但是它在字符串中比 "fbx" 更晚出现。

提示：

- 1 <= k <= s.length <= 2 \* 104
- 1 <= power, modulo <= 109
- 0 <= hashValue < modulo
- s 只包含小写英文字母。
- 测试数据保证一定 存在 满足条件的子串。

## 方法一：暴力解法

超出时间限制

每次都取[i, i+k-1]处的子字符串进行计算，满足要求则返回

```py
# 超出时间限制
class Solution:
    def subStrHash(
        self, s: str, power: int, modulo: int, k: int, hashValue: int
    ) -> str:
        for i in range(len(s) - k + 1):
            c = 0
            j = i
            for j in range(i, j + k):
                c += (ord(s[j]) - ord("a") + 1) * pow(power, j - i)
            if c % modulo == hashValue:
                return s[i : i + k]
```

在 js 中由于大数计算的原因，还没到超出时间限制的测试用例，就已经因为大数的原因导致计算错误

```ts
function subStrHash(
  s: string,
  power: number,
  modulo: number,
  k: number,
  hashValue: number
): string {
  for (let i = 0; i < s.length - k + 1; i++) {
    let sum = 0;
    let j = i;
    for (; j < i + k; j++) {
      sum +=
        (s[j].charCodeAt(0) - "a".charCodeAt(0) + 1) * Math.pow(power, j - i);
    }
    if (sum % modulo == hashValue) return s.slice(i, i + k);
  }
  return "";
}
```

```ts
function subStrHash(
  s: string,
  power: number,
  modulo: number,
  k: number,
  hashValue: number
): string {
  const code = (s: string) => s.charCodeAt(0) - "a".charCodeAt(0) + 1;

  const hash = (s: string) => {
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
      sum += code(s[i]) * Math.pow(power, i);
    }
    return sum % modulo == hashValue;
  };

  let str = s.slice(0, k);
  if (hash(str)) return str;

  for (let i = 1; i <= s.length - k; i++) {
    str = s.slice(i, i + k);
    if (hash(str)) {
      return str;
    }
  }
  return "";
}
```

## 方法二

[不理解]

我们可以考虑两个相邻的子串 s[i ~ i+k−1] 与 s[i+1 ~ i+k]，为了方便表示，我们用函数 h(i,p,m) 来表示 s[i ~ i+k−1] 的哈希值，即

h(i,p,m) = hash(s[i~i+k−1],p,m) = ( val(s[i])×p0 + val(s[i+1])×p1 + ⋯ + val(s[i+k−1])×pk−1 ) % m.
​
同理，我们有：

h(i+1,p,m) = (val(s[i+1])×p0 + val(s[i+2])×p1 + ⋯ + val(s[i+k])×pk−1 ) % m.

比较上述两式，容易发现：

h(i,p,m) = ( val(s[i])×p0 + p×h(i+1,p,m) − val(s[i+k])×pk ) % m.

上面的公示是能理解的，但实际反应到代码中有点不解

```ts
function subStrHash(
  s: string,
  p: number,
  modulo: number,
  k: number,
  hashValue: number
): string {
  let power = BigInt(p);
  let m = BigInt(modulo);
  let h = BigInt(hashValue);
  const n = s.length;

  // 用秦九韶算法计算 s[n-k:] 的哈希值，同时计算 pk=power^k
  let hash = 0n,
    pk = 1n;
  for (let i = n - 1; i >= n - k; i--) {
    hash = (hash * power + BigInt(s.charCodeAt(i) & 31)) % m;
    pk = (pk * power) % m;
  }
  let ans = hash === h ? n - k : 0;

  // 向左滑窗
  for (let i = n - k - 1; i >= 0; i--) {
    // 计算新的哈希值，注意 +m 防止计算出负数
    hash =
      (hash * power +
        BigInt(s.charCodeAt(i) & 31) -
        ((pk * BigInt(s.charCodeAt(i + k) & 31)) % m) +
        m) %
      m;
    if (hash === h) ans = i;
  }
  return s.substring(ans, ans + k);
}
```
