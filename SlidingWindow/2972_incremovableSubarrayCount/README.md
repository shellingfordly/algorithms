# 2972. 统计移除递增子数组的数目 II

给你一个下标从 0 开始的 正 整数数组 nums 。

如果 nums 的一个子数组满足：移除这个子数组后剩余元素 严格递增 ，那么我们称这个子数组为 移除递增 子数组。比方说，[5, 3, 4, 6, 7] 中的 [3, 4] 是一个移除递增子数组，因为移除该子数组后，[5, 3, 4, 6, 7] 变为 [5, 6, 7] ，是严格递增的。

请你返回 nums 中 移除递增 子数组的总数目。

注意 ，剩余元素为空的数组也视为是递增的。

子数组 指的是一个数组中一段连续的元素序列。

示例 1：

> 输入：nums = [1,2,3,4]
>
> 输出：10
>
> 解释：10 个移除递增子数组分别为：[1], [2], [3], [4], [1,2], [2,3], [3,4], [1,2,3], [2,3,4] 和 [1,2,3,4]。移除任意一个子数组后，剩余元素都是递增的。注意，空数组不是移除递增子数组。

示例 2：

> 输入：nums = [6,5,7,8]
>
> 输出：7
>
> 解释：7 个移除递增子数组分别为：[5], [6], [5,7], [6,5], [5,7,8], [6,5,7] 和 [6,5,7,8] 。
> nums 中只有这 7 个移除递增子数组。

示例 3：

> 输入：nums = [8,7,6,6]
> 输出：3
> 解释：3 个移除递增子数组分别为：[8,7,6], [7,6,6] 和 [8,7,6,6] 。注意 [8,7] 不是移除递增子数组因为移除 [8,7] 后 nums 变为 [6,6] ，它不是严格递增的。

提示：

- 1 <= nums.length <= 10^5
- 1 <= nums[i] <= 10^9

## 方法: 双指针

[灵茶山艾府](https://leetcode.cn/problems/count-the-number-of-incremovable-subarrays-ii/)

### 思路

想要使数组完全递增，可以将其分成两段，从左遍历找到满足递增的 [0, left] 区间，从右遍历找到 [right, len - 1] 区间，如果 nums[left] < nums[right] 则两段组合满足递增，删除 [left, right] 区间则使数组变成递增。

有几种情况：

1. left === len - 1，说明原数组本身递增，此时可删除的树木有 (len \* (len + 1)) / 2 种；

2. left !== len - 1

- left 段

此时，left 左端的子数组满足递增条件；那么 [0, left] 区间有 left + 1 种删除方式，以及删除 left 之后的全部 1 种方式，也就是总共 left + 2 种方法；

比如 [1,2,3,1] 中，left = 2 时可以删除 [1,2,3,1],[2,3,1],[3,1] 三种子数组方式，以及删除最后一个 [1] 一种方式，总共 4 种删除方式；

- right 段

找到 [right, len - 1] 区间满足递增的子数组，如果 nums[right] >= nums[right + 1] 可以直接退出循环；
如果 nums[left] >= nums[right] 则移动 left 找到可以和右端组合的部分；当 nums[left] < nums[right]，可以有 left + 1 种，以及删除 [left+1, right-1] 区间一种，也是 left + 2 种方式；

而当 left = -1 时，其实就是删除左端全部，只留右端递增的部分一种，也满足 left + 2 种；

比如 [1,2,3,1,2] 中：

- left = 2 时可以删除 [1,2,3,1,2],[2,3,1,2],[3,1,2],[1,2] 四种；
- right = 4 时 left = 0， 可以删除 [2,3,1],[1,2,3,1] 两种；
- right = 3 时 left = -1，可以删除[1,2,3] 一种；

### 代码

```ts
function incremovableSubarrayCount(nums: number[]): number {
  let left = 0,
    res = 0,
    len = nums.length;

  while (left < len - 1) {
    if (nums[left] >= nums[left + 1]) break;
    left++;
  }

  if (left === len - 1) return (len * (len + 1)) / 2;

  res += left + 2;

  for (let right = len - 1; right > 0; right--) {
    if (right < len - 1 && nums[right] >= nums[right + 1]) break;

    while (left >= 0 && nums[left] >= nums[right]) left--;

    res += left + 2;
  }

  return res;
}
```
