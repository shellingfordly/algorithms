/**
 * @description
 *    给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
 *    说明：本题中，我们将空字符串定义为有效的回文串。
 * @param {string} s
 * @return {boolean}
 */
export function isPalindrome(s: string): boolean {
  const arr = s
    .replace(/\W/g, "")
    .replace(/\_/g, "")
    .split("")
    .map((v) => v.toLowerCase());

  if (!arr) return false;

  let start = 0;
  let end = arr.length - 1;

  while (!(start > end)) {
    if (arr[start] !== arr[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}
