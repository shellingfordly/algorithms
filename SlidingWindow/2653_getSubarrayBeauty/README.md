# 2653. 滑动子数组的美丽值

给你一个长度为 n 的整数数组 nums ，请你求出每个长度为 k 的子数组的 美丽值 。

一个子数组的 美丽值 定义为：如果子数组中第 x 小整数 是 负数 ，那么美丽值为第 x 小的数，否则美丽值为 0 。

请你返回一个包含 n - k + 1 个整数的数组，依次 表示数组中从第一个下标开始，每个长度为 k 的子数组的 美丽值 。

子数组指的是数组中一段连续 非空 的元素序列。

示例 1：

> 输入：nums = [1,-1,-3,-2,3], k = 3, x = 2
>
> 输出：[-1,-2,-2]
>
> 解释：总共有 3 个 k = 3 的子数组。
> 第一个子数组是 [1, -1, -3] ，第二小的数是负数 -1 。
> 第二个子数组是 [-1, -3, -2] ，第二小的数是负数 -2 。
> 第三个子数组是 [-3, -2, 3] ，第二小的数是负数 -2 。

示例 2：

> 输入：nums = [-1,-2,-3,-4,-5], k = 2, x = 2
>
> 输出：[-1,-2,-3,-4]
>
> 解释：总共有 4 个 k = 2 的子数组。
> [-1, -2] 中第二小的数是负数 -1 。
> [-2, -3] 中第二小的数是负数 -2 。
> [-3, -4] 中第二小的数是负数 -3 。
> [-4, -5] 中第二小的数是负数 -4 。

示例 3：

> 输入：nums = [-3,1,2,-3,0,-3], k = 2, x = 1
>
> 输出：[-3,0,-3,-3,-3]
>
> 解释：总共有 5 个 k = 2 的子数组。
> [-3, 1] 中最小的数是负数 -3 。
> [1, 2] 中最小的数不是负数，所以美丽值为 0 。
> [2, -3] 中最小的数是负数 -3 。
> [-3, 0] 中最小的数是负数 -3 。
> [0, -3] 中最小的数是负数 -3 。

提示：

- n == nums.length
- 1 <= n <= 105
- 1 <= k <= n
- 1 <= x <= k
- -50 <= nums[i] <= 50

## 方法一：滑动+排序

获取 k 位数的子数组，排序子数组，取下标位 x-1 的数即是第 x 小的数

由于每次滑动都对整个数组做了一次排序，无法通过

```ts
function getSubarrayBeauty(nums: number[], k: number, x: number): number[] {
  let res: number[] = [];

  let arr: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (i >= k) arr.shift();
    arr.push(num);

    if (arr.length == k) {
      const _arr = [...arr].sort((a, b) => a - b);
      const value = _arr[x - 1];
      res.push(value < 0 ? value : 0);
    }
  }

  return res;
}
```

## 方法二：滑动+枚举

直接排序的时间复杂度太高，无法通过 leetcode 测试用例

由于规定 **-50 <= nums[i] <= 50** ，因此我们用一个长度为 101 的数组来记录值出现的次数

由于负数无法做下标，因此将 nums[i] 的值加 50 处记录 nums[i] 出现的次数
cnt 数组的 i = nums[i] + 50，因此记录的次数相当于根据 nums 值的从小到大排序的

每次滑动时，遍历 cnt 的前 50 位，取 cnt[i] 当次数达到要求的 x 次时，此处下标减 50 即为想要的第 x 小的值
因为 i = nums[i] + 50，因此 nums[i] = i - 50；
大于 50 的下标就不用管了，因为大于 0 的美丽值都为 0；

```ts
function getSubarrayBeauty1(nums: number[], k: number, x: number): number[] {
  const BIAS = 50;
  let n = nums.length;
  let cnt = Array.from({ length: BIAS * 2 + 1 }).fill(0) as number[];
  let ans = Array.from({ length: n - k + 1 }).fill(0) as number[];

  // 先往窗口内添加 k-1 个数
  for (let i = 0; i < k - 1; ++i) {
    ++cnt[nums[i] + BIAS];
  }

  for (let i = k - 1; i < n; ++i) {
    // 进入窗口（保证窗口有恰好 k 个数）
    ++cnt[nums[i] + BIAS];
    let left = x;

    // 去找美力值
    for (let j = 0; j < BIAS; ++j) {
      // 暴力枚举负数范围 [-50,-1]
      left -= cnt[j];
      if (left <= 0) {
        // 找到美丽值
        ans[i - k + 1] = j - BIAS;
        break;
      }
    }

    --cnt[nums[i - k + 1] + BIAS]; // 离开窗口
  }

  return ans;
}
```
