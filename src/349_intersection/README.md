# 349. 两个数组的交集

给定两个数组 nums1 和 nums2 ，返回 它们的交集。输出结果中的每个元素一定是 唯一的。我们可以 不考虑输出结果的顺序 。

示例 1：

> 输入：nums1 = [1,2,2,1], nums2 = [2,2]
>
> 输出：[2]

示例 2：

> 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
>
> 输出：[9,4]
>
> 解释：[4,9] 也是可通过的

提示：

1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 1000

## 方法一：暴力解法

直接双层 for 循环遍历

```ts
function intersection(nums1: number[], nums2: number[]): number[] {
  const arr = new Set<number>();

  for (const num1 of nums1) {
    for (const num2 of nums2) {
      if (num1 === num2) arr.add(num1);
    }
  }
  return [...arr];
}
```

去重优化

```ts
function intersection(nums1: number[], nums2: number[]): number[] {
  const arr1 = new Set(nums1);
  const arr2 = new Set(nums2);
  const arr = new Set<number>();

  for (const num1 of arr1) {
    for (const num2 of arr2) {
      if (num1 === num2) arr.add(num1);
    }
  }
  return [...arr];
}
```

## 方法二：二分查找

去重
遍历较短的数组
查找较长的数组

```ts
function intersection1(nums1: number[], nums2: number[]): number[] {
  function binarySearch(arr1: number[], arr2: number[]) {
    const arr: number[] = [],
      len = arr2.length;
    for (const num of arr1) {
      let left = 0,
        right = len - 1;
      while (left <= right) {
        const mid = left + ((right - left) >> 1);
        if (arr2[mid] == num) {
          arr.push(num);
          left = mid + 1;
        } else if (arr2[mid] < num) left = mid + 1;
        else right = mid - 1;
      }
    }
    return arr;
  }

  const len1 = nums1.length,
    len2 = nums2.length;
  const arr1 = [...new Set(len1 <= len2 ? nums1 : nums2)];
  const arr2 = [...new Set(len1 > len2 ? nums1 : nums2)].sort((a, b) => a - b);

  return binarySearch(arr1, arr2);
}
```

## 方法二：去重

```ts
function intersection3(nums1: number[], nums2: number[]): number[] {
  function search(set1: Set<number>, set2: Set<number>) {
    if (set1.size > set2.size) return search(set2, set1);

    const arr = new Set<number>();
    for (const num1 of set1) {
      if (set2.has(num1)) arr.add(num1);
    }
    return arr;
  }

  return [...search(new Set(nums1), new Set(nums2))];
}
```
