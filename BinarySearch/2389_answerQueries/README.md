# 2389. 和有限的最长子序列

给你一个长度为 n 的整数数组 nums ，和一个长度为 m 的整数数组 queries 。

返回一个长度为 m 的数组 answer ，其中 answer[i] 是 nums 中 元素之和小于等于 queries[i] 的 子序列 的 最大 长度 。

子序列 是由一个数组删除某些元素（也可以不删除）但不改变剩余元素顺序得到的一个数组。

示例 1：

> 输入：nums = [4,5,2,1], queries = [3,10,21]
>
> 输出：[2,3,4]
>
> 解释：queries 对应的 answer 如下：
>
> - 子序列 [2,1] 的和小于或等于 3 。可以证明满足题目要求的子序列的最大长度是 2 ，所以 answer[0] = 2 。
> - 子序列 [4,5,1] 的和小于或等于 10 。可以证明满足题目要求的子序列的最大长度是 3 ，所以 answer[1] = 3 。
> - 子序列 [4,5,2,1] 的和小于或等于 21 。可以证明满足题目要求的子序列的最大长度是 4 ，所以 answer[2] = 4 。

示例 2：

> 输入：nums = [2,3,4,5], queries = [1]
>
> 输出：[0]
>
> 解释：空子序列是唯一一个满足元素和小于或等于 1 的子序列，所以 answer[0] = 0 。

提示：

- n == nums.length
- m == queries.length
- 1 <= n, m <= 1000
- 1 <= nums[i], queries[i] <= 106

## 方法一：滑动窗口

由题可知，我们需要找到合小于等于 queries[i] 的窗口；由于可以随意的删除 nums 中的元素，因此窗口不需要连续；可以将 nums 排序，再进行滑动窗口，累加 nums[i]，当 sum > queries[i]，移动 left 找到最长的窗口。

```ts
function answerQueries(nums: number[], queries: number[]): number[] {
  function search(query: number) {
    let sum = 0,
      left = 0,
      res = 0;
    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
      while (sum > query) {
        sum -= nums[left];
        left++;
      }
      res = Math.max(res, i - left + 1);
    }
    return res;
  }
  nums = nums.sort((a, b) => a - b);
  return queries.map((v) => search(v));
}
```

## 方法二：二分查找

直接对 nums 二分不是很好求和，先将 nums 转变为 i 处的求和数组

再对 arr 数组进行二分查找，找到全部 <= queries[i] 的数，left 即是全部个数

```ts
function answerQueries1(nums: number[], queries: number[]): number[] {
  nums = nums.sort((a, b) => a - b);
  const arr: number[] = [];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    arr.push(sum);
  }
  function search(query: number) {
    let left = 0,
      right = nums.length - 1;
    while (left <= right) {
      const mid = left + ((right - left) >> 1);
      if (arr[mid] <= query) left = mid + 1;
      else right = mid - 1;
    }
    return left;
  }
  return queries.map((v) => search(v));
}
```
