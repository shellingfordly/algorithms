# 1658. 将 x 减到 0 的最小操作数

给你一个整数数组 nums 和一个整数 x 。每一次操作时，你应当移除数组 nums 最左边或最右边的元素，然后从 x 中减去该元素的值。请注意，需要 修改 数组以供接下来的操作使用。

如果可以将 x 恰好 减到 0 ，返回 最小操作数 ；否则，返回 -1 。

示例 1：

> 输入：nums = [1,1,4,2,3], x = 5
>
> 输出：2
>
> 解释：最佳解决方案是移除后两个元素，将 x 减到 0 。

示例 2：

> 输入：nums = [5,6,7,8,9], x = 4
>
> 输出：-1

示例 3：

> 输入：nums = [3,2,20,1,1,3], x = 10
> 输出：5
> 解释：最佳解决方案是移除后三个元素和前两个元素（总共 5 次操作），将 x 减到 0 。

提示：

- 1 <= nums.length <= 10^5
- 1 <= nums[i] <= 10^4
- 1 <= x <= 10^9

## 方法一

## 思路

由于每次操作只能取最左或最右的元素，类似[1423. 可获得的最大点数](https://github.com/shellingfordly/algorithms/tree/master/SlidingWindow/1423_maxScore)的取牌操作，但是 1423 题是定长的滑块，此处是无法知道取多少个数字的。可以知道的是，当左边累加到大于等于 x 的数时，便可以停手，从右边开始滑动。

首先从左开始累加，加到 sum >= x 结束循环，如果 sum == x 则记录其个数；

然后从右边开始累加，如果 sum > x 则让 left 向左移动( 即 left-- )，减去其值 nums[left]；
需要注意，如果 left 移动到 0 便不用再做减值的操作，相当于此时左边已经没有数累加了，滑块内的值全在右边了。

## 代码

```ts
function minOperations(nums: number[], x: number): number {
  let len = nums.length;
  let left = 0,
    right = len - 1;
  let sum = 0;
  let res = Infinity;

  while (left < len && sum < x) {
    sum += nums[left];
    if (sum == x) {
      res = Math.min(res, left + 1);
      break;
    }
    if (sum < x) left++;
  }
  if (left == len && sum < x) return -1;

  while (right >= 0) {
    sum += nums[right];
    while (sum > x && left >= 0) {
      sum -= nums[left];
      left--;
    }
    if (sum == x) {
      res = Math.min(res, left + 1 + (len - right));
    }
    right--;
  }

  if (res !== Infinity) return res;
  return -1;
}
```
