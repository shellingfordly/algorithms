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
  let m = s.length,
    n = p.length;
  const dp: boolean[][] = [[true]];

  for (let j = 0; j < n + 1; j++) {
    if (p[j - 1] == "*") dp[0][j] = dp[0][j - 2];
  }

  for (let i = 1; i < m + 1; i++) {
    dp[i] = [false];
    for (let j = 1; j < n + 1; j++) {
      if (s[i - 1] == p[j - 1] || p[j - 1] == ".") {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (p[j - 1] == "*") {
        if (s[i - 1] != p[j - 2] && p[j - 2] != ".") {
          dp[i][j] = dp[i][j - 2];
        } else {
          dp[i][j] = Boolean(Number(dp[i][j - 2]) | Number(dp[i - 1][j]));
        }
      }
    }
  }

  return dp[m][n];
}
