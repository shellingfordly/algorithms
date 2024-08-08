# 2090. 半径为 k 的子数组平均值

给你一个下标从 0 开始的数组 nums ，数组中有 n 个整数，另给你一个整数 k 。

半径为 k 的子数组平均值 是指：nums 中一个以下标 i 为 中心 且 半径 为 k 的子数组中所有元素的平均值，即下标在 i - k 和 i + k 范围（含 i - k 和 i + k）内所有元素的平均值。如果在下标 i 前或后不足 k 个元素，那么 半径为 k 的子数组平均值 是 -1 。

构建并返回一个长度为 n 的数组 avgs ，其中 avgs[i] 是以下标 i 为中心的子数组的 半径为 k 的子数组平均值 。

x 个元素的 平均值 是 x 个元素相加之和除以 x ，此时使用截断式 整数除法 ，即需要去掉结果的小数部分。

例如，四个元素 2、3、1 和 5 的平均值是 (2 + 3 + 1 + 5) / 4 = 11 / 4 = 2.75，截断后得到 2 。

示例 1：

> 输入：nums = [7,4,3,9,1,8,5,2,6], k = 3
>
> 输出：[-1,-1,-1,5,4,4,-1,-1,-1]
>
> 解释：
>
> - avg[0]、avg[1] 和 avg[2] 是 -1 ，因为在这几个下标前的元素数量都不足 k 个。
> - 中心为下标 3 且半径为 3 的子数组的元素总和是：7 + 4 + 3 + 9 + 1 + 8 + 5 = 37 。
>   使用截断式 整数除法，avg[3] = 37 / 7 = 5 。
> - 中心为下标 4 的子数组，avg[4] = (4 + 3 + 9 + 1 + 8 + 5 + 2) / 7 = 4 。
> - 中心为下标 5 的子数组，avg[5] = (3 + 9 + 1 + 8 + 5 + 2 + 6) / 7 = 4 。
> - avg[6]、avg[7] 和 avg[8] 是 -1 ，因为在这几个下标后的元素数量都不足 k 个。

示例 2：

> 输入：nums = [100000], k = 0
>
> 输出：[100000]
>
> 解释：
>
> - 中心为下标 0 且半径 0 的子数组的元素总和是：100000 。
>   avg[0] = 100000 / 1 = 100000 。

示例 3：

> 输入：nums = [8], k = 100000
>
> 输出：[-1]
>
> 解释：
>
> - avg[0] 是 -1 ，因为在下标 0 前后的元素数量均不足 k 。

提示：

- n == nums.length
- 1 <= n <= 105
- 0 <= nums[i], k <= 105

## 思路

- i = [0 ~ k-1] 时都无法满足左边半径为 k，则所有 arr[i] = -1;
- i = [k ~ len-k]时是能满足半径为 k 的坐标，因此 arr[i] = Math.floor(sum / (2\*k+1));
- i = [len-k ~ len-1]时则无法满足右边半径位 k，因此 arr[i] = -1;

## 代码

将三种情况的坐标分别遍历

当 i = [0 ~ k-1] 时 arr[i] = -1，并累加 nums[i]，如果 len < k 则直接返回

第二种情况要分两步处理，虽然 arr[k ~ len-k] = Math.floor(sum / (2*k+1))，但是 i 大于 2*k 时 sum 的值得做一点处理

- i = [k ~ 2*k] 时，累加 nums[i] 的值，最后计算 arr[k] 等于其平均值。
- i = [2 * k + 1 ~ len-1]时，sum每一次累加下一个值，就得同时减去第一个值。
  - 因为i为 2 * k + 1，则 i - k 就是 k++ 的递增，直到结束时为 len-k，即arr [k+1 ~ len-k]
  - 因此arr[i - k] = Math.floor(sum / (2 * k + 1))

当i = [len-k ~ len-1]时 arr[i] = -1 即可，返回arr

```ts
function getAverages(nums: number[], k: number): number[] {
  let sum = 0;
  let arr: number[] = [];
  let len = nums.length;

  for (let i = 0; i < k && i < nums.length; i++) {
    sum += nums[i];
    arr[i] = -1;
  }

  if (len <= k) return arr;

  for (let i = k; i <= 2 * k; i++) {
    sum += nums[i];
  }
  arr[k] = Math.floor(sum / (2 * k + 1));

  for (let i = 2 * k + 1, j = 0; i < len; i++, j++) {
    sum += nums[i];
    sum -= nums[j];
    arr[i - k] = Math.floor(sum / (2 * k + 1));
  }

  for (let i = len - k; i < len; i++) arr[i] = -1;

  return arr;
}
```

稍微简化一下，提前生成一个全为-1的长为nums长度的arr数组，此时只需要计算arr[k ~ len-k]处的值即可。

即完成上面分情况考虑的第二步骤，计算出a[k]处的平均数，a[k+1 ~ len-k]处的平均数。

```ts
function getAverages(nums: number[], k: number): number[] {
  let sum = 0;
  let len = nums.length;
  let arr: number[] = Array(len).fill(-1);
  let dia = 2 * k + 1;

  if (len < dia) return arr;

  for (let i = 0; i < dia; i++) {
    sum += nums[i];
  }
  arr[k] = Math.floor(sum / dia);

  for (let i = dia, j = 0; i < len; i++, j++) {
    sum += nums[i];
    sum -= nums[j];
    arr[i - k] = Math.floor(sum / dia);
  }

  return arr;
}
```
