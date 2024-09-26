# 268. 丢失的数字

给定一个包含 [0, n] 中 n 个数的数组 nums ，找出 [0, n] 这个范围内没有出现在数组中的那个数。

示例 1：

> 输入：nums = [3,0,1]
>
> 输出：2
>
> 解释：n = 3，因为有 3 个数字，所以所有的数字都在范围 [0,3] 内。2 是丢失的数字，因为它没有出现在 nums 中。

示例 2：

> 输入：nums = [0,1]
>
> 输出：2
>
> 解释：n = 2，因为有 2 个数字，所以所有的数字都在范围 [0,2] 内。2 是丢失的数字，因为它没有出现在 nums 中。

示例 3：

> 输入：nums = [9,6,4,2,3,5,7,0,1]
>
> 输出：8
>
> 解释：n = 9，因为有 9 个数字，所以所有的数字都在范围 [0,9] 内。8 是丢失的数字，因为它没有出现在 nums 中。

示例 4：

> 输入：nums = [0]
>
> 输出：1
>
> 解释：n = 1，因为有 1 个数字，所以所有的数字都在范围 [0,1] 内。1 是丢失的数字，因为它没有出现在 nums 中。

提示：

- n == nums.length
- 1 <= n <= 104
- 0 <= nums[i] <= n
- nums 中的所有数字都 独一无二

进阶：你能否实现线性时间复杂度、仅使用额外常数空间的算法解决此问题?

## 方法一：排序

[官方解答](https://leetcode.cn/problems/missing-number/solutions/1085105/diu-shi-de-shu-zi-by-leetcode-solution-naow/?envType=problem-list-v2&envId=binary-search)

由于 nums 中只包含 [0, n]，并且不重复，那必然在 [0, n] 中缺少一个数

排序 nums 后直接遍历 0 到 n，如果 nums[i] !== i 那必然缺少此数

时间复杂度 O(nlogn)
空间复杂度：O(logn)

```ts
function missingNumber(nums: number[]): number {
  nums.sort((a, b) => a - b);
  const n: number = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i] !== i) {
      return i;
    }
  }
  return n;
}
```

## 方法二：哈希集合

不需要排序，记录 nums 中出现的数字，遍历 0 到 n，返回没有的数字

时间复杂度：O(n)
空间复杂度：O(n)

```ts
function missingNumber(nums: number[]): number {
  const set = new Set();
  const n: number = nums.length;
  for (let i = 0; i < n; i++) {
    set.add(nums[i]);
  }
  let missing: number = -1;
  for (let i = 0; i <= n; i++) {
    if (!set.has(i)) {
      missing = i;
      break;
    }
  }
  return missing;
}
```

## 方法：数学方法

0 到 n 之和为 n \* (n + 1)) / 2，计算出 nums 的和，相减即是缺少的数

时间复杂度：O(n)
空间复杂度：O(1)

```ts
var missingNumber = function (nums) {
  const n: number = nums.length;
  let total: number = Math.floor((n * (n + 1)) / 2);
  let arrSum: number = 0;
  for (let i = 0; i < n; i++) {
    arrSum += nums[i];
  }
  return total - arrSum;
};
```
