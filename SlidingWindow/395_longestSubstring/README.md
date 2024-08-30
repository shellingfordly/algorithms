# 395. 至少有 K 个重复字符的最长子串

给你一个字符串 s 和一个整数 k ，请你找出 s 中的最长子串， 要求该子串中的每一字符出现次数都不少于 k 。返回这一子串的长度。

如果不存在这样的子字符串，则返回 0。

示例 1：

> 输入：s = "aaabb", k = 3
>
> 输出：3
>
> 解释：最长子串为 "aaa" ，其中 'a' 重复了 3 次。

示例 2：

> 输入：s = "ababbc", k = 2
>
> 输出：5
>
> 解释：最长子串为 "ababb" ，其中 'a' 重复了 2 次， 'b' 重复了 3 次。

提示：

- 1 <= s.length <= 104
- s 仅由小写英文字母组成
- 1 <= k <= 105

## 方法一

### 思路

[力扣官方题解](https://leetcode.cn/problems/longest-substring-with-at-least-k-repeating-characters/solutions/623432/zhi-shao-you-kge-zhong-fu-zi-fu-de-zui-c-o6ww/)

我们枚举最长子串中的字符种类数目，它最小为 1，最大为 ∣Σ∣（字符集的大小，本题中为 26）。

对于给定的字符种类数量 t，我们维护滑动窗口的左右边界 l,r、滑动窗口内部每个字符出现的次数 cnt，以及滑动窗口内的字符种类数目 total。当 total>t 时，我们不断地右移左边界 l，并对应地更新 cnt 以及 total，直到 total≤t 为止。这样，对于任何一个右边界 r，我们都能找到最小的 l（记为 lmin），使得 s[lmin...r] 之间的字符种类数目不多于 t。

对于任何一组 lmin,r 而言，如果 s[lmin...r] 之间存在某个出现次数小于 k （且不为 0，下文不再特殊说明）的字符，我们可以断定：对于任何 l′∈(lmin​,r) 而言，s[l′...r]依然不可能是满足题意的子串，因为：

- 要么该字符的出现次数降为 0，此时子串内虽然少了一个出现次数小于 k 的字符，但字符种类数目也随之小于 t 了；
- 要么该字符的出现次数降为非 0 整数，此时该字符的出现次数依然小于 k。

根据上面的结论，我们发现：当限定字符种类数目为 t 时，满足题意的最长子串，就一定出自某个 s[lmin...r]。因此，在滑动窗口的维护过程中，就可以直接得到最长子串的大小。

此外还剩下一个细节：如何判断某个子串内的字符是否都出现了至少 k 次？我们当然可以每次遍历 cnt 数组，但是这会带来 O(∣Σ∣) 的额外开销。

我们可以维护一个计数器 less，代表当前出现次数小于 k 的字符的数量。注意到：每次移动滑动窗口的边界时，只会让某个字符的出现次数加一或者减一。对于移动右边界 l 的情况而言：

当某个字符的出现次数从 0 增加到 1 时，将 less 加一；

当某个字符的出现次数从 k−1 增加到 k 时，将 less 减一。

对于移动左边界的情形，讨论是类似的。

通过维护额外的计数器 less，我们无需遍历 cnt 数组，就能知道每个字符是否都出现了至少 k 次，同时可以在每次循环时，在常数时间内更新计数器的取值。读者可以自行思考 k=1 时的处理逻辑。

### 代码

```ts
function longestSubstring(s: string, k: number): number {
  const getIndex = (w: string) => w.charCodeAt(0) - "a".charCodeAt(0);
  let res = 0;

  for (let t = 1; t <= 26; t++) {
    let total = 0;
    let less = 0;
    let left = 0;
    const cnt = Array(26).fill(0);

    for (let right = 0; right < s.length; right++) {
      let rightIndex = getIndex(s[right]);
      cnt[rightIndex]++;

      if (cnt[rightIndex] === 1) {
        total++;
        less++;
      }
      if (cnt[rightIndex] === k) {
        less--;
      }

      while (total > t) {
        const leftIndex = getIndex(s[left]);
        cnt[leftIndex]--;

        if (cnt[leftIndex] === k - 1) {
          less++;
        }
        if (cnt[leftIndex] === 0) {
          total--;
          less--;
        }

        left++;
      }

      if (less === 0) res = Math.max(res, right - left + 1);
    }
  }

  return res;
}
```
