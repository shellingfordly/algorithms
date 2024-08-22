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

将 j 每次从 count 开始遍历 indexList，可以不需要每次截取 indexList

```ts
function longestNiceSubarray1(nums: number[]): number {
  let res = 1;
  let left = 0;
  let indexList = [0];
  let count = 0;

  for (let i = 1; i < nums.length; i++) {
    for (let j = count; j < indexList.length; j++) {
      if ((nums[i] & nums[indexList[j]]) !== 0) {
        left = Math.max(left, indexList[j] + 1);
        count++;
      }
    }
    indexList.push(i);
    res = Math.max(res, i - left + 1);
  }

  return res;
}
```

## 方法二

一个优雅的子数组被定义为数组中任意两个不同元素的按位与（AND）操作结果都为 0。换句话说，数组中的任何两个数都没有相同的二进制位被同时设置为 1。

因此按位或的结果可以保存所有的元素，而按位异或可以删除其元素。

- sum |= nums[i];

  - sum 是一个累加变量，用于存储当前子数组的按位或结果。
  - sum |= nums[i]; 的作用是将 nums[i] 与 sum 的当前值进行按位或操作，并将结果存储回 sum 中。这样，sum 就代表了从 left 到 i 之间所有元素的按位或结果。

- sum ^= nums[left]
  - sum & nums[i] 不等于 0 时，从左开始将老元素删除
  - sum ^= nums[left]；从 0 开始删除老元素 nums[left]，直到 sum & nums[i] == 0 结束

```ts
function longestNiceSubarray(nums: number[]): number {
  let res = 0, // 用于存储当前找到的最长“好”子数组的长度
    left = 0, // 子数组的左边界
    sum = 0; // 用于记录当前子数组所有元素的按位或（OR）结果

  for (let i = 0; i < nums.length; i++) {
    // 遍历数组，枚举子数组右边界 i
    while (sum & nums[i]) {
      // 如果当前元素 nums[i] 与 sum 的按位与（AND）结果不为 0
      sum ^= nums[left]; // 从当前子数组中排除最左边的元素 (left)，通过按位异或（XOR）
      left++; // 左边界右移，缩小子数组范围
    }
    sum |= nums[i]; // 将 nums[i] 加入当前子数组，更新 sum
    res = Math.max(res, i - left + 1); // 更新最长“好”子数组的长度
  }

  return res; // 返回结果
}
```

- 示例

>nums = [1, 3, 8, 48, 10]
>
>   - i = 0, left = 0, sum = 0, num = 1
>       - 0 & 1 = 0 满足
>       - sum = 0 | 1 = 1
>       - res = 1
>   - i = 1, left = 0, sum = 1, num = 3
>       - 1 & 3 = 1 不满足
>       - 进入while
>           - sum = 1 ^ 1 = 0, left = 1
>       - sum = 0 | 3 = 3
>       - res = 1
>   - i = 2, left = 1, sum = 3, num = 8
>       - 3 & 8 = 1 满足
>       - sum = 3 | 8 = 11
>       - res = 2
>   - i = 3, left = 1, sum = 11, num = 48
>       - 11 & 48 = 0 满足
>       - sum = 11 | 48 = 59
>       - res = 3
>   - i = 4, left = 1, sum = 59, num = 10
>       - 59 & 3 = 10 不满足
>       - 进入while
>           - left = 1, sum = 59 ^ 3 = 56, 56 & 10 = 8不满足
>           - left = 2, sum = 56 ^ 8 = 48, 48 & 10 = 0
>           - left = 3, 退出while
>       - sum = 48 | 10 = 58
>       - res = 2











