# 2444. 统计定界子数组的数目

给你一个整数数组 nums 和两个整数 minK 以及 maxK 。

nums 的定界子数组是满足下述条件的一个子数组：

子数组中的 最小值 等于 minK 。
子数组中的 最大值 等于 maxK 。
返回定界子数组的数目。

子数组是数组中的一个连续部分。

示例 1：

> 输入：nums = [1,3,5,2,7,5], minK = 1, maxK = 5
>
> 输出：2
>
> 解释：定界子数组是 [1,3,5] 和 [1,3,5,2] 。

示例 2：

> 输入：nums = [1,1,1,1], minK = 1, maxK = 1
>
> 输出：10
>
> 解释：nums 的每个子数组都是一个定界子数组。共有 10 个子数组。

提示：

- 2 <= nums.length <= 105
- 1 <= nums[i], minK, maxK <= 106

## 方法一：滑动窗口

### 思路

[灵茶山艾府](https://leetcode.cn/problems/count-subarrays-with-fixed-bounds/solutions/1895713/jian-ji-xie-fa-pythonjavacgo-by-endlessc-gag2/)

由题可知，需要统计 minK 和 maxK 同时存在的子数组，遍历 nums 记录 minK 出现的下标和 maxK 出现的下标；

情况一，当 minI 和 maxI 同时存在时，就存在 min(minI, maxI) + 1 个子数组；

> 比如: nums = [0,1,2,3], minK = 1, maxK = 3, 那么 [0,1,2,3] 和 [1,2,3] 都满足条件，minI = 1, maxI = 3，那么存在 min(minI, maxI) + 1 = 2 个子数组；其实就是在 minI 和 maxK 满足条件时左端有几个数就有几个子数字，因为要包含两个数，因此得取最小值 min(minI, maxI)

情况二，出现 [minK, maxK] 区间之外的数，子数组不能包含区间之外的数，用 i0 记录区间之外的数的下标，则存在 min(minI, maxI) − i0；

初始化 minI, maxI, i0 均为 −1；若遍历到 i 处时，区间之外的数不存在，则 i0 = -1 即等式与情况一 中一致 min(minI, maxI) + 1，当 minI 和 maxI 同时出现时，取到 i 处满足条件的子数组个数；

若 min(minI, maxI) − i0 < 0, 则寿命 minI 或者 minK 有一个在不合法数 i0 的左边，则此 i 处取的子数组个数为 0；

> 比如: nunms = [1, 3, 5, 2, 7, 5], minK = 1, maxK = 5；
>
> i = 2 时，minI = 0, maxI = 2, 存在 [1,3,5], min(0, 2) - (-1) = 1；
>
> i = 3 时，minI = 0, maxI = 2, 存在 [1,3,5,2], min(0, 2) - (-1) = 1；
>
> i = 4 时，minI = 0, maxI = 2, 不存在, min(0, 2) - 4 = -4；不可包含 i0
>
> i = 5 时，minI = 0, maxI = 5, 不存在, min(0, 5) - 4 = -4；minI 在 i0 左边，maxI 在 i0 右边
>
> 若后面存在满足条件的数，比如[1, 3, 5, 2, 7, 5, 1]
>
> i = 6 时，minI = 6, maxI = 5, 存在 [5,1], min(6, 5) - 4 = 1；minI 和 maxI 在 i0 右边同时存在

### 代码

```ts
function countSubarrays(nums: number[], minK: number, maxK: number): number {
  let ans = 0,
    minI = -1,
    maxI = -1,
    i0 = -1;
  for (let i = 0; i < nums.length; i++) {
    const x = nums[i];
    if (x === minK) minI = i;
    if (x === maxK) maxI = i;
    if (x < minK || x > maxK) i0 = i;
    ans += Math.max(Math.min(minI, maxI) - i0, 0);
  }
  return ans;
}
```
