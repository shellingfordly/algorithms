# 1170. 比较字符串最小字母出现频次

定义一个函数 f(s)，统计 s 中（按字典序比较）最小字母的出现频次 ，其中 s 是一个非空字符串。

例如，若 s = "dcce"，那么 f(s) = 2，因为字典序最小字母是 "c"，它出现了 2 次。

现在，给你两个字符串数组待查表 queries 和词汇表 words 。对于每次查询 queries[i] ，需统计 words 中满足 f(queries[i]) < f(W) 的 词的数目 ，W 表示词汇表 words 中的每个词。

请你返回一个整数数组 answer 作为答案，其中每个 answer[i] 是第 i 次查询的结果。

示例 1：

> 输入：queries = ["cbd"], words = ["zaaaz"]
>
> 输出：[1]
>
> 解释：查询 f("cbd") = 1，而 f("zaaaz") = 3 所以 f("cbd") < f("zaaaz")。

示例 2：

> 输入：queries = ["bbb","cc"], words = ["a","aa","aaa","aaaa"]
>
> 输出：[1,2]
>
> 解释：第一个查询 f("bbb") < f("aaaa")，第二个查询 f("aaa") 和 f("aaaa") 都 > f("cc")。

提示：

- 1 <= queries.length <= 2000
- 1 <= words.length <= 2000
- 1 <= queries[i].length, words[i].length <= 10
- queries[i][j]、words[i][j] 都由小写英文字母组成

## 方法一：统计排序+二分查找

### 思路

题目意思，遍历每个 queries 找到 words 中满足 f(queries[i]) < f(W) 的个数，W 是 words 中的元素，而 f 就是一个单次中最小字母出现的次数。

首先对 words 进行处理，找到每个单词中最小字母出现的次数得到数组 wordTimes，再对其排序，方便二分查找。

那么问题就变成了找到在 wordTimes 中大于 queryTime 的数个数。

然后遍历 queries，对每个 queries[i] 通过同样的方法取到最小字母出现的次数，将 queryTime 做为目标值，在 wordTimes 使用二分查找，找到大于 queryTime 的数的个数。

### 代码

```ts
function numSmallerByFrequency(queries: string[], words: string[]): number[] {
  // 最小字母出现的次数
  function getMinWordTimes(str: string) {
    const map = new Map<string, number>();
    let minS = "z";
    for (let i = 0; i < str.length; i++) {
      const s = str[i];
      const v = (map.get(s) || 0) + 1;
      map.set(s, v);
      if (s <= minS) minS = s;
    }
    return map.get(minS) || 0;
  }

  // 查询满足 f(queries[i]) < f(W) 的个数
  function searchWord(wordTimes: number[], queryTime: number) {
    let left = 0,
      right = words.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (wordTimes[mid] > queryTime) right = mid - 1;
      else left = mid + 1;
    }
    return wordTimes.length - left;
  }

  const wordTimes = words.map(getMinWordTimes).sort((a, b) => a - b);
  return queries.map((query) => searchWord(wordTimes, getMinWordTimes(query)));
}
```

### 优化

计算字符的最小字母次数时，可以不用 map 记录，直接记录最小字母的个数，这样可以减少内存消耗，也能节约一些时间；

记录最小字母 minS，当遍历的当前字母 ch 小于 minS 时，count 计为 1，若 ch == minS，则累加 count；

```ts
function getMinWordTimes(str: string) {
  let count = 0,
    minS = "z";
  let ch = "z";
  for (let ch of str) {
    if (ch < minS) {
      minS = ch;
      count = 1;
    } else if (ch == minS) count++;
  }
  return count;
}
```

## 方法二：后缀合

[官方解答](https://leetcode.cn/problems/compare-strings-by-frequency-of-the-smallest-character/solutions/2297291/bi-jiao-zi-fu-chuan-zui-xiao-zi-mu-chu-x-pb50/)

```ts
function numSmallerByFrequency1(queries: string[], words: string[]): number[] {
  function f(s: string) {
    let cnt = 0;
    let ch = "z";
    for (let c of s) {
      if (c < ch) {
        ch = c;
        cnt = 1;
      } else if (c == ch) {
        cnt++;
      }
    }
    return cnt;
  }

  let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let s of words) {
    count[f(s)]++;
  }
  for (let i = 9; i >= 0; i--) {
    count[i] += count[i + 1];
  }
  let res: number[] = [];
  for (let s of queries) {
    res.push(count[f(s) + 1]);
  }
  return res;
}
```
