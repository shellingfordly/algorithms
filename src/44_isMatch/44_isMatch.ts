export function isMatch(s: string, p: string): boolean {
  let slen = s.length;
  let plen = p.length;
  let dp = Array(slen + 1)
    .fill([])
    .map(() => Array(plen + 1).fill(false));

  dp[0][0] = true;

  for (let i = 1; i <= plen; i++) {
    if (p[i - 1] == "*") {
      dp[0][i] = true;
    } else break;
  }

  for (let i = 1; i <= slen; i++) {
    for (let j = 1; j <= plen; j++) {
      if (p[j - 1] == "*") {
        dp[i][j] = Boolean(dp[i][j - 1] | dp[i - 1][j]);
      } else if (p[j - 1] == "?" || p[j - 1] == s[i - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      }
    }
  }

  return dp[slen][plen];
}
