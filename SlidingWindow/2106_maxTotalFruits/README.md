# 2106. 摘水果

在一个无限的 x 坐标轴上，有许多水果分布在其中某些位置。给你一个二维整数数组 fruits ，其中 fruits[i] = [position, amount] 表示共有 amount 个水果放置在 position 上。fruits 已经按 position 升序排列 ，每个 position 互不相同 。

另给你两个整数 startPos 和 k 。最初，你位于 startPos 。从任何位置，你可以选择 向左或者向右 走。在 x 轴上每移动 一个单位 ，就记作 一步 。你总共可以走 最多 k 步。你每达到一个位置，都会摘掉全部的水果，水果也将从该位置消失（不会再生）。

返回你可以摘到水果的 最大总数 。

示例 1：

![alt text](image.png)

> 输入：fruits = [[2,8],[6,3],[8,6]], startPos = 5, k = 4
>
> 输出：9
>
> 解释：
> 最佳路线为：
>
> - 向右移动到位置 6 ，摘到 3 个水果
> - 向右移动到位置 8 ，摘到 6 个水果
>   移动 3 步，共摘到 3 + 6 = 9 个水果

示例 2：

![alt text](image-1.png)

> 输入：fruits = [[0,9],[4,1],[5,7],[6,2],[7,4],[10,9]], startPos = 5, k = 4
>
> 输出：14
>
> 解释：
> 可以移动最多 k = 4 步，所以无法到达位置 0 和位置 10 。
> 最佳路线为：
>
> - 在初始位置 5 ，摘到 7 个水果
> - 向左移动到位置 4 ，摘到 1 个水果
> - 向右移动到位置 6 ，摘到 2 个水果
> - 向右移动到位置 7 ，摘到 4 个水果
>   移动 1 + 3 = 4 步，共摘到 7 + 1 + 2 + 4 = 14 个水果

示例 3：

![alt text](image-2.png)

> 输入：fruits = [[0,3],[6,4],[8,5]], startPos = 3, k = 2
>
> 输出：0
>
> 解释：
> 最多可以移动 k = 2 步，无法到达任一有水果的地方

提示：

- 1 <= fruits.length <= 105
- fruits[i].length == 2
- 0 <= startPos, position <= 2 \_ 105
- 对于任意 i > 0 ，position-1 < position 均成立（下标从 0 开始计数）
- 1 <= amount <= 104
- 0 <= k <= 2 \_ 105

## 方法一：滑动窗口

[官方题解](https://leetcode.cn/problems/maximum-fruits-harvested-after-at-most-k-steps/solutions/2254268/zhai-shui-guo-by-leetcode-solution-4j9v/)

## 思路

- 当 startPos > right 时，即区间在 startPos 的左边，至少移动 startPos − left 步
- 当 startPos < left 时，即区间在 startPos 的右边，至少移动 right − startPos 步
- 当 left ≤ startPos ≤ right 时，即 startPos 刚好在区间范围内
  - 先向左再向右移动，需要移动 startPos − left + right − left 步
  - 先向右再向左移动，需要移动 right - startPos + right - left
  - 因此，至少需要移动 min(∣right−startPos∣,∣startPos−left∣) + right − left

初始时 left = 0, right = 0，每次 right 向右移动一步；

计算当前区间 [left, right] 需要的移动步数 step，假设 step > k，则我们移动左起点 left，直达满足 step < k, left ≤ right，即可求出移动步数小于等于 k 且以 right 为终点的最长区间，计算出改区间覆盖的水果数目即可；

## 代码

遍历 fruits，实际走了多少步为 fruits[left][0], fruits[right][0]

如果 step[left, right] > k，则需要移动 left

需要注意的是，实际要走多少步取决于 fruits[right][0] 位置到 startPos 的距离。

一开始我将 right 具象为具体的 position，导致无法正确的计算出当前所走的真正的步数；

其实没有必要，fruits[right][0] 所取到的值就能表示出具体需要多少步；

遍历 fruits 时：

当取到的 position < startPos，说明这棵树(position)位于人(startPos)的左边；

当取到的 position > startPos 时，说明这棵树(position)位于人(startPos)的右边；

如果 |position - startPos| > k，表示这棵树的位置已经大于可走的最大步数 k，因此取不到这棵树的苹果；

因此，直径遍历 fruits 取到 fruits[right] 处的位置(position)与苹果数(amount)，累加 amount，如果 position 的位置 满足 step(left, right) < k，那么能取到此苹果，如果不满足，则减掉 fruits[left] 处的苹果数(amount)，left++ 直到满足 step，记录最小值。

```ts
function maxTotalFruits(
  fruits: number[][],
  startPos: number,
  k: number
): number {
  let res = 0;
  let count = 0;
  let left = 0;

  const step = (left: number, right: number) => {
    return (
      Math.min(
        Math.abs(startPos - fruits[right][0]),
        Math.abs(startPos - fruits[left][0])
      ) +
      fruits[right][0] -
      fruits[left][0]
    );
  };

  for (let right = 0; right < fruits.length; right++) {
    count += fruits[right][1];

    while (left <= right && step(left, right) > k) {
      count -= fruits[left][1];
      left++;
    }
    res = Math.max(res, count);
  }
  return res;
}
```
