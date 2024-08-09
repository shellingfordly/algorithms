2461. 长度为 K 子数组中的最大和

给你一个整数数组 nums 和一个整数 k 。请你从 nums 中满足下述条件的全部子数组中找出最大子数组和：

子数组的长度是 k，且
子数组中的所有元素 各不相同 。
返回满足题面要求的最大子数组和。如果不存在子数组满足这些条件，返回 0 。

子数组 是数组中一段连续非空的元素序列。

示例 1：

> 输入：nums = [1,5,4,2,9,9,9], k = 3
>
> 输出：15
>
> 解释：nums 中长度为 3 的子数组是：
>
> - [1,5,4] 满足全部条件，和为 10 。
> - [5,4,2] 满足全部条件，和为 11 。
> - [4,2,9] 满足全部条件，和为 15 。
> - [2,9,9] 不满足全部条件，因为元素 9 出现重复。
> - [9,9,9] 不满足全部条件，因为元素 9 出现重复。
>   因为 15 是满足全部条件的所有子数组中的最大子数组和，所以返回 15 。

示例 2：

> 输入：nums = [4,4,4], k = 3
>
> 输出：0
>
> 解释：nums 中长度为 3 的子数组是：
>
> - [4,4,4] 不满足全部条件，因为元素 4 出现重复。
>   因为不存在满足全部条件的子数组，所以返回 0 。

提示：

- 1 <= k <= nums.length <= 105
- 1 <= nums[i] <= 105

## 思路

此题和[2841. 几乎唯一子数组的最大和](https://github.com/shellingfordly/algorithms/tree/master/SlidingWindow/2841_maxSum)不能说毫无关系，只能说一摸一样，只是把不相同的个数固定为了k。

和做2841时我一样的错误，两道题最开始时我都想用Set来记录出现的数字，用Set的长度来判断是否满足条件。存在一个问题，在滑动的时候，删除的最头部的数字有可能在子数组中间是存在的，就会导致也许这个子数组是符合条件的，但是Set的长度不符。

因此还是需要用Map来记录每个数字出现的次数，滑动时最头部的数字数量减一，如果次数只出现了一次，那就删除次数记录，方便获取长度来判断。

## 代码

```ts
function maximumSubarraySum(nums: number[], k: number): number {
  let res = 0;
  let sum = 0;
  const map = new Map<number, number>();

  const setMap = (n: number, c = 1) => map.set(n, (map.get(n) || 0) + c);

  for (let i = 0; i < k; i++) {
    const num = nums[i];
    setMap(num);
    sum += nums[i];
  }
  if (map.size == k) res = sum;

  for (let i = k, j = 0; i < nums.length; i++, j++) {
    const num_i = nums[i];
    sum += num_i;
    setMap(num_i);

    const num_j = nums[j];
    sum -= num_j;

    if (map.get(num_j) == 1) map.delete(num_j);
    else setMap(num_j, -1);

    if (map.size == k) {
      res = Math.max(sum, res);
    }
  }

  return res;
}
```
