# 713. 乘积小于 K 的子数组

给你一个整数数组 nums 和一个整数 k ，请你返回子数组内所有元素的乘积严格小于 k 的连续子数组的数目。

示例 1：

> 输入：nums = [10,5,2,6], k = 100
>
> 输出：8
>
> 解释：8 个乘积小于 100 的子数组分别为：[10]、[5]、[2]、[6]、[10,5]、[5,2]、[2,6]、[5,2,6]。
> 需要注意的是 [10,5,2] 并不是乘积小于 100 的子数组。

示例 2：

> 输入：nums = [1,2,3], k = 0
> 输出：0

提示:

- 1 <= nums.length <= 3 \* 104
- 1 <= nums[i] <= 1000
- 0 <= k <= 106

## 方法一

此题和[2799. 统计完全子数组的数目](https://github.com/shellingfordly/algorithms/tree/master/SlidingWindow/2799_countCompleteSubarrays)有一些类似。稍微有一些不同是在对数量计算时。

遍历数组对 nums[i] 进行累乘，如果 sum < k，那说明 i 之前的数字累乘都是满足条件的；当 sum >= k 时，则需要移动 left 并减去其数字直到满足 < k，那么此时 [left, i] 内的数组是满足的，因此有 i - left + 1 个数字符合要求。

> 示例 1：nums = [10,5,2,6]
> 可以知道 [10], [5], [10,5], [5,2], [2], [5,2,6], [2,6], [6] 是符合条件的
> 
> i = 0, num = 10, sum = 10, left = 0 ==> count = 0 - 0 + 1 = 1, [10]
> i = 1, num = 5, sum = 50, left = 0 ==> count = 1 - 0 + 1 = 2, [5], [10,5]
> i = 2, num = 2, sum = 100, left = 1 ==> count = 2 - 1 + 1 = 2, [5,2], [2]
> i = 3, num = 6, sum = 60, left = 1 ==> count = 3 - 1 + 1 = 3, [5,2,6], [2,6], [6] 
> result = 1 + 2 + 2 + 3 = 8

```ts
function numSubarrayProductLessThanK(nums: number[], k: number): number {
  let sum = 1;
  let count = 0;
  let left = 0;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    sum = sum * num;
    while (sum >= k && left <= i) {
      sum = sum / nums[left];
      left++;
    }
    count += i - left + 1;
  }
  return count;
}
```
