# 600. 不含连续 1 的非负整数

给定一个正整数 n ，请你统计在 [0, n] 范围的非负整数中，有多少个整数的二进制表示中不存在 连续的 1 。

示例 1:

> 输入: n = 5
> 输出: 5
> 解释:
> 下面列出范围在 [0, 5] 的非负整数与其对应的二进制表示：
> 0 : 0
> 1 : 1
> 2 : 10
> 3 : 11
> 4 : 100
> 5 : 101
> 其中，只有整数 3 违反规则（有两个连续的 1 ），其他 5 个满足规则。

示例 2:

> 输入: n = 1
> 输出: 2

示例 3:

> 输入: n = 2
> 输出: 3

提示:

- 1 <= n <= 109

## 方法一: 暴力解法

无法通过

```ts
export function findIntegers(n: number): number {
    if (n == 0) return 1

    function isExistContinue1(num: number) {
        let a = Math.floor(num / 2)
        let last = num % 2

        let isExist = false
        while (a > 0) {
            let b = a % 2
            a = Math.floor(a / 2)
            if (b == 1 && last == 1) {
                isExist = true
                break
            }
            last = b
        }
        return isExist
    }

    let i = 1
    let count = 1
    while (i <= n) {
        const isExist = isExistContinue1(i)
        if (!isExist) count++
        i++
    }

    return count
};
```
