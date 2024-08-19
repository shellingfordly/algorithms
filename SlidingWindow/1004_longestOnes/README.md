# 1004. 最大连续 1 的个数 III

给定一个二进制数组 nums 和一个整数 k，如果可以翻转最多 k 个 0 ，则返回 数组中连续 1 的最大个数 。

示例 1：

> 输入：nums = [1,1,1,0,0,0,1,1,1,1,0], K = 2
>
> 输出：6
>
> 解释：[1,1,1,0,0,1,1,1,1,1,1]
> 粗体数字从 0 翻转到 1，最长的子数组长度为 6。

示例 2：

> 输入：nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], K = 3
>
> 输出：10
>
> 解释：[0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
> 粗体数字从 0 翻转到 1，最长的子数组长度为 10。

提示：

- 1 <= nums.length <= 10^5
- nums[i] 不是 0 就是 1
- 0 <= k <= nums.length

## 方法一

记录 0 的个数，当 0 的个数大于 k 时，滑动窗口移动 left 直到 0 的个数小于 k，继续遍历，每次都取与 i - left + 1 取最大值

```ts
function longestOnes(nums: number[], k: number): number {
  let left = 0,
    sum = 0,
    res = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) sum++;
    while (sum > k) {
      if (nums[left] == 0) sum--;
      left++;
    }
    res = Math.max(res, i - left + 1);
  }
  return res;
}
```

## 方法二

使用数组记录 0 出现的下标，当数组长度大于 k 时，left 移动到数组第一个下标的后一位

```ts
function longestOnes1(nums: number[], k: number): number {
  let left = 0,
    res = 0;
  let arr: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) arr.push(i);
    if (arr.length > k) left = (arr.shift() || 0) + 1;
    res = Math.max(res, i - left + 1);
  }
  return res;
}
```
