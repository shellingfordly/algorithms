/*
给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。

回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

例如，121 是回文，而 123 不是。
 

示例 1：

输入：x = 121
输出：true
示例 2：

输入：x = -121
输出：false
解释：从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
示例 3：

输入：x = 10
输出：false
解释：从右向左读, 为 01 。因此它不是一个回文数。
 

提示：

-231 <= x <= 231 - 1
 

进阶：你能不将整数转为字符串来解决这个问题吗？

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/palindrome-number
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

*/

export function isPalindrome(s: string): boolean {
  function formatString(s: string) {
    return s.replace(/\W|_/g, "").toLowerCase();
  }

  const formatStr = formatString(s);
  const reverseStr = formatStr.split("").reverse().join("");

  return formatStr === reverseStr;
}

export function isPalindrome1(s: string): boolean {
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

export function isPalindrome2(s: string): boolean {
  let arr = s.match(/[a-z]|[A-Z]|\d/g);
  if (!arr) return false;
  arr = [...arr].map((v) => v.toLowerCase());

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
