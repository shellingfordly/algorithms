/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const obj: any = {};
  for (let index = 0; index < nums.length; index++) {
    const item = nums[index];
    if (item in obj) {
      return [obj[item], index];
    } else obj[target - item] = index;
  }
  return [];
}
// @lc code=end
