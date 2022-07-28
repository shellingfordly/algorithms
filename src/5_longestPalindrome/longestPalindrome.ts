/**
 * @暴力求解
 * @超出时间限制
 * */
export function longestPalindrome(s: string): string {
  const arr = [""];
  let maxLen = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      const value = s.slice(i, j);
      if (j - i < maxLen) continue;
      if (isPalindrome(value)) {
        maxLen = value.length;
        arr[value.length] = value;
      }
    }
  }

  function isPalindrome(s: string): boolean {
    let l = 0;
    let r = s.length - 1;
    while (l < r) {
      if (s[l] === s[r]) {
        l++;
        r--;
      } else {
        return false;
      }
    }
    return true;
  }
  return arr.pop()!;
}

/**
 * @中心扩散
 */
export function longestPalindrome1(s: string): string {
  let res = "";

  for (let i = 0; i < s.length; i++) {
    // 单数回文串
    const s1 = palindrome(s, i, i);
    // 双数回文串
    const s2 = palindrome(s, i, i + 1);

    res = s1.length > res.length ? s1 : res;
    res = s2.length > res.length ? s2 : res;
  }

  function palindrome(s: string, l: number, r: number): string {
    while (l >= 0 && r < s.length && s.charAt(l) === s.charAt(r)) {
      l--;
      r++;
    }
    return s.substring(l + 1, r);
  }

  return res;
}

/**
 * @动态规划
 */
export function longestPalindrome2(s: string): string {
  const strLen = s.length;
  if (s == null || strLen < 2) {
    return s;
  }
  let maxStart = 0; //最长回文串的起点
  let maxEnd = 0; //最长回文串的终点
  let maxLen = 1; //最长回文串的长度

  const dp: boolean[][] = [];

  for (let r = 1; r < strLen; r++) {
    for (let l = 0; l < r; l++) {
      dp[l] = [];
      if (s.charAt(l) == s.charAt(r) && (r - l <= 2 || dp[l + 1][r - 1])) {
        dp[l][r] = true;
        if (r - l + 1 > maxLen) {
          maxLen = r - l + 1;
          maxStart = l;
          maxEnd = r;
        }
      }
    }
  }
  return s.substring(maxStart, maxEnd + 1);
}
