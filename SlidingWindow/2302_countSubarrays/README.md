# 2302. 统计得分小于 K 的子数组数目

一个数组的 分数 定义为数组之和 乘以 数组的长度。

比方说，[1, 2, 3, 4, 5] 的分数为 (1 + 2 + 3 + 4 + 5) \* 5 = 75 。
给你一个正整数数组 nums 和一个整数 k ，请你返回 nums 中分数 严格小于 k 的 非空整数子数组数目。

子数组 是数组中的一个连续元素序列。

示例 1：

> 输入：nums = [2,1,4,3,5], k = 10
>
> 输出：6
>
> 解释：
>
> 有 6 个子数组的分数小于 10 ：
>
> - [2] 分数为 2 \* 1 = 2 。
> - [1] 分数为 1 \* 1 = 1 。
> - [4] 分数为 4 \* 1 = 4 。
> - [3] 分数为 3 \* 1 = 3 。
> - [5] 分数为 5 \* 1 = 5 。
> - [2,1] 分数为 (2 + 1) \* 2 = 6 。
>
> 注意，子数组 [1,4] 和 [4,3,5] 不符合要求，因为它们的分数分别为 10 和 36，但我们要求子数组的分数严格小于 10 。

示例 2：

> 输入：nums = [1,1,1], k = 5
>
> 输出：5
>
> 解释：
>
> 除了 [1,1,1] 以外每个子数组分数都小于 5 。
>
> [1,1,1] 分数为 (1 + 1 + 1) \* 3 = 9 ，大于 5 。
>
> 所以总共有 5 个子数组得分小于 5 。

提示：

- 1 <= nums.length <= 105
- 1 <= nums[i] <= 105
- 1 <= k <= 1015

## 方法一

### 思路

经典滑动窗口题

sum 累加 nums[i]，当 sum \* count >= k 时移动左端点；

每次 [left, i] 窗口内的元素满足条件，因此 res += i - left + 1；

### 代码

```ts
function countSubarrays(nums: number[], k: number): number {
  let sum = 0,
    count = 0,
    left = 0,
    res = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    count++;

    while (sum * count >= k) {
      sum -= nums[left];
      count--;
      left++;
    }

    res += i - left + 1;
  }
  return res;
}
```

还可以优化一下，count 其实就是 i - left + 1

```ts
function countSubarrays(nums: number[], k: number): number {
  let sum = 0,
    left = 0,
    res = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    while (sum * (i - left + 1) >= k) {
      sum -= nums[left];
      left++;
    }

    res += i - left + 1;
  }
  return res;
}
```