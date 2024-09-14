34. 在排序数组中查找元素的第一个和最后一个位置

给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。

如果数组中不存在目标值 target，返回 [-1, -1]。

你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。

示例 1：

> 输入：nums = [5,7,7,8,8,10], target = 8
>
> 输出：[3,4]

示例 2：

> 输入：nums = [5,7,7,8,8,10], target = 6
>
> 输出：[-1,-1]

示例 3：

> 输入：nums = [], target = 0
>
> 输出：[-1,-1]

提示：

- 0 <= nums.length <= 10^5
- -10^9 <= nums[i] <= 10^9
- nums 是一个非递减数组
- -10^9 <= target <= 10^9

## 方法：二分查找

### 思路

两次二分查找，一次一直往左边找，一次一直往右边找

### 代码

```ts
function searchRange(nums: number[], target: number): number[] {
  let left = 0,
    right = nums.length - 1;
  let res: number[] = [-1, -1];

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      res[0] = mid;
      right = mid - 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    }
  }

  left = 0;
  right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      res[1] = mid;
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    }
  }

  return res;
}
```

## 官解

### 思路

left：一直往左找最左边等于 target 的数

right：一直往左找到最左边第一个大于 target 的数，那边此数左边的一个数就是 target

找 right 时，若 nums[mid] === target 则不会复制 res，因此 right 就是大于 target 的第一个数，在 target 的后一个位置

### 代码

```ts
function searchRange2(nums: number[], target: number): number[] {
  function search(lower: boolean) {
    let left = 0,
      right = nums.length - 1,
      res = nums.length;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] > target || (lower && nums[mid] >= target)) {
        res = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return res;
  }

  let left = search(true);
  let right = search(false) - 1;

  if (
    left <= right &&
    right < nums.length &&
    nums[left] === target &&
    nums[right] === target
  )
    return [left, right];

  return [-1, -1];
}
```
