# 744. 寻找比目标字母大的最小字母

给你一个字符数组 letters，该数组按非递减顺序排序，以及一个字符 target。letters 里至少有两个不同的字符。

返回 letters 中大于 target 的最小的字符。如果不存在这样的字符，则返回 letters 的第一个字符。

示例 1：

> 输入: letters = ["c", "f", "j"]，target = "a"
>
> 输出: "c"
>
> 解释：letters 中字典上比 'a' 大的最小字符是 'c'。

示例 2:

> 输入: letters = ["c","f","j"], target = "c"
>
> 输出: "f"
>
> 解释：letters 中字典顺序上大于 'c' 的最小字符是 'f'。

示例 3:

> 输入: letters = ["x","x","y","y"], target = "z"
>
> 输出: "x"
>
> 解释：letters 中没有一个字符在字典上大于 'z'，所以我们返回 letters[0]。

提示：

- 2 <= letters.length <= 104
- letters[i] 是一个小写字母
- letters 按非递减顺序排序
- letters 最少包含两个不同的字母
- target 是一个小写字母

## 方法一

和[35. 搜索插入位置](https://github.com/shellingfordly/algorithms/tree/master/BinarySearch/35_searchInsert)类似

### 思路

使用闭区间写法，不同的是，由于本题找的是大于目标字母的，因此 left 左边得包含 target；

查询结束[0, left - 1] 的闭区间都 <= target, 因此 left 为第一个大于目标字母的；

有两种情况，如果所有的字母都 >= target，取到 left = 0 符合题意；

如果所有字母都 <= target 取到 left = letters.length，则返回 letters[0]；

### 代码

```ts
function nextGreatestLetter(letters: string[], target: string): string {
  let left = 0,
    right = letters.length - 1,
    mid = 0;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (letters[mid] <= target) left = mid + 1;
    else right = mid - 1;
  }

  if (left >= letters.length) return letters[0];
  return letters[left];
}
```
