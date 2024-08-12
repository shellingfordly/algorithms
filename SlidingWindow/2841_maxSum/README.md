# 2841. 几乎唯一子数组的最大和

给你一个整数数组 nums 和两个正整数 m 和 k 。

请你返回 nums 中长度为 k 的 几乎唯一 子数组的 最大和 ，如果不存在几乎唯一子数组，请你返回 0 。

如果 nums 的一个子数组有至少 m 个互不相同的元素，我们称它是 几乎唯一 子数组。

子数组指的是一个数组中一段连续 非空 的元素序列。

示例 1：

> 输入：nums = [2,6,7,3,1,7], m = 3, k = 4
> 输出：18
> 解释：总共有 3 个长度为 k = 4 的几乎唯一子数组。分别为 [2, 6, 7, 3] ，[6, 7, 3, 1] 和 [7, 3, 1, 7] 。这些子数组中，和最大的是 [2, 6, 7, 3] ，和为 18 。

示例 2：

> 输入：nums = [5,9,9,2,4,5,4], m = 1, k = 3
> 输出：23
> 解释：总共有 5 个长度为 k = 3 的几乎唯一子数组。分别为 [5, 9, 9] ，[9, 9, 2] ，[9, 2, 4] ，[2, 4, 5] 和 [4, 5, 4] 。这些子数组中，和最大的是 [5, 9, 9] ，和为 23 。

示例 3：

> 输入：nums = [1,2,1,2,1,2,1], m = 3, k = 3
> 输出：0
> 解释：输入数组中不存在长度为 k = 3 的子数组含有至少 m = 3 个互不相同元素的子数组。所以不存在几乎唯一子数组，最大和为 0 。

提示：

- 1 <= nums.length <= 2 \* 104
- 1 <= m <= k <= nums.length
- 1 <= nums[i] <= 109

## 思路

在定长滑动窗口的基础上，此题在找最大值的同时，还需要判断子数组中的重复数字不可超过

在遍历时，求k位数之和，同时记录每个数出现的次数，滑动记录

在滑动时，增加下一位数的个数记录，减去(滑块头部)移除数的个数记录，如果数量为0了，删除次记录。

## 代码

```ts
function maxSum(nums: number[], m: number, k: number): number {
  let sum = 0;
  let res = 0;
  let map = new Map<number, number>();

  const setMap = (k: number, c = 1) => {
    map.set(k, (map.get(k) ?? 0) + c);
  };

  for (let i = 0; i < k; i++) {
    const num = nums[i];
    sum += num;
    setMap(num);
  }
  if (map.size >= m) res = sum;

  for (let i = k, j = 0; i < nums.length; i++, j++) {
    const num_j = nums[j];
    sum -= num_j;

    if (map.get(num_j) == 1) {
      map.delete(num_j);
    } else {
      setMap(num_j, -1);
    }

    sum += nums[i];
    setMap(nums[i]);

    if (map.size >= m) res = Math.max(res, sum);
  }
  return res;
}
```