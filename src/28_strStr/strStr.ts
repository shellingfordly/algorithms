export function strStr(haystack: string, needle: string): number {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] == needle[0]) {
      let isStr = true;
      for (let j = 1; j < needle.length; j++) {
        if (haystack[i + j] != needle[j]) {
          isStr = false;
          break;
        }
      }
      if (isStr) {
        return i;
      }
    }
  }
  return -1;
}

export function strStr1(haystack: string, needle: string): number {
  for (let i = 0; i < haystack.length; i++) {
    if (
      haystack[i] == needle[0] &&
      haystack.slice(i, i + needle.length) == needle
    )
      return i;
  }
  return -1;
}

export function strStr2(haystack: string, needle: string): number {
  return haystack.indexOf(needle);
}
