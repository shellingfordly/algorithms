# 1423. 可获得的最大点数

几张卡牌 排成一行，每张卡牌都有一个对应的点数。点数由整数数组 cardPoints 给出。

每次行动，你可以从行的开头或者末尾拿一张卡牌，最终你必须正好拿 k 张卡牌。

你的点数就是你拿到手中的所有卡牌的点数之和。

给你一个整数数组 cardPoints 和整数 k，请你返回可以获得的最大点数。

示例 1：

> 输入：cardPoints = [1,2,3,4,5,6,1], k = 3
> 输出：12
> 解释：第一次行动，不管拿哪张牌，你的点数总是 1 。但是，先拿最右边的卡牌将会最大化你的可获得点数。最优策略是拿右边的三张牌，最终点数为 1 + 6 + 5 = 12 。

示例 2：

> 输入：cardPoints = [2,2,2], k = 2
> 输出：4
> 解释：无论你拿起哪两张卡牌，可获得的点数总是 4 。

示例 3：

> 输入：cardPoints = [9,7,7,9,7,7,9], k = 7
> 输出：55
> 解释：你必须拿起所有卡牌，可以获得的点数为所有卡牌的点数之和。

示例 4：

> 输入：cardPoints = [1,1000,1], k = 1
> 输出：1
> 解释：你无法拿到中间那张卡牌，所以可以获得的最大点数为 1 。

示例 5：

> 输入：cardPoints = [1,79,80,1,1,1,200,1], k = 3
> 输出：202

提示：

- 1 <= cardPoints.length <= 10^5
- 1 <= cardPoints[i] <= 10^4
- 1 <= k <= cardPoints.length

## 思路

因为每次拿牌只能从头或者尾开始拿牌，也就是说只从头拿最多拿 k 张，只从尾拿最多也是 k 张。

那我们手动调整数组就可以将其变成普通的取 k 位数字之和最大的滑动窗口题。

将 cardPoints 的 0 ~ k 位移植尾部，如果 cardPoints 的长度大于 2 \* k ，那中间的牌我们是永远也取不到的；因此尾部的牌只保留 len-k ~ len 位。

然后取新的 cardPoints 中 k 位和最大即可

## 代码

```ts
function maxScore(cardPoints: number[], k: number): number {
  let len = cardPoints.length;

  const left = cardPoints.slice(0, k);
  const right = cardPoints.slice(len - k, len);
  const newCard = [...right, ...left];

  let sum = 0;
  let res = 0;
  for (let i = 0; i < k; i++) {
    sum += newCard[i];
  }
  res = sum;
  for (let i = k, j = 0; i < newCard.length; i++, j++) {
    sum += newCard[i];
    sum -= newCard[j];
    res = Math.max(sum, res);
  }

  return res;
}
```

![alt text](image.png)

## 优化

其实不需要去拼接数组，可以直接在原数组上做滑动

首先取尾部 [len-k ~ len-1] 的 k 位数之和，然后再从头部开始滑动；

取[0 ~ k-1] 位置的数字，每加一位，就减去 [len-k ~ len-1] 中的一位，取和的最大值即可。

```ts
function maxScore(cardPoints: number[], k: number): number {
  let len = cardPoints.length;
  let sum = 0;
  let res = 0;

  for (let i = len - k; i < len; i++) {
    sum += cardPoints[i];
  }
  res = sum;
  for (let i = 0, j = len - k; i < k; i++, j++) {
    sum += cardPoints[i];
    sum -= cardPoints[j];
    res = Math.max(res, sum);
  }
  return res;
}
```

![alt text](image-1.png)