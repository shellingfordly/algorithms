# 2134. 最少交换次数来组合所有的 1 II

交换 定义为选中一个数组中的两个 互不相同 的位置并交换二者的值。

环形 数组是一个数组，可以认为 第一个 元素和 最后一个 元素 相邻 。

给你一个 二进制环形 数组 nums ，返回在 任意位置 将数组中的所有 1 聚集在一起需要的最少交换次数。

示例 1：

> 输入：nums = [0,1,0,1,1,0,0]
>
> 输出：1
>
> 解释：这里列出一些能够将所有 1 聚集在一起的方案：
> [0,0,1,1,1,0,0] 交换 1 次。
> [0,1,1,1,0,0,0] 交换 1 次。
> [1,1,0,0,0,0,1] 交换 2 次（利用数组的环形特性）。
> 无法在交换 0 次的情况下将数组中的所有 1 聚集在一起。
> 因此，需要的最少交换次数为 1 。

示例 2：

> 输入：nums = [0,1,1,1,0,0,1,1,0]
>
> 输出：2
>
> 解释：这里列出一些能够将所有 1 聚集在一起的方案：
> [1,1,1,0,0,0,0,1,1] 交换 2 次（利用数组的环形特性）。
> [1,1,1,1,1,0,0,0,0] 交换 2 次。
> 无法在交换 0 次或 1 次的情况下将数组中的所有 1 聚集在一起。
> 因此，需要的最少交换次数为 2 。

示例 3：

> 输入：nums = [1,1,0,0,1]
>
> 输出：0
>
> 解释：得益于数组的环形特性，所有的 1 已经聚集在一起。
> 因此，需要的最少交换次数为 0 。

提示：

- 1 <= nums.length <= 105
- nums[i] 为 0 或者 1

## 方法一

做了三次遍历，存在一些重复查找

### 思路

首先找到 1 的个数 k，再用常规的滑动窗口查找出 k 位数中 0 最少的部分，再查找环形情况下 0 最少的，取最小值

### 代码

```ts
function minSwaps(nums: number[]): number {
  let k = 0;
  let count = 0;
  let res = 0;
  let len = nums.length;

  // 获取所有1的数量
  for (let i = 0; i < len; i++) {
    if (nums[i] == 1) k++;
  }

  // 从头开始滑动查找0最少的k位
  for (let i = 0; i < k; i++) {
    if (nums[i] == 0) count++;
  }
  res = count;
  for (let i = k, j = 0; i < len; i++, j++) {
    if (nums[i] == 0) count++;
    if (nums[j] == 0) count--;
    res = Math.min(res, count);
  }

  // 判断环形0最少的
  count = 0;
  for (let i = len - k; i < len; i++) {
    if (nums[i] == 0) count++;
  }

  for (let i = 0, j = len - k; i < k; i++, j++) {
    if (nums[i] == 0) count++;
    if (nums[j] == 0) count--;
    res = Math.min(res, count);
  }

  return res;
}
```

## 方法二

取到 1 的个数 k，找到 k 位中 0 最少的滑块，主要是将普通的滑动和环形的合在一起查找，减少一些重复判断

## 代码

获取 1 的个数 cnt
获取前 cnt 位数中 0 的个数，找 0 个数最少的 cnt 位数的滑块

当从 i 开始时，cnt 位数的结束位置为 (i + cnt - 1) % n

    因为当一个数给一个比自己大的数取余时，得到的还是自己；
    当这个数等于被余数时，得到0，以此累加。

    当i=1时，(i + cnt - 1) % n = cnt，也就是1的个数，也就是滑块的下一块，因此i-1若为0，则cur--；(i + cnt - 1) % n 处为0，则cur++。最终找到0最少的滑块。
    若i从0开始，则 (i + cnt) % n 即是下一位数字

此处从 cnt 处开始滑动，回到 cnt - 1 处结束，做到了环形判断，并且减少了重复查找。

```ts
function minSwaps(nums: number[]): number {
  let n = nums.length;
  let cnt = 0; // 1的个数
  for (let i = 0; i < n; i++) {
    cnt += nums[i];
  }

  if (cnt == 0) return 0;

  let cur = 0; // 前cnt位中0的个数
  for (let i = 0; i < cnt; ++i) {
    cur += 1 - nums[i];
  }
  let ans = cur;
  for (let i = 1; i < n; ++i) {
    //
    if (nums[i - 1] == 0) {
      --cur;
    }
    if (nums[(i + cnt - 1) % n] == 0) {
      ++cur;
    }
    ans = Math.min(ans, cur);
  }
  // 也可以写成这样
  //   for (let i = 0; i < n; ++i) {
  //     //
  //     if (nums[i] == 0) {
  //       --cur;
  //     }
  //     if (nums[(i + cnt) % n] == 0) {
  //       ++cur;
  //     }
  //     ans = Math.min(ans, cur);
  //   }
  return ans;
}
```

## 方法三

与方法二类似，不同的是找的是 cnt 位数中 1 个数的最大值，再用 cnt - mx

```ts
function minSwaps2(nums: number[]): number {
  let n = nums.length;
  let cnt = nums.reduce((p, n) => p + n, 0); // 1的个数
  let sum = 0; // 1个数内总和
  for (let i = 0; i < cnt; i++) {
    sum += nums[i];
  }
  let mx = sum;
  for (let l = 0, r = cnt % n; l < n; ++l, r = ++r % n) {
    sum = sum - nums[l] + nums[r];
    mx = Math.max(mx, sum);
    if (mx == cnt) return 0;
  }
  return cnt - mx;
}
```
