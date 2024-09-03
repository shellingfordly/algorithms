# 面试题 17.18. 最短超串

假设你有两个数组，一个长一个短，短的元素均不相同。找到长数组中包含短数组所有的元素的最短子数组，其出现顺序无关紧要。

返回最短子数组的左端点和右端点，如有多个满足条件的子数组，返回左端点最小的一个。若不存在，返回空数组。

示例 1:

> 输入:
> big = [7,5,9,0,2,1,3,5,7,9,1,1,5,8,8,9,7]
> small = [1,5,9]
>
> 输出: [7,10]

示例 2:

> 输入:
> big = [1,2,3]
> small = [4]
>
> 输出: []

提示：

- big.length <= 100000
- 1 <= small.length <= 100000

## 滑动窗口+哈希表

这题和[76. 最小覆盖子串](https://github.com/shellingfordly/algorithms/tree/master/SlidingWindow/76_minWindow)可以说是完全一样。

记录数字出现的次数，再记录下数字的种类，种类相同时记录区间端点，减去左边数字个数，并更新 less

```ts
function shortestSeq(big: number[], small: number[]): number[] {
  const sMap: Record<number, number> = {};
  const bMap: Record<number, number> = {};
  let left = 0;
  let less = 0;
  let res: number[] = [];

  for (let i = 0; i < small.length; i++) {
    if (!sMap[small[i]]) less++;
    sMap[small[i]] = (sMap[small[i]] || 0) + 1;
  }

  for (let i = 0; i < big.length; i++) {
    bMap[big[i]] = (bMap[big[i]] || 0) + 1;
    if (bMap[big[i]] === sMap[big[i]]) less--;

    while (less === 0) {
      if (res[0] === undefined || i - left < res[1] - res[0]) res = [left, i];

      if (bMap[big[left]]-- === sMap[big[left]]) less++;

      left++;
    }
  }

  return res;
}
```
