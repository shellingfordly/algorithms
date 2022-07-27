// 超出时间限制

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
  return arr.pop()!;
}

export function isPalindrome(s: string): boolean {
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
  // const reverseStr = s.split("").reverse().join("");
  // return s === reverseStr;
}

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
