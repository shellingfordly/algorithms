# 31. 下一个排列

> 整数数组的一个 排列 就是将其所有成员以序列或线性顺序排列。

1.  例如，arr = [1,2,3] ，以下这些都可以视作 arr 的排列：[1,2,3]、[1,3,2]、[3,1,2]、[2,3,1] 。
    整数数组的 下一个排列 是指其整数的下一个字典序更大的排列。更正式地，如果数组的所有排列根据其字典顺序从小到大排列在一个容器中，那么数组的 下一个排列 就是在这个有序容器中排在它后面的那个排列。如果不存在下一个更大的排列，那么这个数组必须重排为字典序最小的排列（即，其元素按升序排列）。

2.  例如，arr = [1,2,3] 的下一个排列是 [1,3,2] 。
    类似地，arr = [2,3,1] 的下一个排列是 [3,1,2] 。
    而 arr = [3,2,1] 的下一个排列是 [1,2,3] ，因为 [3,2,1] 不存在一个字典序更大的排列。
    给你一个整数数组 nums ，找出 nums 的下一个排列。

> 必须 原地 修改，只允许使用额外常数空间。

- 示例 1：

```
输入：nums = [1,2,3]
输出：[1,3,2]
```

- 示例 2：

```
输入：nums = [3,2,1]
输出：[1,2,3]
```

- 示例 3：

```
输入：nums = [1,1,5]
输出：[1,5,1]
```

- 提示：

```
1 <= nums.length <= 100
0 <= nums[i] <= 100
```

## 解答

由于下一个排列的定义是指比当前排列更大的排列，并且变大的幅度最小。如果此排列已经是最大则重排为最小排列。

1. 因此，可以从右向左查询，找到一个较小的数；

2. 然后再从右边查询，找到一个比这个数较大的一个数，

3. 让其交换位置。最后将这个较小数的右边的序列进行重排，变成一个较小的排列。

   由于当找到第一个较小的数时，就进行操作了，因为此数后面的序列一定是从大到小排列的，因为我们直接将其前后进行对换即可得到最小的排列

4. 当

```ts
function nextPermutation(nums: number[]): void {
  let i = nums.length - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }

  if (i >= 0) {
    let j = nums.length - 1;
    while (j >= 0 && nums[i] >= nums[j]) {
      j--;
    }
    swap(nums, i, j);
  }

  reverse(nums, i + 1);
}

function swap(nums: number[], i: number, j: number) {
  [nums[i], nums[j]] = [nums[j], nums[i]];
}

function reverse(nums: number[], start: number) {
  let left = start;
  let right = nums.length - 1;
  while (left < right) {
    swap(nums, left, right);
    left++;
    right--;
  }
}
```
