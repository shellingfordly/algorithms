# 1438. 绝对差不超过限制的最长连续子数组

给你一个整数数组 nums ，和一个表示限制的整数 limit，请你返回最长连续子数组的长度，该子数组中的任意两个元素之间的绝对差必须小于或者等于 limit 。

如果不存在满足条件的子数组，则返回 0 。

示例 1：

> 输入：nums = [8,2,4,7], limit = 4
>
> 输出：2
>
> 解释：所有子数组如下：
>
> [8] 最大绝对差 |8-8| = 0 <= 4.
>
> [8,2] 最大绝对差 |8-2| = 6 > 4.
>
> [8,2,4] 最大绝对差 |8-2| = 6 > 4.
>
> [8,2,4,7] 最大绝对差 |8-2| = 6 > 4.
>
> [2] 最大绝对差 |2-2| = 0 <= 4.
>
> [2,4] 最大绝对差 |2-4| = 2 <= 4.
>
> [2,4,7] 最大绝对差 |2-7| = 5 > 4.
>
> [4] 最大绝对差 |4-4| = 0 <= 4.
>
> [4,7] 最大绝对差 |4-7| = 3 <= 4.
>
> [7] 最大绝对差 |7-7| = 0 <= 4.
>
> 因此，满足题意的最长子数组的长度为 2 。

示例 2：

> 输入：nums = [10,1,2,4,7,2], limit = 5
>
> 输出：4
>
> 解释：满足题意的最长子数组是 [2,4,7,2]，其最大绝对差 |2-7| = 5 <= 5 。

示例 3：

> 输入：nums = [4,2,2,2,4,4,2,2], limit = 0
>
> 输出：3

提示：

- 1 <= nums.length <= 10^5
- 1 <= nums[i] <= 10^9
- 0 <= limit <= 10^9

## 方法一：暴力解法

**[超出时间限制]**

截取 [left, right] 的子数组，判断其数组的绝对差是否小于等于 limit，如果不满足 left++，满足则不处理，继续遍历

判断子数组的绝对差，将子数组排序，取最后一个和第一个的值的差。

```ts
function longestSubarray(nums: number[], limit: number): number {
  let left = 0,
    res = 0;
  const isTrue = (arr: number[]) => {
    arr.sort((a, b) => a - b);
    return arr[arr.length - 1] - arr[0] <= limit;
  };

  for (let right = 1; right <= nums.length; right++) {
    if (!isTrue(nums.slice(left, right))) left++;
    res = Math.max(res, right - left);
  }
  return res;
}
```

## 方法二

[官方题解](https://leetcode.cn/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/solutions/612688/jue-dui-chai-bu-chao-guo-xian-zhi-de-zui-5bki/)

未完全理解

```ts
function longestSubarray1(nums: number[], limit: number): number {
  let left = 0,
    right = 0,
    res = 0;
  let max: number[] = [];
  let min: number[] = [];

  while (right < nums.length) {
    const num = nums[right];
    while (max.length && max[max.length - 1] < num) max.pop();
    while (min.length && min[min.length - 1] > num) min.pop();

    max.push(num);
    min.push(num);

    while (max.length && min.length && max[0] - min[0] > limit) {
      const old_num = nums[left];
      if (old_num === min[0]) min.shift();
      if (old_num === max[0]) max.shift();
      left++;
    }

    res = Math.max(res, right - left + 1);
    right++;
  }
  return res;
}
```
