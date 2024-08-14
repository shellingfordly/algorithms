# 2953. 统计完全子字符串

给你一个字符串 word 和一个整数 k 。

如果 word 的一个子字符串 s 满足以下条件，我们称它是 完全字符串：

s 中每个字符 恰好 出现 k 次。
相邻字符在字母表中的顺序 至多 相差 2 。也就是说，s 中两个相邻字符 c1 和 c2 ，它们在字母表中的位置相差 至多 为 2 。
请你返回 word 中 完全 子字符串的数目。

子字符串 指的是一个字符串中一段连续 非空 的字符序列。

示例 1：

> 输入：word = "igigee", k = 2
>
> 输出：3
>
> 解释：完全子字符串需要满足每个字符恰好出现 2 次，且相邻字符相差至多为 2 ：igigee, igigee, igigee 。

示例 2：

> 输入：word = "aaabbbccc", k = 3
>
> 输出：6
>
> 解释：完全子字符串需要满足每个字符恰好出现 3 次，且相邻字符相差至多为 2 ：aaabbbccc, aaabbbccc, aaabbbccc, aaabbbccc, aaabbbccc, aaabbbccc 。

提示：

- 1 <= word.length <= 105
- word 只包含小写英文字母。
- 1 <= k <= word.length

## 方法一：滑动窗口+暴力枚举

一、将字符串分按照相邻字符相差小于等于 2 进行分割

二、判断分割后的字符串是否是完全子字符串(满足每个字符出现 k 次)

假如一个字符出现 k 次，那最多有 26\*k 个字符，判断每 i\*k 个字符是否是完全子字符串，满足则加一；
如果 i\*k 已经大于子字符串的长度，则无需继续判断；

fn 中暴力枚举了 26 次字符串，每次取 i \*k 个字符，进行判断是否是完全子字符串

举例：在 s = "aaabbbccc", k = 3 中；
取 1 \* 3 = 3 个字符时 aaa 满足完全子字符串
取 2 \* 3 = 6 个字符时 aaabbb 满足完全子字符串
取 3\*3 = 9 个字符时 aaabbbccc 满足完全子字符串
取 4 \* 3 = 12 个字符时超出字符串长度，退出

可以看出，每次取 i \* k 个字符出来都会做一次滑动窗口寻找完全子字符串，因此存在一些重复判断。

```ts
function countCompleteSubstrings(word: string, k: number): number {
  const is = (arr: number[]) => {
    // 判断字母是否满足出现次数为k
    for (let i = 0; i < 26; i++) {
      if (arr[i] > 0 && arr[i] != k) return false;
    }
    return true;
  };
  const index = (s: string) => s.charCodeAt(0) - "a".charCodeAt(0);
  const fn = (s: string, k: number) => {
    let res = 0;
    // 枚举 26 个字母出现的次数
    for (let i = 1; i <= 26; i++) {
      let size = i * k;
      // 大于字符串长度退出
      if (size > s.length) break;

      // 记录字母出现的次数
      const arr = Array(26).fill(0);
      // 记录 0 ～ i * k - 1 字符
      for (let i = 0; i < size; i++) {
        arr[index(s[i])]++;
      }
      // 判断前 size 长度的子字符串是否满足
      if (is(arr)) res++;
      // 从 i * k 处开始滑动，在 s 字符串中找长度为 size 满足(完全子字符串)条件的子字符串
      for (let i = size, j = 0; i < s.length; i++, j++) {
        arr[index(s[i])]++;
        arr[index(s[j])]--;
        // 满足累计
        if (is(arr)) res++;
      }
    }

    return res;
  };

  let count = 0;
  for (let i = 0; i < word.length; i++) {
    let start = i;
    i++;

    // 满足相差<=2, i++
    for (
      i++;
      i < word.length &&
      Math.abs(word[i].charCodeAt(0) - word[i - 1].charCodeAt(0)) <= 2;
      i++
    );

    // 截取满足字符相差<=2的字符串
    // count += fn(word.slice(start, i), k);
    // 优化，字符串长度>=k再找
    const str = word.slice(start, i);
    if (str.length >= k) count += fn(str, k);
  }
  return count;
}
```
