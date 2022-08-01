export function longestCommonPrefix(strs: string[]): string {
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

export function longestCommonPrefix1(strs: string[]): string {
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
