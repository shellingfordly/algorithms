# 2537. 统计好子数组的数目

给你一个整数数组 nums 和一个整数 k ，请你返回 nums 中 好 子数组的数目。

一个子数组 arr 如果有 至少 k 对下标 (i, j) 满足 i < j 且 arr[i] == arr[j] ，那么称它是一个 好 子数组。

子数组 是原数组中一段连续 非空 的元素序列。

示例 1：

> 输入：nums = [1,1,1,1,1], k = 10
>
> 输出：1
>
> 解释：唯一的好子数组是这个数组本身。

示例 2：

> 输入：nums = [3,1,4,3,2,2,4], k = 2
>
> 输出：4
>
> 解释：总共有 4 个不同的好子数组：
>
> - [3,1,4,3,2,2] 有 2 对。
> - [3,1,4,3,2,2,4] 有 3 对。
> - [1,4,3,2,2,4] 有 2 对。
> - [4,3,2,2,4] 有 2 对。

提示：

- 1 <= nums.length <= 10^5
- 1 <= nums[i], k <= 10^9

## 方法一

### 思路

1. 遍历 nums 记录每个 nums[i] 出现的次数

2. 使用 count 记录出现了多少对能满足 arr[i] == arr[j] 的数量

> 比如 [1, 1]:
>
> 第一个 1 出现时 map[1] = 0，count 不计数，第二个 1 出现时，map[1] = 1，能组成一对满足条件的
>
> 比如 [1, 1, 1, 1, 1]:
>
> - i = 0, count = 0, map[1] = 1 -- (下面表示组合的下标)
> - i = 1, count = 1, map[1] = 2 -- [0,1]
> - i = 2, count = 3, map[1] = 3 -- [1,2] [0,1,2]
> - i = 3, count = 6, map[1] = 4 -- [2,3] [1,2,3] [0,1,2,3]
> - i = 3, count = 10, map[1] = 5 -- [3,4] [2,3,4] [1,2,3,4] [0,1,2,3,4]
>
> 如上所述，当多次出现同一个数时，能组成多对不同的满足条件的子数组。

3. 移动 left，找到更多可以满足条件的子数组

从 left = 0 移除掉 map 中 nums[left] 数的计数，此时会有两种情况；

如果移除了 nums[left] 后面的子数组依然有 >= k 对满足条件的数，那么 left 可以移动；

如果移除了 nums[left] 后 [left, i] 的子数组不能满足条件，那么 left 不能移动，应该继续移动 i 找到满足移除了 nums[left] 后，[left, i] 区间的依然可以满足条件的，那么 left 移动到不满足条件的下标时，left 左端的数都是能找到满足条件的子数组的。也就是 left + 1 个子数组都是满足条件的。

> 注意：count 表示现在有 c 对满足 arr[i] == arr[j] 的数量，那么当移除了一个 nums[left]，假如 nums[left] 是能和后面的 nums[i] 凑对的，那么有 map[nums[left]] 个 nums[left]，移除了一个，就少了 map[nums[left]] - 1 对凑对的数，因此 count - (map[nums[left]] - 1) >= k 就表示移动 left 后是否还能满足 >= k 对数。
>
> 比如 [1, 1, 1, 1, 1], map[1] = 5, count = 10 对，移除第一个 1 变成 [1, 1, 1, 1]，就会少 4 对凑 arr[i] == arr[j] 的数，count = 10 - 4 = 6；

4. 累加满足条件的子数组个数

如果 count >= k 也就是找到了至少 k 对满足 arr[i] == arr[j] 条件的数，那么结果加一

如果没有进入 while 循环，此时 left = 0，若能满足 count >= k，那么说明只有一对满足条件，即 left + 1；

如果进入了 while 循环，那么 left 将会移动到下一个无法满足条件的数的下标，那么 left 左端的数都能组合成功，即有 left + 1 对；

### 代码

```ts
function countGood(nums: number[], k: number): number {
  let left = 0,
    res = 0,
    count = 0;
  const map: Record<number, number> = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    //有多少对满足arr[i] == arr[j]的数量
    count += map[num] || 0;
    map[num] = (map[num] || 0) + 1;

    //left右移动一位是否还能满足好子数组
    while (count - (map[nums[left]] - 1) >= k) {
      map[nums[left]]--;
      count -= map[nums[left]];
      left++;
    }

    if (count >= k) {
      res += left + 1;
    }
  }

  return res;
}
```
