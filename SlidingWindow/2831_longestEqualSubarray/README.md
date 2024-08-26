# 2831. 找出最长等值子数组

给你一个下标从 0 开始的整数数组 nums 和一个整数 k 。

如果子数组中所有元素都相等，则认为子数组是一个 等值子数组 。注意，空数组是 等值子数组 。

从 nums 中删除最多 k 个元素后，返回可能的最长等值子数组的长度。

子数组 是数组中一个连续且可能为空的元素序列。

示例 1：

> 输入：nums = [1,3,2,3,1,3], k = 3
>
> 输出：3
>
> 解释：最优的方案是删除下标 2 和下标 4 的元素。
> 删除后，nums 等于 [1, 3, 3, 3] 。
> 最长等值子数组从 i = 1 开始到 j = 3 结束，长度等于 3 。
> 可以证明无法创建更长的等值子数组。

示例 2：

> 输入：nums = [1,1,2,2,1,1], k = 2
>
> 输出：4
>
> 解释：最优的方案是删除下标 2 和下标 3 的元素。
> 删除后，nums 等于 [1, 1, 1, 1] 。
> 数组自身就是等值子数组，长度等于 4 。
> 可以证明无法创建更长的等值子数组。

提示：

- 1 <= nums.length <= 105
- 1 <= nums[i] <= nums.length
- 0 <= k <= nums.length

## 方法一：暴力解法

双层循环，超时无法通过

记录下 nums[j] 不等于 nums[i] 的个数，大于 k 时退出内部循环，记录 nums[i]的最长等值子谁，一直遍历 i 到数组结束。

```ts
function longestEqualSubarray(nums: number[], k: number): number {
  let res = 0;

  for (let i = 0; i < nums.length; i++) {
    let j = i + 1;
    let count = 0;
    while (j < nums.length) {
      if (count > k) break;
      if (nums[j] !== nums[i]) count++;
      j++;
    }
    res = Math.max(res, j - i - count);
  }

  return res;
}
```

## 方法二：滑动窗口+map 记录

优化内部 while 循环，用数组记录下 nums[right] 的次数，当滑动窗口内部的数字超出条件时，删除前面的数 left++。

由于窗口内部最多可删除 k 个数字，因此 right - left + 1 - count[nums[left]] == k 时满足条件，大于 k 时则需要移动 left 的值使其满足条件。

```ts
function longestEqualSubarray(nums: number[], k: number): number {
  let res = 0;
  let count: number[] = Array(nums.length + 1).fill(0);

  for (let left = 0, right = 0; right < nums.length; right++) {
    count[nums[right]]++;
    while (right - left + 1 - count[nums[left]] > k) {
      count[nums[left]]--;
      left++;
    }
    res = Math.max(res, count[nums[right]]);
  }

  return res;
}
```
