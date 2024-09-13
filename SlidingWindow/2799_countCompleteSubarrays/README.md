# 2799. 统计完全子数组的数目

给你一个由 正 整数组成的数组 nums 。

如果数组中的某个子数组满足下述条件，则称之为 完全子数组 ：

子数组中 不同 元素的数目等于整个数组不同元素的数目。
返回数组中 完全子数组 的数目。

子数组 是数组中的一个连续非空序列。

示例 1：

> 输入：nums = [1,3,1,2,2]
>
> 输出：4
>
> 解释：完全子数组有：[1,3,1,2]、[1,3,1,2,2]、[3,1,2] 和 [3,1,2,2] 。

示例 2：

> 输入：nums = [5,5,5,5]
>
> 输出：10
>
> 解释：数组仅由整数 5 组成，所以任意子数组都满足完全子数组的条件。子数组的总数为 10 。

提示：

- 1 <= nums.length <= 1000
- 1 <= nums[i] <= 2000

## 方法一

### 思路

其实这题是个普通的滑动窗口问题，先记录下原数组数字出现的个数，再遍历数组，记录数字出现的个数，当满足和原数组个数一样的子数组时，移动左端点。只是在记录有多少个子数组这里，我一开始不是很理解。

实际上，当子数组中满足了个数和原数组一样的条件时，移动 left 直到不满足，这时说明 left 左边的数到次数 right 位置的地方都是满足条件的子数组，因此满足条件的子数组的个数有 left 个；继续遍历时，后面的数字加入窗口不影响 left 之前的数到此处 right 位置的子数组是满足条件的；因此可以每次都执行 ans += left。

容易陷入一个误区，在内部的 while 循环中，是满足了不同数个数相同时 left 移动了，那么移动之后，窗口内 [left, right] 的数肯定是并不满足条件的，但同时也表明 left 之前的个数到此时遍历到的 right 处组合的子数组都是满足条件的。

如果都不满足条件，那么 left 没有移动，并且 left = 0，不管遍历了多个数，只要没有满足 while 循环，结果的累加也是不影响的。如果没有满足条件的子数组，那么可以知道最终遍历到最后一个元素时，也就是原数组是唯一满足条件的，那么 left 将会等于 1，即只有数组本身是和它自己元素个数相同（也就是这个数组没有重复元素）。

> 比如示例 1: nums = [1,3,1,2,2]
>
> 遍历到第一个 2，也就是子数组 [1,3,1,2] 是满足条件的，此时移动 left，[3,1,2] 也是满足条件的，因此 left 最终为 2，ans += left = 2 得到两个子数组；
>
> 后面只有一个 2 了，窗口为 left = 2, right = 4 的数组 [1,2,2] 是不满足条件的，所以 left 没有移动还是为 2，ans += left = 4 得到最终结果；
>
> 因为 [1,3,1,2,2] 和 [3,1,2,2] 都是满足条件的子数组，由于 left 之前的数 1,3 都是满足条件，因此右它们起始到出现第一个 2 满足条件时，后面不管继续加多少个数，不管是不是 2 都不影响子数组已经满足条件了；
>
> 每多一个数，就有 left 个子数组，因此最终结果的计数是没有加上 left 的值 (ans += left)；

### 代码

```ts
function countCompleteSubarrays(nums: number[]): number {
  const m = new Set(nums).size;
  let cnt = new Map();
  let ans = 0,
    left = 0;
  for (const v of nums) {
    // 枚举子数组右端点 v=nums[i]
    cnt.set(v, (cnt.get(v) ?? 0) + 1);
    while (cnt.size === m) {
      const x = nums[left++];
      cnt.set(x, cnt.get(x) - 1);
      if (cnt.get(x) === 0) cnt.delete(x);
    }
    ans += left; // 子数组左端点 < left 的都是合法的
  }
  return ans;
}
```