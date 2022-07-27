export function lengthOfLongestSubstring(s: string): number {
  const len = s.length;
  if (!len) return 0;
  let count = 0;
  let i = 0;
  let j = 1;

  while (j < len) {
    if (s.slice(i, j).includes(s[j])) {
      count = Math.max(count, j - i);
      i++;
    } else {
      j++;
    }
  }
  return Math.max(count, j - i);
}
