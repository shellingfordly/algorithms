# 1712. 将数组分成三个子数组的方案数

我们称一个分割整数数组的方案是 好的 ，当它满足：

数组被分成三个 非空 连续子数组，从左至右分别命名为 left ， mid ， right 。
left 中元素和小于等于 mid 中元素和，mid 中元素和小于等于 right 中元素和。
给你一个 非负 整数数组 nums ，请你返回 好的 分割 nums 方案数目。由于答案可能会很大，请你将结果对 109 + 7 取余后返回。

示例 1：

> 输入：nums = [1,1,1]
> 
> 输出：1
> 
> 解释：唯一一种好的分割方案是将 nums 分成 [1] [1] [1] 。

示例 2：

> 输入：nums = [1,2,2,2,5,0]
> 
> 输出：3
> 
> 解释：nums 总共有 3 种好的分割方案：
> 
> [1] [2] [2,2,5,0]
> 
> [1] [2,2] [2,5,0]
> 
> [1,2] [2,2] [5,0]

示例 3：

> 输入：nums = [3,2,1]
> 
> 输出：0
> 
> 解释：没有好的分割方案。

提示：

- 3 <= nums.length <= 105
- 0 <= nums[i] <= 104

## 方法一：滑动窗口

### 思路

[Anchor 思路](https://leetcode.cn/problems/ways-to-split-array-into-three-subarrays/solutions/2767138/duo-zhi-zhen-hua-dong-chuang-kou-python3-dv8c/)

### 代码

ts 无法通过[示例 85](https://leetcode.cn/problems/ways-to-split-array-into-three-subarrays/submissions/563925794/)

```ts
function waysToSplit(nums: number[]): number {
  const arr: number[] = [];
  let len = nums.length,
    sum = 0;
  let left1 = 1,
    left2 = 1,
    res = 0;
  for (let i = 0; i < len; i++) {
    arr.push(sum);
    sum += nums[i];
  }
  arr.push(sum);
  for (let right = 2; right < len; right++) {
    while (left1 < len && arr[left1] <= arr[right] - arr[left1]) left1++;
    while (left2 < left1 && arr[right] - arr[left2] > arr[len] - arr[right])
      left2++;
    res += left1 - left2;
  }
  return res % (10 ** 9 + 7);
}
```

python 代码没有问题

```py
class Solution:
    def waysToSplit(self, nums: List[int]) -> int:
        sm = list(accumulate(nums, initial = 0))
        n = len(nums)
        ans = 0
        l1 = l2 = 1
        print(sm)
        for r in range(2, n):
            while l1 < r and sm[l1] <= sm[r] - sm[l1]:
                l1 += 1
            while l2 < l1 and sm[r] - sm[l2] > sm[n] - sm[r]:
                l2 += 1
            ans += l1 - l2
        return ans % (10 ** 9 + 7)
```
