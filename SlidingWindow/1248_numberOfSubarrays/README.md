# 1248. 统计「优美子数组」

给你一个整数数组 nums 和一个整数 k。如果某个连续子数组中恰好有 k 个奇数数字，我们就认为这个子数组是「优美子数组」。

请返回这个数组中 「优美子数组」 的数目。

示例 1：

> 输入：nums = [1,1,2,1,1], k = 3
>
> 输出：2
>
> 解释：包含 3 个奇数的子数组是 [1,1,2,1] 和 [1,2,1,1] 。

示例 2：

> 输入：nums = [2,4,6], k = 1
>
> 输出：0
>
> 解释：数列中不包含任何奇数，所以不存在优美子数组。

示例 3：

> 输入：nums = [2,2,2,1,2,2,1,2,2,2], k = 2
>
> 输出：16

提示：

- 1 <= nums.length <= 50000
- 1 <= nums[i] <= 10^5
- 1 <= k <= nums.length

## 方法一：滑动窗口

### 思路

本题和 [930. 和相同的二元子数组](https://github.com/shellingfordly/algorithms/tree/master/SlidingWindow/930_numSubarraysWithSum) 几乎一摸一样，只是多一个是否为奇数的判断。

### 代码

```ts
function numberOfSubarrays(nums: number[], k: number): number {
  let left1 = 0,
    left2 = 0,
    res = 0,
    count1 = 0,
    count2 = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] % 2 !== 0) count1++;
    if (nums[right] % 2 !== 0) count2++;

    while (count1 > k) {
      if (nums[left1] % 2 !== 0) count1--;
      left1++;
    }
    while (count2 >= k) {
      if (nums[left2] % 2 !== 0) count2--;
      left2++;
    }

    res += left2 - left1;
  }

  return res;
}
```

## 方法二：前缀和

```ts
function numberOfSubarrays1(nums: number[], k: number): number {
  const map = new Map();
  let count = 0,
    res = 0;

  for (let i = 0; i < nums.length; i++) {
    map.set(count, (map.get(count) || 0) + 1);
    if (nums[i] % 2 !== 0) count++;
    res += map.get(count - k) || 0;
  }
  return res;
}
```
