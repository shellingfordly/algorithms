# 1695. 删除子数组的最大得分

给你一个正整数数组 nums ，请你从中删除一个含有 若干不同元素 的子数组。删除子数组的 得分 就是子数组各元素之 和 。

返回 只删除一个 子数组可获得的 最大得分 。

如果数组 b 是数组 a 的一个连续子序列，即如果它等于 a[l],a[l+1],...,a[r] ，那么它就是 a 的一个子数组。

示例 1：

> 输入：nums = [4,2,4,5,6]
>
> 输出：17
>
> 解释：最优子数组是 [2,4,5,6]

示例 2：

> 输入：nums = [5,2,1,2,5,2,1,2,5]
>
> 输出：8
>
> 解释：最优子数组是 [5,2,1] 或 [1,2,5]

提示：

- 1 <= nums.length <= 105
- 1 <= nums[i] <= 104

## 方法一

### 思路

做了几道不定长之后，对题目的思路更清晰了一点，不定长都需要借助哈希表来记录出现的数字或者字符，有时候需要记录下标、个数，有时候只需要知道是否出现过。

本题就是找到不重复元素的连续子数组的最大和。

用 set 记录出现的数字，当出现重复时，取得一个和；
用 left 标记下标，从头开始，删除数字，直到 set 中不出现此数字，每次将和减去删除的数，则继续遍历

### 代码

count 累加每个值
left 记录不重复子数组的开始下标
hash 记录出现的数字

当出现重复数字时，取 count 和历史 count 的最大值；
left 从 0 开始，取出 nums[left]，在 hash 中删除数字，直到 hash 中不在出现此数字，则 left 所处的位置即是下一个不重复子数组的开始下标，需要注意每次应同时将 count 减去 nums[left]。

特殊处理，当没有重复数字出现时，还去要再和 count 取一次最大值

当 left 已经移动过后，尾部不再出现重复数字时，也需要再和 count 取一次最大值

```ts
function maximumUniqueSubarray(nums: number[]): number {
  let res = 0;
  let count = 0;
  let left = 0;
  let hash = new Set<number>();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (hash.has(num)) {
      res = Math.max(res, count);
      while (hash.has(num)) {
        const old_num = nums[left];
        hash.delete(old_num);
        count -= old_num;
        left++;
      }
    }

    hash.add(num);
    count += num;
  }

  res = Math.max(res, count);

  return res;
}
```
