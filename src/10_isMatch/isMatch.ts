export function isMatch1(s: string, p: string): boolean {
  let flag = false,
    i = 0,
    j = 0,
    v = "";
  while (j < p.length || i < s.length) {
    if (p[j] === "*") {
      if (flag) j++;
      else {
        if (s[i] === v || (v === "." && s[i] !== undefined)) i++;
        else j++;
      }
    }
    // 需要做一些处理
    // i 跑完之后， j还没有跑完，但也可能是正确的
    else {
      if ((p[j] === "." && !flag) || s[i] === p[j]) {
        v = p[j];
        i++;
        flag = false;
      } else {
        if (flag) return false;
        flag = true;
      }
      j++;
    }
  }
  if (i < s.length) return false;
  if (j < p.length) return false;
  return !flag;
}

export function isMatch(s: string, p: string): boolean {
  // 技巧：往原字符头部插入空格，这样得到 char 数组是从 1 开始，而且可以使得 f[0][0] = true，可以将 true 这个结果滚动下去
  const n = s.length,
    m = p.length;
  s = " " + s;
  p = " " + p;
  // f(i,j) 代表考虑 s 中的 1~i 字符和 p 中的 1~j 字符 是否匹配
  const f = Array(n + 1)
    .fill([])
    .map((_) => Array(m + 1).fill(false));

  f[0][0] = true;
  for (let i = 0; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      // 如果下一个字符是 '*'，则代表当前字符不能被单独使用，跳过
      if (j + 1 <= m && p[j + 1] == "*") continue;

      if (i - 1 >= 0 && p[j] != "*") {
        // 对应了 p[j] 为普通字符和 '.' 的两种情况
        f[i][j] = f[i - 1][j - 1] && (s[i] == p[j] || p[j] == ".");
      } else if (p[j] == "*") {
        // 对应了 p[j] 为 '*' 的情况
        f[i][j] =
          (j - 2 >= 0 && f[i][j - 2]) ||
          (i - 1 >= 0 && f[i - 1][j] && (s[i] == p[j - 1] || p[j - 1] == "."));
      }
    }
  }
  return f[n][m];
}
