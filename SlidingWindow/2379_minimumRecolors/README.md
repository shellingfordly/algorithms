# 2379. 得到 K 个黑块的最少涂色次数

给你一个长度为 n 下标从 0 开始的字符串 blocks ，blocks[i] 要么是 'W' 要么是 'B' ，表示第 i 块的颜色。字符 'W' 和 'B' 分别表示白色和黑色。

给你一个整数 k ，表示想要 连续 黑色块的数目。

每一次操作中，你可以选择一个白色块将它 涂成 黑色块。

请你返回至少出现 一次 连续 k 个黑色块的 最少 操作次数。

示例 1：

> 输入：blocks = "WBBWWBBWBW", k = 7
>
> 输出：3
>
> 解释：
> 一种得到 7 个连续黑色块的方法是把第 0 ，3 和 4 个块涂成黑色。
> 得到 blocks = "BBBBBBBWBW" 。
> 可以证明无法用少于 3 次操作得到 7 个连续的黑块。
> 所以我们返回 3 。

示例 2：

> 输入：blocks = "WBWBBBW", k = 2
>
> 输出：0
>
> 解释：
> 不需要任何操作，因为已经有 2 个连续的黑块。
> 所以我们返回 0 。

提示：

- n == blocks.length
- 1 <= n <= 100
- blocks[i] 要么是 'W' ，要么是 'B' 。
- 1 <= k <= n

## 思路

遍历 k 位字符，判断白块的数量

从k+1继续遍历，若为白块加一；
从头移除块，若为白块减一。

## 代码

```ts
function minimumRecolors(blocks: string, k: number): number {
  let wCount = 0;
  let sum = 0;

  for (let i = 0; i < k; i++) {
    if (blocks[i] == "W") wCount++;
  }

  sum = wCount;

  for (let i = k, j = 0; i < blocks.length; i++, j++) {
    if (blocks[i] == "W") wCount++;
    if (blocks[j] == "W") wCount--;

    sum = Math.min(sum, wCount);
  }

  return sum;
}
```
