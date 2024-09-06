# 2762. 不间断子数组

给你一个下标从 0 开始的整数数组 nums 。nums 的一个子数组如果满足以下条件，那么它是 不间断 的：

i，i + 1 ，...，j 表示子数组中的下标。对于所有满足 i <= i1, i2 <= j 的下标对，都有 0 <= |nums[i1] - nums[i2]| <= 2 。
请你返回 不间断 子数组的总数目。

子数组是一个数组中一段连续 非空 的元素序列。

示例 1：

> 输入：nums = [5,4,2,4]
>
> 输出：8
>
> 解释：
> 大小为 1 的不间断子数组：[5], [4], [2], [4] 。
> 大小为 2 的不间断子数组：[5,4], [4,2], [2,4] 。
> 大小为 3 的不间断子数组：[4,2,4] 。
> 没有大小为 4 的不间断子数组。
> 不间断子数组的总数目为 4 + 3 + 1 = 8 。
> 除了这些以外，没有别的不间断子数组。

示例 2：

> 输入：nums = [1,2,3]
>
> 输出：6
>
> 解释：
> 大小为 1 的不间断子数组：[1], [2], [3] 。
> 大小为 2 的不间断子数组：[1,2], [2,3] 。
> 大小为 3 的不间断子数组：[1,2,3] 。
> 不间断子数组的总数目为 3 + 2 + 1 = 6 。

提示：

- 1 <= nums.length <= 105
- 1 <= nums[i] <= 109

## 方法一

### 思路

题目要求子数组的两个数之差的绝对值 <= 2；那么当维护的滑动窗口内的最大值和最小值之差 > 2 时，就需要对窗口进行滑动，找到满足条件的窗口后再继续遍历数组。

使用一个 map 来记录出现过的数的数量，每次遍历 nums 时，取窗口内数的最大值和最小值之差做判断；如果 > 2，则需要移动 left，当 map[nums[left]] === 0 时，需要删除 map 中的计数；每次遍历取到 i - left + 1 个数。

> 值得注意的是：每次遍历都需要取出 map 的 key 值，再做取最大值最小值的数做差，这里不会超时吗；
>
> 事实上 map 中最多维护 3 个数，由于绝对值差必须 <= 2，当有第 4 个数出现时，绝对值差必然 > 2，此时会进入 while 循环直到删除一个或多个数能满足对值差 <= 2 的条件才会退出，继续遍历原数组；因此对 map 的操作不会使其超时。
>
> 比如 [1,2,3] 满足任意两个数对值差 <= 2，[1,2,3,4]则会进入循环删除数字 1；

### 代码

```ts
function continuousSubarrays(nums: number[]): number {
  let max = 0,
    min = Infinity,
    left = 0,
    res = 0;
  const map: Record<number, number> = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = (map[nums[i]] || 0) + 1;
    let keys = Object.keys(map);
    max = Number(keys[keys.length - 1]);
    min = Number(keys[0]);

    while (Math.abs(max - min) > 2 && left <= i) {
      const v = nums[left];
      if (--map[v] === 0) delete map[v];

      if (max === v || min === v) {
        keys = Object.keys(map);
        max = Number(keys[keys.length - 1]);
        min = Number(keys[0]);
      }
      left++;
    }
    res += i - left + 1;
  }
  return res;
}
```

优化 max 和 min 的取值

```ts
function continuousSubarrays1(nums: number[]): number {
  const map = new Map<number, number>();
  let left = 0,
    res = 0;

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);

    while (Math.abs(Math.max(...map.keys()) - Math.min(...map.keys())) > 2) {
      const v = nums[left];
      if (map.get(v) === 1) map.delete(v);
      else map.set(v, map.get(v)! - 1);
      left++;
    }

    res += i - left + 1;
  }
  return res;
}
```
