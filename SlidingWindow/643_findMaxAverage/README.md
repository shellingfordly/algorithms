# 643. 子数组最大平均数 I

给你一个由 n 个元素组成的整数数组 nums 和一个整数 k 。

请你找出平均数最大且 长度为 k 的连续子数组，并输出该最大平均数。

任何误差小于 10-5 的答案都将被视为正确答案。

示例 1：

> 输入：nums = [1,12,-5,-6,50,3], k = 4
> 输出：12.75
> 解释：最大平均数 (12-5-6+50)/4 = 51/4 = 12.75

示例 2：

> 输入：nums = [5], k = 1
> 输出：5.00000

提示：

- n == nums.length
- 1 <= k <= n <= 105
- -104 <= nums[i] <= 104

## 思路

获取 k 位数的平均数，遍历数组，每次减去第 i 位的数字，加上第 (k + i) 位的数字，对比平均数取最大值。

## 代码

```ts
function findMaxAverage(nums: number[], k: number): number {
  let count = 0;
  let sum = 0;
  for (let i = 0; i < k; i++) {
    count += nums[i];
  }
  sum = count / k;

  for (let i = 0, j = k; j < nums.length; i++, j++) {
    count -= nums[i];
    count += nums[j];
    sum = Math.max(sum, count / k);
  }
  return sum;
}
```
