# 2401. 最长优雅子数组

给你一个由 正 整数组成的数组 nums 。

如果 nums 的子数组中位于 不同 位置的每对元素按位 与（AND）运算的结果等于 0 ，则称该子数组为 优雅 子数组。

返回 最长 的优雅子数组的长度。

子数组 是数组中的一个 连续 部分。

注意：长度为 1 的子数组始终视作优雅子数组。

示例 1：

> 输入：nums = [1,3,8,48,10]
>
> 输出：3
>
> 解释：最长的优雅子数组是 [3,8,48] 。子数组满足题目条件：
>
> - 3 AND 8 = 0
> - 3 AND 48 = 0
> - 8 AND 48 = 0
>   可以证明不存在更长的优雅子数组，所以返回 3 。

示例 2：

> 输入：nums = [3,1,5,11,13]
>
> 输出：1
>
> 解释：最长的优雅子数组长度为 1 ，任何长度为 1 的子数组都满足题目条件。

提示：

- 1 <= nums.length <= 10^5
- 1 <= nums[i] <= 10^9

## 方法一：滑动窗口 + 枚举

用 indexList 记录每个值的下标，遍历数组，如果两个值的 AND 运算的结果等于 0，则不做处理，将下标添加到 indexList 中。

如果 AND 运算的结果不等于 0，则需要从 indexList 记录的下标中剔除，每次遍历数值时都会与 indexList 所记录的下标的值进行判断，如果不满足条件，则将 left 设置为此值的下标后一位，即 indexList[j] + 1，并记录下不满足的值的数量，如果数量大于则将其 indexList 截取起前 count 位

```ts
function longestNiceSubarray(nums: number[]): number {
  let res = 1;
  let left = 0;
  let indexList = [0];

  for (let i = 1; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < indexList.length; j++) {
      if ((nums[i] & nums[indexList[j]]) !== 0) {
        left = indexList[j] + 1;
        count++;
      }
    }

    if (count > 0) indexList = indexList.slice(count);
    indexList.push(i);

    res = Math.max(res, i - left + 1);
  }

  return res;
}
```
