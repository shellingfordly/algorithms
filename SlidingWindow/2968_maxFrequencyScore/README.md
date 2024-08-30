# 2968. 执行操作使频率分数最大

给你一个下标从 0 开始的整数数组 nums 和一个整数 k 。

你可以对数组执行 至多 k 次操作：

从数组中选择一个下标 i ，将 nums[i] 增加 或者 减少 1 。
最终数组的频率分数定义为数组中众数的 频率 。

请你返回你可以得到的 最大 频率分数。

众数指的是数组中出现次数最多的数。一个元素的频率指的是数组中这个元素的出现次数。

示例 1：

> 输入：nums = [1,2,6,4], k = 3
>
> 输出：3
>
> 解释：我们可以对数组执行以下操作：
>
> - 选择 i = 0 ，将 nums[0] 增加 1 。得到数组 [2,2,6,4] 。
> - 选择 i = 3 ，将 nums[3] 减少 1 ，得到数组 [2,2,6,3] 。
> - 选择 i = 3 ，将 nums[3] 减少 1 ，得到数组 [2,2,6,2] 。
>   元素 2 是最终数组中的众数，出现了 3 次，所以频率分数为 3 。
>   3 是所有可行方案里的最大频率分数。

示例 2：

> 输入：nums = [1,4,4,2,4], k = 0
>
> 输出：3
>
> 解释：我们无法执行任何操作，所以得到的频率分数是原数组中众数的频率 3 。

提示：

- 1 <= nums.length <= 105
- 1 <= nums[i] <= 109
- 0 <= k <= 1014

## 方法一：暴力解法

遍历 nums，取 nums[i] 做滑动窗口，找到 k 次操作能满足将 nums[j] 变成 nums[i] 的个数

```ts
function maxFrequencyScore(nums: number[], k: number): number {
  let res = 0;
  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    let step = 0;
    let left = 0;
    for (let j = 0; j < nums.length; j++) {
      step += Math.abs(nums[j] - nums[i]);
      while (step > k) {
        step -= Math.abs(nums[left] - num[i]);
        left++;
      }
      res = Math.max(res, Math.abs(j - left) + 1);
    }
  }
  return res;
}
```

对 nums 去重再查，由于双层 for 循环依然很慢

```ts
function maxFrequencyScore(nums: number[], k: number): number {
  let res = 0;
  nums = nums.sort((a, b) => a - b);
  const hash = new Set<number>();
  for (let i = 0; i < nums.length; i++) {
    hash.add(nums[i]);
  }

  for (const num of hash) {
    let step = 0;
    let left = 0;
    for (let j = 0; j < nums.length; j++) {
      step += Math.abs(nums[j] - num);
      while (step > k) {
        step -= Math.abs(nums[left] - num);
        left++;
      }
      res = Math.max(res, Math.abs(j - left) + 1);
    }
  }
  return res;
}
```

## 方法二：滑动窗口

### 思路

一次滑动窗口[灵茶山艾府 题解](https://leetcode.cn/problems/apply-operations-to-maximize-frequency-score/solutions/2569301/hua-dong-chuang-kou-zhong-wei-shu-tan-xi-nuvr/)

当窗口内有偶数个数时，比如 [1, 2]，将数组变成 [1, 1] 或者 [2, 2] 都只需要 1 次操作
当窗口内有奇数个数时，比如 [1, 2, 3]，将数组变成 [1, 1, 1] 需要操作 3 次，将数组变成 [2, 2, 2] 需要操作 2 次，将数组变成 [3, 3, 3] 需要操作 3 次；因此将数组中的数变成中位数是操作次数最少的。
而对于题目中，给定操作次数 k 去寻找更多的数，也就是将子数组中的数都变成中位数去找到更多的数满足操作 <= k。
所以我们的滑动窗口寻找的就是将窗口内的数都变成窗口中位数次数 <= k 的最长窗口。

而将一个数组中的数都变成中位数需要多少次操作：

当窗口内有偶数个数时，比如 [1, 2, 3, 4]，将数组变成 [2, 2, 2, 2] 需要操作 4 次，将数组变成 [3, 3, 3, 3] 也需要操作 4 次，也就是中位数用 2 或者 3 不影响操作次数。

也就是 nums[3] - nums[1] + nums[2] - nums[1] + nums[1] - nums[0] = nums[3] + nums[2] - nums[1] - nums[0]；可以得出 nums[n] + nums[n-1] + ... + nums[n/2] - nums[n/2-1] - ... - num[0]；也就是右边的数减去左边的数。

当窗口内有技术个数时，比如[1, 2, 3, 4, 5]，将数组变成 [3, 3, 3, 3, 3] 需要操作 6 次；

也就是 nums[4] - num[2] + num[3] - nums[2] + nums[2] - nums[1] + nums[2] - nums[0] = nums[4] + num[3] - nums[1] - nums[0]；可以得出 nums[n] + nums[n-1] + ... + nums[n/2+1] - nums[n/2-1] - ... - num[0]；也就是除中位数外右边的数减去左边的数。

也就可以知道，当我们进行滑动窗口时，右边进入的数一定是 +nums[right]，此时原本的中位数向左移动，也就是需要 -nums[(left + right) / 2]；

而滑出窗口时，左边出去的原本是减掉的(-nums[left])，就应该加回去 +nums[left]，此时原来的中位数也是向左移，新的中位数是原来处于右边的数，因此需要减去 -nums[(left + right + 1) / 2]

### 代码

```ts
function maxFrequencyScore(nums: number[], k: number): number {
  nums = nums.sort((a, b) => a - b);
  let left = 0;
  let res = 0;
  let s = 0;
  for (let right = 0; right < nums.length; right++) {
    s += nums[right] - nums[Math.floor((left + right) / 2)];
    while (s > k) {
      s += nums[left] - nums[Math.floor((left + right + 1) / 2)];
      left++;
    }
    res = Math.max(res, right - left + 1);
  }
  return res;
}
```
