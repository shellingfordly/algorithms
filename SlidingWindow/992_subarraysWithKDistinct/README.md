# 992. K 个不同整数的子数组

给定一个正整数数组 nums 和一个整数 k，返回 nums 中 「好子数组」 的数目。

如果 nums 的某个子数组中不同整数的个数恰好为 k，则称 nums 的这个连续、不一定不同的子数组为 「好子数组 」。

例如，[1,2,3,1,2] 中有 3 个不同的整数：1，2，以及 3。
子数组 是数组的 连续 部分。

示例 1：

> 输入：nums = [1,2,1,2,3], k = 2
>
> 输出：7
>
> 解释：恰好由 2 个不同整数组成的子数组：[1,2], [2,1], [1,2], [2,3], [1,2,1], [2,1,2], [1,2,1,2].

示例 2：

> 输入：nums = [1,2,1,3,4], k = 3
>
> 输出：3
>
> 解释：恰好由 3 个不同整数组成的子数组：[1,2,1,3], [2,1,3], [1,3,4].

提示：

- 1 <= nums.length <= 2 \* 10^4
- 1 <= nums[i], k <= nums.length

## 方法一：滑动窗口+双指针

### 思路

固定右端点，找到左边满足「好子数组」的端点

遍历数组，记录数字出现的次数，当记录的数字个数 his.size === k 时，满足「好子数组」条件；

当 his1.size > k 时，移动 left1，移动结束 his1.size === k，[left1, i] 处是满足条件的区域

当 his2.size >= k 时，移动 left2，每次移动结束 his2.size < k，[left2, i] 处永远是不满足条件的区域

因此，在 i 处时，左边的端点 [left1, left2] 是满足条件的数字，每次有 left2 - left1 个子数组

> 示例: nums = [1, 2, 1, 2, 3], k = 2
> 
> i = 0, num = 1, l1 = 0, l2 = 0
> 
> i = 1, num = 2, l1 = 0, l2 = 1
> 
> i = 2, num = 1, l1 = 0, l2 = 2
> 
> i = 3, num = 2, l1 = 0, l2 = 3
> 
> i = 4, num = 3, l1 = 3, l2 = 4

### 代码

```ts
function subarraysWithKDistinct(nums: number[], k: number): number {
  const his1 = new Map<number, number>();
  const his2 = new Map<number, number>();
  let res = 0,
    left1 = 0,
    left2 = 0;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    his1.set(num, (his1.get(num) || 0) + 1);
    his2.set(num, (his2.get(num) || 0) + 1);

    while (his1.size > k) {
      const old_num = nums[left1];
      his1.set(old_num, (his1.get(old_num) || 0) - 1);
      if (his1.get(old_num) === 0) his1.delete(old_num);
      left1++;
    }

    while (his2.size >= k) {
      const old_num = nums[left2];
      his2.set(old_num, (his2.get(old_num) || 0) - 1);
      if (his2.get(old_num) === 0) his2.delete(old_num);
      left2++;
    }

    res += left2 - left1;
  }

  return res;
}
```
