# 2529. 正整数和负整数的最大计数

给你一个按 非递减顺序 排列的数组 nums ，返回正整数数目和负整数数目中的最大值。

换句话讲，如果 nums 中正整数的数目是 pos ，而负整数的数目是 neg ，返回 pos 和 neg 二者中的最大值。
注意：0 既不是正整数也不是负整数。

示例 1：

> 输入：nums = [-2,-1,-1,1,2,3]
>
> 输出：3
>
> 解释：共有 3 个正整数和 3 个负整数。计数得到的最大值是 3 。

示例 2：

> 输入：nums = [-3,-2,-1,0,0,1,2]
>
> 输出：3
>
> 解释：共有 2 个正整数和 3 个负整数。计数得到的最大值是 3 。

示例 3：

> 输入：nums = [5,20,66,1314]
>
> 输出：4
>
> 解释：共有 4 个正整数和 0 个负整数。计数得到的最大值是 4 。

提示：

- 1 <= nums.length <= 2000
- -2000 <= nums[i] <= 2000
- nums 按 非递减顺序 排列。

进阶：你可以设计并实现时间复杂度为 O(log(n)) 的算法解决此问题吗？

## 方法一: 分开写法

第一次二分找到 < 0 的所有数，因此负数个数为 left；

第二次二分找到 <= 0 的所有数，正数的个数为 nums.length - left；

```ts
function maximumCount(nums: number[]): number {
  let left = 0,
    right = nums.length - 1,
    res = 0;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] < 0) left = mid + 1;
    else right = mid - 1;
  }
  (res = left), (left = 0), (right = nums.length - 1);
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] <= 0) left = mid + 1;
    else right = mid - 1;
  }
  return Math.max(res, nums.length - left);
}
```

## 方法二：合并写法

第一次找小于 0 的数，第二次找小于 1 的数

```ts
function maximumCount1(nums: number[]): number {
  function search(target: number) {
    let left = 0,
      right = nums.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] < target) left = mid + 1;
      else right = mid - 1;
    }
    return left;
  }

  return Math.max(search(0), nums.length - search(1));
}
```
