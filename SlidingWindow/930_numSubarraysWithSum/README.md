# 930. 和相同的二元子数组

给你一个二元数组 nums ，和一个整数 goal ，请你统计并返回有多少个和为 goal 的 非空 子数组。

子数组 是数组的一段连续部分。

示例 1：

> 输入：nums = [1,0,1,0,1], goal = 2
>
> 输出：4
>
> 解释：
> 有 4 个满足题目要求的子数组：[1,0,1]、[1,0,1,0]、[0,1,0,1]、[1,0,1]

示例 2：

> 输入：nums = [0,0,0,0,0], goal = 0
>
> 输出：15

提示：

- 1 <= nums.length <= 3 \* 104
- nums[i] 不是 0 就是 1
- 0 <= goal <= nums.length

## 方法一: 前缀和

[官方解答](https://leetcode.cn/problems/binary-subarrays-with-sum/solutions/864087/he-xiang-tong-de-er-yuan-zi-shu-zu-by-le-5caf/)

### 思路

遍历 nums，每次记录下当前下标 i 之前的所有数字之和(前缀和)的数量，然后再累加 nums[i]；

那么可以知道，在 i 处的和为 sum，而此时 i 处是否能找到和为 goal 的子数组，就需要找到 前缀和 == sum - goal 的，也就是 cnt.get(sum - goal) 所计的数量，有多少个(前缀和)就能和 num[i] 组合出多少个和为 goal 的子数组；

比如: nums = [1,0,1,0,1], goal = 2

- i = 0, num = 1, cnt = { 0: 1 }, sum = 1, res += cnt[1-2=-1] = 0 + 0 = 0;
- i = 1, num = 0, cnt = { 0: 1, 1: 1 }, sum = 1, res += cnt[1-2=-1] = 0 + 0 = 0;
- i = 2, num = 1, cnt = { 0: 1, 1: 2 }, sum = 2, res += cnt[2-2=0] = 0 + 1 = 1;
- i = 3, num = 0, cnt = { 0: 1, 1: 2, 2: 1 }, sum = 2, res += cnt[2-2=0] = 1 + 1 = 2;
- i = 4, num = 1, cnt = { 0: 1, 1: 2, 2: 2 }, sum = 3, res += cnt[3-2=1] = 2 + 2 = 4;

分析:

- 当 i = 2 时，num = 1，前缀和为 1，sum = 2，可以看出此时 [1,0,1] 已经满足条件，而 sum - goal = 0 表示子数组和刚好为 goal，也就是说有 (前缀和为 0 的) 1 个子数组，即[1,0,1]；
- 当 i = 4 时，num = 1，前缀和为 2，sum = 3，可以看出此时 [0,1,0,1], [1,0,1] 是满足条件的，而 sum - goal = 1 表示此时累加到 i 处的和已经大于 goal 了，因此只有除掉前缀和为 1 之前的数 (即第一个数[1])，前缀和为 1 之后的数可以到 i 处组合成满足条件的子数组 (即 [0,1] 两个数)；

### 代码

```ts
function numSubarraysWithSum(nums: number[], goal: number): number {
  let sum = 0;
  const cnt = new Map<number, number>();
  let ret = 0;
  for (const num of nums) {
    cnt.set(sum, (cnt.get(sum) || 0) + 1);
    sum += num;
    ret += cnt.get(sum - goal) || 0;
  }
  return ret;
}
```

## 方法二：滑动窗口

[官方解答](https://leetcode.cn/problems/binary-subarrays-with-sum/solutions/864087/he-xiang-tong-de-er-yuan-zi-shu-zu-by-le-5caf/)

[l1, r] 为以 r 为结尾和小于或者等于 goal 的最长子序列，[l2, r] 为以 r 为结尾和小于 goal 的最长子序列，所以 [l1, l2) 为起点 r 为终点的序列都为可行解（也可能刚好 l1 == l2）

### 思路

left1 是 sum1 > goal 移动，left2 是 sum1 >= goal 移动，因此可知 left2 会比 left1 先移动，而 [left1, left2) 的区间则是满足到 right 处的子数组和为 goal 的最长最数组，即此处有 left2 - left1 个满足条件的子数组；

比如: nums = [1,0,1,0,1], goal = 2

- right = 0, num = 1, sum1 = 1, left1 = 0, sum2 = 1, left2 = 0, res += 0 - 0 = 0; [0, 0)
- right = 1, num = 0, sum1 = 1, left1 = 0, sum2 = 1, left2 = 0, res += 0 - 0 = 0; [0, 0)
- right = 2, num = 1, sum1 = 2, left1 = 0, sum2 = 2, left2 = 1, res += 1 - 0 = 1; [0, 1) [1,0,1]
- right = 3, num = 0, sum1 = 2, left1 = 0, sum2 = 2, left2 = 1, res += 1 - 0 = 2; [0, 1) [1,0,1,0]
- right = 4, num = 1, sum1 = 3, left1 = 1, sum2 = 3, left2 = 3, res += 3 - 1 = 4; [1, 3) [0,1,0,1], [1,0,1]

### 代码

```ts
function numSubarraysWithSum1(nums: number[], goal: number): number {
  let left1 = 0,
    left2 = 0,
    sum1 = 0,
    sum2 = 0,
    res;

  for (let right = 0; right < nums.length; right++) {
    sum1 += nums[right];
    while (left1 <= right && sum1 > goal) {
      sum1 -= nums[left1];
      left1++;
    }
    sum2 += nums[right];
    while (left2 <= right && sum2 >= goal) {
      sum2 -= nums[left2];
      left2++;
    }
    res += left2 - left1;
  }

  return res;
}
```
