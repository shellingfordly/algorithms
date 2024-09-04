# 1358. 包含所有三种字符的子字符串数目

给你一个字符串 s ，它只包含三种字符 a, b 和 c 。

请你返回 a，b 和 c 都 至少 出现过一次的子字符串数目。

示例 1：

> 输入：s = "abcabc"
>
> 输出：10
>
> 解释：包含 a，b 和 c 各至少一次的子字符串为 "abc", "abca", "abcab", "abcabc", "bca", "bcab", "bcabc", "cab", "cabc" 和 "abc" (相同字符串算多次)。

示例 2：

> 输入：s = "aaacb"
>
> 输出：3
>
> 解释：包含 a，b 和 c 各至少一次的子字符串为 "aaacb", "aacb" 和 "acb" 。

示例 3：

> 输入：s = "abc"
>
> 输出：1

提示：

- 3 <= s.length <= 5 x 10^4
- s 只包含字符 a，b 和 c 。

## 方法

此题和[2799. 统计完全子数组的数目](https://github.com/shellingfordly/algorithms/tree/master/SlidingWindow/2799_countCompleteSubarrays)，[713. 乘积小于 K 的子数组](https://github.com/shellingfordly/algorithms/tree/master/SlidingWindow/713_numSubarrayProductLessThanK)，都是类似的题，都是求子数组/字符串个数，在计数时都是累加之前满足条件的个数。

此类题求的都是满足条件的个数；可以知道的是，前面满足条件的子数组/字符串，和后面出现满足条件的子数组/字符串，两则拼接出来的子数组/字符串依然是满足条件的；因此每次都累加满足条件的个数。

和找最大最小的滑动窗口不同的是，此类题的窗口区间内维护的子元素不一定是满足条件的，而找最大最小时的窗口内元素是满足条件的区间。

### 思路

遍历字符串，当满足 abc 都 >=1 时说明出现一个子字符串符合条件，由于本题中子字符串长度不确定，无法像前两题一样用 left 去计算处 left 左边满足条件的子字符串，因此我用 count 去做一个计数；

当找到满足 abc >= 1 时，count++，移动 left 直到退出循环，此时 left 左边能满足条件的子字符串个数为 count；继续遍历 s 当再次出现满足 abc >= 1 时，此时满足条件的字符和上一次满足条件的字符组合时也能满足条件，因此将 count 累加到最终结果。

> 示例 1：s = "abcabc"
>
> i = 2, s' = abc, count = 1, left = 1 ==> res = 1, s' = bc --- (abc)
> i = 3, s' = bca, count = 2, left = 2 ==> res = 1 + 2 = 3, s' = ca --- (bca, abca)
> i = 4, s' = cab, count = 3, left = 3 ==> res = 3 + 3 = 6, s' = ab --- (cab, bcab, abcab)
> i = 5, s' = abc, count = 4, left = 4 ==> res = 6 + 4 = 10, s' = bc --- (abc, cabc, bcabc, abcabc)
> return 10

### 代码

```ts
function numberOfSubstrings(s: string): number {
  const map: Record<string, number> = { a: 0, b: 0, c: 0 };
  let res = 0,
    count = 0,
    left = 0;

  for (let i = 0; i < s.length; i++) {
    map[s[i]]++;
    while (map.a >= 1 && map.b >= 1 && map.c >= 1) {
      count++;
      map[s[left]]--;
      left++;
    }
    res += count;
  }

  return res;
}
```
