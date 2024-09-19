35. 搜索插入位置

给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

请必须使用时间复杂度为 O(log n) 的算法。

示例 1:

> 输入: nums = [1,3,5,6], target = 5
>
> 输出: 2

示例 2:

> 输入: nums = [1,3,5,6], target = 2
>
> 输出: 1

示例 3:

> 输入: nums = [1,3,5,6], target = 7
> 输出: 4

提示:

- 1 <= nums.length <= 104
- -104 <= nums[i] <= 104
- nums 为 无重复元素 的 升序 排列数组
- -104 <= target <= 104

## 常规写法

找到目标值返回，找不到时 left - 1 < target，left 即是 target 插入的位置

> 示例: nums = [1, 3, 5, 6], target = 4;
>
> left = 0, right = 3, mid = 1, value = 3
>
> lett = 2, right = 3, mid = 2, value = 5
>
> left = 2, right = 1, break

```ts
function searchInsert(nums: number[], target: number): number {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const value = nums[mid];

    if (value === target) return mid;
    else if (value > target) right = mid - 1;
    else left = mid + 1;
  }

  return left;
}
```

## 闭区间写法

与常规一致，nums[mid] >= target 时都移动 right，最终 right 必然小于 left 退出 while 循环；

left 左边必然小于 target，因此 left 即是 target 插入的位置

```ts
function searchInsert(nums: number[], target: number): number {
  let left = 0,
    right = nums.length - 1; // 闭区间 [left, right]
  // 区间不为空
  while (left <= right) {
    // 循环不变量：
    // nums[left-1] < target
    // nums[right+1] >= target
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] < target) {
      left = mid + 1; // 范围缩小到 [mid+1, right]
    } else {
      right = mid - 1; // 范围缩小到 [left, mid-1]
    }
  }
  return left;
}
```

## 左闭右开区间写法

right 取 mid，会使 left === right 时无法退出循环，此时 left/right 所在位置 >= target，left 左边都 < target，依然返回 left

> 示例: nums = [1, 3, 5, 6], target = 4;
>
> left = 0, right = 3, mid = 1, value = 3
>
> lett = 2, right = 3, mid = 2, value = 5
>
> left = 2, right = 2, break

```ts
function searchInsert(nums: number[], target: number): number {
  let left = 0,
    right = nums.length; // 左闭右开区间 [left, right)
  // 区间不为空
  while (left < right) {
    // 循环不变量：
    // nums[left-1] < target
    // nums[right] >= target
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] < target) {
      left = mid + 1; // 范围缩小到 [mid+1, right)
    } else {
      right = mid; // 范围缩小到 [left, mid)
    }
  }
  return left; // 或者 right
}
```

## 开区间写法

left 取 mid，导致 left 左边包含 left 的数字小于 target，right 所在位置 >= target

> 示例: nums = [1, 3, 5, 6], target = 4;
>
> left = 0, right = 3, mid = 1, value = 3
>
> lett = 1, right = 3, mid = 2, value = 5
>
> left = 1, right = 2, break

```ts
function searchInsert(nums: number[], target: number): number {
  let left = -1,
    right = nums.length; // 开区间 (left, right)
  // 区间不为空
  while (left + 1 < right) {
    // 循环不变量：
    // nums[left] < target
    // nums[right] >= target
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] < target) {
      left = mid; // 范围缩小到 (mid, right)
    } else {
      right = mid; // 范围缩小到 (left, mid)
    }
  }
  return right;
}
```
