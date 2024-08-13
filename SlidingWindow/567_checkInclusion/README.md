# 567. 字符串的排列

给你两个字符串 s1 和 s2 ，写一个函数来判断 s2 是否包含 s1 的排列。如果是，返回 true ；否则，返回 false 。

换句话说，s1 的排列之一是 s2 的 子串 。

示例 1：

> 输入：s1 = "ab" s2 = "eidbaooo"
>
> 输出：true
>
> 解释：s2 包含 s1 的排列之一 ("ba").

示例 2：

> 输入：s1= "ab" s2 = "eidboaoo"
>
> 输出：false

提示：

- 1 <= s1.length, s2.length <= 104
- s1 和 s2 仅包含小写字母

## 方法一

滑动窗口 + 字符对象表记录历史

记录 s1 字符表，滑动记录 s2 字符表，对比是否存在不同，存在返回 false，通过遍历返回 true

```ts
function checkInclusion(s1: string, s2: string): boolean {
  const map1: any = {};
  for (let i = 0; i < s1.length; i++) {
    if (map1[s1[i]]) map1[s1[i]]++;
    else map1[s1[i]] = 1;
  }

  const map2: any = {};
  for (let i = 0, j = 0; i < s2.length; i++) {
    if (map2[s2[i]]) map2[s2[i]]++;
    else map2[s2[i]] = 1;

    if (i >= s1.length - 1) {
      // 滑动
      if (i >= s1.length) {
        if (map2[s2[j]] == 1) delete map2[s2[j]];
        else map2[s2[j]]--;
        j++;
      }

      let same = true;
      for (const key in map2) {
        if (map2[key] !== map1[key]) {
          same = false;
          break;
        }
      }
      if (same) return true;
    }
  }

  return false;
}
```

调整一下代码

```ts
function checkInclusion(s1: string, s2: string): boolean {
  const map1: any = {};
  const map2: any = {};
  const len1 = s1.length;

  const isSame = () => {
    for (const key in map2) if (map2[key] !== map1[key]) return false;
    return true;
  };

  for (let i = 0; i < len1; i++) {
    if (map1[s1[i]]) map1[s1[i]]++;
    else map1[s1[i]] = 1;
  }

  for (let i = 0; i < len1; i++) {
    if (map2[s2[i]]) map2[s2[i]]++;
    else map2[s2[i]] = 1;
  }

  if (isSame()) return true;

  for (let i = len1, j = 0; i < s2.length; i++, j++) {
    if (map2[s2[i]]) map2[s2[i]]++;
    else map2[s2[i]] = 1;

    if (map2[s2[j]] == 1) delete map2[s2[j]];
    else map2[s2[j]]--;

    if (isSame()) return true;
  }

  return false;
}
```

## 方法二

滑动窗口 + 字符数组记录历史（来自官方题解）

用长度 26 的数组记录每个字母出现的次数，同理；
滑动 s1 长度的滑块，对比子字符串是否相同。

```ts
function checkInclusion1(s1: string, s2: string): boolean {
  const hash1 = new Array(26).fill(0);
  const hash2 = new Array(26).fill(0);
  const index = (s: string) => s.charCodeAt(0) - "a".charCodeAt(0);
  const len1 = s1.length;
  if (len1 > s2.length) return false;

  for (let i = 0; i < len1; i++) {
    hash1[index(s1[i])]++;
  }

  for (let i = 0; i < len1; i++) {
    hash2[index(s2[i])]++;
  }

  if (hash1.toString() == hash2.toString()) return true;

  for (let i = len1, j = 0; i < s2.length; i++, j++) {
    hash2[index(s2[i])]++;
    hash2[index(s2[j])]--;
    if (hash1.toString() == hash2.toString()) return true;
  }

  return false;
}
```
