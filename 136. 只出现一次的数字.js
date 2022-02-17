// 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
// 说明：
// 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

// 示例 1:
// 输入: [2,2,1]
// 输出: 1

// 示例 2:
// 输入: [4,1,2,1,2]
// 输出: 4

/**
 * @param {number[]} nums
 * @return {number}
 */

// 最优解
var singleNumber = function (nums) {
  let result = 0;
  nums.forEach((num) => (result ^= num));
  return result;
};

// 次优解
var singleNumber = function (nums) {
  let hash = {};
  nums.forEach((num) => {
    if (hash[num]) {
      hash[num]++;
    } else {
      hash[num] = 1;
    }
  });

  for (let key in hash) {
    if (hash[key] === 1) {
      return key;
    }
  }
};

// 最差解
var singleNumber = function (nums) {
  let result = null;

  for (let i = 0; i < nums.length; i++) {
    if (!result) {
      result = nums[i];
    }
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j] && i !== j) {
        result = null;
        break;
      }
    }
    if (result) return result;
  }
  return result;
};
