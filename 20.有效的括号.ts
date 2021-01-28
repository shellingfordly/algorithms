/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {
  const obj = {
    '{': '}',
    '[': ']',
    '(': ')',
  }

  const stack = []

  for (let index = 0; index < s.length; index++) {
    const item = s[index];
    if(item in obj ) {
      stack.push(item)
    }else {
      const len = stack.length - 1
      if(item === obj[stack[len]])
        stack.pop()
      else return false
    }
  }
  return !stack.length
};
// @lc code=end

