# 1574. 删除最短的子数组使剩余数组有序

给你一个整数数组 arr ，请你删除一个子数组（可以为空），使得 arr 中剩下的元素是 非递减 的。

一个子数组指的是原数组中连续的一个子序列。

请你返回满足题目要求的最短子数组的长度。

示例 1：

> 输入：arr = [1,2,3,10,4,2,3,5]
>
> 输出：3
>
> 解释：我们需要删除的最短子数组是 [10,4,2] ，长度为 3 。剩余元素形成非递减数组 [1,2,3,3,5] 。
>
> 另一个正确的解为删除子数组 [3,10,4] 。

示例 2：

> 输入：arr = [5,4,3,2,1]
>
> 输出：4
>
> 解释：由于数组是严格递减的，我们只能保留一个元素。所以我们需要删除长度为 4 的子数组，要么删除 [5,4,3,2]，要么删除 [4,3,2,1]。

示例 3：

> 输入：arr = [1,2,3]
>
> 输出：0
>
> 解释：数组已经是非递减的了，我们不需要删除任何元素。

示例 4：

> 输入：arr = [1]
>
> 输出：0

提示：

- 1 <= arr.length <= 10^5
- 0 <= arr[i] <= 10^9

## 方法一：滑动窗口

### 思路

题目要求找到删除最短连续子数组，使剩余数组变成递增的有序数组。

使用双指针 [left, right] 找到一个区间，使得剩余的数组有序，那么我们可以找到左边有序的数组和右边有序的数组，判断是否可以拼接有序，最终找到最小的区间。

- 首先从左遍历数组找到第一个 arr[i] < arr[i - 1] 的位置，使 left = i - 1，那么左边有序；
  - 如果 left == -1，说明数组遍历结束都没有找到，因此原数组有序，返回 0；
  - 如果 left != -1，那么将 left 右边的子数组删除，剩余有序，找到一个 res；
- 然后从右遍历数组，必须满足 arr[right - 1] <= arr[right]
  - 如果不满足，则 right 左边的数已经无法有序
- 满足 arr[right - 1] <= arr[right] 时，通过判断 arr[right] < arr[left] 来对 left 进行左移，来找到右边是否有更多小于左端点的数
  - 如果 arr[right] > arr[left]，说明 right 右边的子数组和 left 左边的子数组能拼接成有序数组，记录一个区间数量 right - left - 1
  - 如果 arr[right] < arr[left]，则无法进行拼接，left 左移尝试去找能满足 < arr[right] 处的数

注意：有一个特殊的情况，当 arr[len - 2] > arr[len - 1] 时，就无法进入寻找右边子数组的 while 循环，此时应该判断 arr[len - 1] >= arr[left] 是否成立，如果为真，那么应该将 right - left - 1 和 len - left - 1 进行取小。

其实这种情况就是会比 left 找到后，left 右边的数组少一个 arr[len - 1]，也就是 (len - left - 1) - 1

### 代码

```ts
function findLengthOfShortestSubarray(arr: number[]): number {
  let res = Infinity;
  let len = arr.length;
  let left = -1;
  let right = len - 1;

  for (let i = 1; i < len; i++) {
    if (arr[i] < arr[i - 1]) {
      left = i - 1;
      break;
    }
  }
  if (left === -1) return 0;
  res = len - left - 1;

  while (arr[right - 1] <= arr[right]) {
    while (left > 0 && arr[right] < arr[left]) {
      left--;
    }
    res = Math.min(res, right - left - 1);
    right--;
  }

  if (arr[right] >= arr[left]) {
    res = Math.min(res, right - left - 1);
  }

  return res;
}
```

## 方法二

[灵茶山艾府](https://leetcode.cn/problems/shortest-subarray-to-be-removed-to-make-array-sorted/solutions/2189149/dong-hua-yi-xie-jiu-cuo-liang-chong-xie-iijwz/)

其实先从右边遍历也是差不多的，稍微又一点不一样就是少了特殊情况的处理

同样从右边找到不满足 arr[right - 1] <= arr[right]的 right，找到一个结果 res = right

然后从左边遍历，由于 left = 0 左边没有数字，因此此情况特殊判断进入循环；

而先固定了右边，再遍历左边，所以只有在右边小于左边时 (arr[right] < arr[left])，才需要 right 右移；

如果 arr[left] < arr[right]，说明 left 处满足，则会记录 right - left - 1；

> 对比：因此 left = 0 的情况被进入循环并且符合循环内的判断；而 right = len - 1 的情况无法进入循环，因为 right = len - 2 处可能有数，如果 arr[len - 2] > arr[len - 1] > arr[left]，此时就会 arr[len - 2] 就会循环拿到一个错误的 right - left - 1 数量；因此先固定右端点会更优一点。

```ts
function findLengthOfShortestSubarray1(arr: number[]): number {
  let len = arr.length;
  let res = 0;
  let left = 0;
  let right = len - 1;

  while (right >= 0 && arr[right - 1] <= arr[right]) right--;
  if (right == 0) return 0;
  res = right;

  while (left == 0 || arr[left - 1] <= arr[left]) {
    while (right < len && arr[right] < arr[left]) right++;
    res = Math.min(res, right - left - 1);
    left++;
  }
  return res;
}
```
