# 1234. 替换子串得到平衡字符串

有一个只含有 'Q', 'W', 'E', 'R' 四种字符，且长度为 n 的字符串。

假如在该字符串中，这四个字符都恰好出现 n/4 次，那么它就是一个「平衡字符串」。

给你一个这样的字符串 s，请通过「替换一个子串」的方式，使原字符串 s 变成一个「平衡字符串」。

你可以用和「待替换子串」长度相同的 任何 其他字符串来完成替换。

请返回待替换子串的最小可能长度。

如果原字符串自身就是一个平衡字符串，则返回 0。

示例 1：

> 输入：s = "QWER"
>
> 输出：0
>
> 解释：s 已经是平衡的了。

示例 2：

> 输入：s = "QQWE"
>
> 输出：1
>
> 解释：我们需要把一个 'Q' 替换成 'R'，这样得到的 "RQWE" (或 "QRWE") 是平衡的。

示例 3：

> 输入：s = "QQQW"
>
> 输出：2
>
> 解释：我们可以把前面的 "QQ" 替换成 "ER"。

示例 4：

> 输入：s = "QQQQ"
>
> 输出：3
>
> 解释：我们可以替换后 3 个 'Q'，使 s = "QWER"。

提示：

- 1 <= s.length <= 10^5
- s.length 是 4 的倍数
- s 中只含有 'Q', 'W', 'E', 'R' 四种字符

## 方法一：滑动窗口

### 思路

此题初看我还以为是随便更换字符，直接记录缺几个字符，想想应该没有这么简单，看了下评论。

此题需要替换的字符串必须是连续的，也就是必须一整块替换掉某个长度的子字符串使 s 变成一个「平衡字符串」。

因此，将滑动窗口内的字符作为要被替换的子字符串，剩下的窗口外的字符串是不用替换的；需要满足「平衡字符串」的话，剩余的字符串 QWER 的数量应该 <= s.length / 4；因为 s.length 是 4 的倍数，如果替换了之后剩余字符依然存在 QWER 的个数 > s.length / 4 的话，就绝对无法满足 QWER 4 等分的条件。

因此首先记录下 s 内 QWER 的个数，再次从 right = 0 遍历 s，每次减去对应的个数；当满足 QWER 所有都<= s.length / 4 时，表示只要替换掉 [0, right] 处的所有字符，就能得到「平衡字符串」；

此时，就可以滑动窗口，去寻找更少需要替换字符的数量，从 left = 0 将减去的字符加回去，看是否满足 QWER <= s.length / 4，直到不满足退出 while，继续向后查询。

这里有网友做的画图讲解，[画图小匠](https://leetcode.cn/problems/replace-the-substring-for-balanced-string/solutions/2108942/javahua-dong-chuang-kou-de-fan-xiang-si-2dz8w/)，更容易理解。

### 代码

```ts
function balancedString(s: string): number {
  const k = Math.floor(s.length / 4);
  const map = { Q: 0, W: 0, E: 0, R: 0 };

  // 记录字符出现的次数
  for (let i = 0; i < s.length; i++) map[s[i]]++;

  // 满足要求
  if (map.Q == k && map.W == k && map.E == k && map.R == k) return 0;

  let res = Infinity;
  let left = 0;

  // left,right替换字符窗口
  for (let right = 0; right < s.length; right++) {
    // 被替换的字符则--
    map[s[right]]--;

    // 当所有字符都 <= k 表示替换掉 left,right 内的字符就得到了「平衡字符串」
    while (map.Q <= k && map.W <= k && map.E <= k && map.R <= k) {
      res = Math.min(res, right - left + 1);

      // 将左端的字符加回来，看是否可以少替换一些，是否满足条件
      map[s[left]]++;
      left++;
    }
  }

  return res === Infinity ? 0 : res;
}
```
