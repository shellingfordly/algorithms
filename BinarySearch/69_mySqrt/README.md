# 69. x 的平方根

给你一个非负整数 x ，计算并返回 x 的 算术平方根 。

给你一个非负整数 x ，计算并返回 x 的 算术平方根 。

由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。

注意：不允许使用任何内置指数函数和算符，例如 pow(x, 0.5) 或者 x \*\* 0.5 。

示例 1：

> 输入：x = 4
>
> 输出：2

示例 2：

> 输入：x = 8
>
> 输出：2
>
> 解释：8 的算术平方根是 2.82842..., 由于返回类型是整数，小数部分将被舍去。

提示：

- 0 <= x <= 231 - 1

## 方法一：二分查找

由题可知，我们需要寻找 [0, x] 区间内的数的平方 <= x 的最大值

设置 left = 0, right = x，每次取中间值看 mid \* mid 的值的大小

如果 mid \* mid > x，则 mid 大了，right = mid
如果 mid \* mid < x，则 mid 小了，left = mid

当 left \* left < x, right \* right > x 时，将会陷入死循环，因此，退出循环的条件为 left + 1 < right；

如果满足上面条件退出循环，则说明 left 即是找到的 mid 平方 <=x 的最大值；

```ts
function mySqrt(x: number): number {
  if (x === 1) return 1;
  let left = 0,
    right = x,
    mid = 0;

  while (left + 1 < right) {
    // mid = Math.floor((left + right) / 2)
    mid = left + ((right - left) >> 1);
    if (mid * mid > x) right = mid;
    else left = mid;
  }
  return left;
}
```
