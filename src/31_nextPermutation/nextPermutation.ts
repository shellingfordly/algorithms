export function nextPermutation(nums: number[]): number[] {
  let i = nums.length - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }

  if (i >= 0) {
    let j = nums.length - 1;
    while (j >= 0 && nums[i] >= nums[j]) {
      j--;
    }
    swap(nums, i, j);
  }

  reverse(nums, i + 1);

  return nums;
}

function swap(nums: number[], i: number, j: number) {
  [nums[i], nums[j]] = [nums[j], nums[i]];
}

function reverse(nums: number[], start: number) {
  let left = start;
  let right = nums.length - 1;
  while (left < right) {
    swap(nums, left, right);
    left++;
    right--;
  }
}
