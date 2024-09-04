# 2962. 统计最大元素出现至少 K 次的子数组

给你一个整数数组 nums 和一个 正整数 k 。

请你统计有多少满足 「 nums 中的 最大 元素」至少出现 k 次的子数组，并返回满足这一条件的子数组的数目。

子数组是数组中的一个连续元素序列。

示例 1：

> 输入：nums = [1,3,2,3,3], k = 2
>
> 输出：6
>
> 解释：包含元素 3 至少 2 次的子数组为：[1,3,2,3]、[1,3,2,3,3]、[3,2,3]、[3,2,3,3]、[2,3,3] 和 [3,3] 。

示例 2：

> 输入：nums = [1,4,2,1], k = 3
>
> 输出：0
>
> 解释：没有子数组包含元素 4 至少 3 次。

提示：

- 1 <= nums.length <= 105
- 1 <= nums[i] <= 106
- 1 <= k <= 105

## 方法一

首先获取到 max 的值；

遍历数据，记录 nums[i] 出现的次数，当 map[max] >= k 时，计算 count++，从左端点移除数字，如果还满足则继续累加 count，直到不满足，回到数组遍历；

```ts
function countSubarrays(nums: number[], k: number): number {
  const map: Record<number, number> = {};
  let left = 0,
    max = 0,
    count = 0,
    res = 0;

  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, nums[i]);
  }

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    map[num] = (map[num] || 0) + 1;

    while (map[max] >= k && left <= i) {
      count++;
      map[nums[left]]--;
      left++;
    }

    res += count;
  }
  return res;
}
```

### 优化

其实不需要记录所有的数字次数，题目要求只需要最大值的数量 >= k 即可，因此可以只记录 max 出现的次数；

首先还是计算出 max；

然后遍历数组时，每当出现 max 时，max_count++；
当 max_count === k 时，进入左端点滑动，一直滑动到左端点为 max 时，此时 max_count 将会减 1，退出循环；

退出循环，left 左边的子数组都是满足条件的；

> 示例 1：nums = [1,3,2,3,3], k = 2
>
> max = 3
> i = 0, num = 1, max_count = 0, left = 0, res = 0 ===> [1]
> i = 1, num = 3, max_count = 1, left = 0, res = 0  ===> [1,3]
> i = 2, num = 2, max_count = 1, left = 0, res = 0  ===> [1,3,2]
> i = 3, num = 3, max_count = 2, left = 2, res = 2, max_count = 1  ===> [1,3,2,3], [3,2,3]
> i = 4, num = 3, max_count = 2, left = 4, res = 2 + 4 = 6, max_count = 1 ===> [2,3,3], [3,3], [3,2,3,3], [1,3,2,3,3]

```ts
function countSubarrays1(nums: number[], k: number): number {
  let left = 0,
    max = 0,
    max_count = 0,
    res = 0;

  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, nums[i]);
  }

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num === max) max_count++;

    while (max_count === k) {
      if (nums[left] === max) max_count--;
      left++;
    }

    res += left;
  }
  return res;
}
```
