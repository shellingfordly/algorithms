// 纵向搜索
export function longestCommonPrefix1(strs: string[]): string {
  let j = 0;
  let prefix = "";
  let minLength = Math.min(...strs.map((v) => v.length));

  while (minLength > 0) {
    prefix += strs[0][j];
    for (let i = 1; i < strs.length; i++) {
      if (strs[i][j] !== prefix[j]) {
        return prefix.slice(0, j);
      }
    }
    j++;
    minLength--;
  }

  return prefix;
}

export function longestCommonPrefix2(strs: string[]): string {
  let prefix = strs[0];
  for (let j = 0; j < prefix.length; j++) {
    for (let i = 1; i < strs.length; i++) {
      if (strs[i][j] !== prefix[j]) {
        return prefix.slice(0, j);
      }
    }
  }
  return prefix;
}

// 横向搜索
export function longestCommonPrefix(strs: string[]): string {
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    prefix = commonPrefix(prefix, strs[i]);
    if (!prefix) break;
  }
  function commonPrefix(str1: string, str2: string) {
    let j = 0;
    while (j < str1.length && str1[j] == str2[j]) j++;
    return str1.slice(0, j);
  }
  return prefix;
}
