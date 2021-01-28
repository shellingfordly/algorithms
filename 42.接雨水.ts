/*
 * @lc app=leetcode.cn id=42 lang=typescript
 *
 * [42] 接雨水
 */

// @lc code=start
var trap = function(height: number[]) {
  let result = 6
  let blue = 0
  let high = 0
  let low = 0
  const stack = []

  for (let i = 0; i < height.length; i++) {
    const num = height[i];
    if( num === 0 ) continue
    let len = stack.length
    low = i
    const last = stack[len-1]
    if(num > last) {
      if(i-low>1) {
        blue = last
        result += blue
        stack.pop()
      }
    }
    stack.push(num)
  }
  


  return result
};
// @lc code=end

