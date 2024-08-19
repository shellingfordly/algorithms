# 2958. 最多 K 个重复元素的最长子数组

给你一个整数数组 nums 和一个整数 k 。

一个元素 x 在数组中的 频率 指的是它在数组中的出现次数。

如果一个数组中所有元素的频率都 小于等于 k ，那么我们称这个数组是 好 数组。

请你返回 nums 中 最长好 子数组的长度。

子数组 指的是一个数组中一段连续非空的元素序列。

示例 1：

> 输入：nums = [1,2,3,1,2,3,1,2], k = 2
>
> 输出：6
>
> 解释：最长好子数组是 [1,2,3,1,2,3] ，值 1 ，2 和 3 在子数组中的频率都没有超过 k = 2 。[2,3,1,2,3,1] 和 [3,1,2,3,1,2] 也是好子数组。
>
> 最长好子数组的长度为 6 。

示例 2：

> 输入：nums = [1,2,1,2,1,2,1,2], k = 1
>
> 输出：2
>
> 解释：最长好子数组是 [1,2] ，值 1 和 2 在子数组中的频率都没有超过 k = 1 。[2,1] 也是好子数组。
>
> 最长好子数组的长度为 2 。

示例 3：

> 输入：nums = [5,5,5,5,5,5,5], k = 4
>
> 输出：4
>
> 解释：最长好子数组是 [5,5,5,5] ，值 5 在子数组中的频率没有超过 k = 4 。
>
> 最长好子数组的长度为 4 。

提示：

- 1 <= nums.length <= 10^5
- 1 <= nums[i] <= 10^9
- 1 <= k <= nums.length

## 方法一

### 思路

用 map 记录数字出现的次数，如果 count >= k，则让 left 从 0 开始滑动，将 map 中的计数减 1，直到 count 不再大于 k

### 代码

```ts
function maxSubarrayLength(nums: number[], k: number): number {
  let countMap = new Map<number, number>();
  let left = 0;
  let res = 0;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    let count = countMap.get(num) || 0;

    if (count == k) {
      res = Math.max(res, i - left);
      while (count >= k) {
        const old_num = nums[left];
        const old_count = countMap.get(old_num) || 0;
        countMap.set(old_num, old_count - 1);
        left++;
        count = countMap.get(num)!;
      }
    }
    countMap.set(num, count + 1);
  }

  res = Math.max(res, nums.length - left);

  return res;
}
```

改用对象记录次数，简化代码

```ts
function maxSubarrayLength1(nums: number[], k: number): number {
  let countMap: Record<number, number> = {};
  let left = 0;
  let res = 0;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    countMap[num] = (countMap[num] || 0) + 1;

    while (countMap[num] > k) {
      countMap[nums[left]] -= 1;
      left++;
    }
    res = Math.max(res, i - left + 1);
  }

  return res;
}
```
