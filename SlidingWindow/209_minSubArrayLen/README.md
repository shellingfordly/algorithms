# 209. 长度最小的子数组

给定一个含有 n 个正整数的数组和一个正整数 target 。

找出该数组中满足其总和大于等于 target 的长度最小的子数组[numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。

示例 1：

> 输入：target = 7, nums = [2,3,1,2,4,3]
>
> 输出：2
>
> 解释：子数组 [4,3] 是该条件下的长度最小的子数组。

示例 2：

> 输入：target = 4, nums = [1,4,4]
>
> 输出：1

示例 3：

> 输入：target = 11, nums = [1,1,1,1,1,1,1,1]
>
> 输出：0

提示：

- 1 <= target <= 109
- 1 <= nums.length <= 105
- 1 <= nums[i] <= 105

## 方法一：滑动窗口

比较简单的滑动窗口题，累加 nums[i]，当 >= target 时记录一下个数，然后从 left = 0 开始减少累加的数，看是否还满足条件，直到不满足退出内部循环，继续遍历 nums。

```ts
function minSubArrayLen(target: number, nums: number[]): number {
  let res = Infinity;
  let left = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    count += nums[i];

    while (count >= target) {
      res = Math.min(res, i - left + 1);

      count -= nums[left];
      left++;
    }
  }
  if (res === Infinity) return 0;

  return res;
}
```
