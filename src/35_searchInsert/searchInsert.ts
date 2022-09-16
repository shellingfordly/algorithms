export function searchInsert1(nums: number[], target: number): number {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) return i;
  }
  return nums.length;
}

export function searchInsert(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;
  let ans = nums.length;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (target <= nums[mid]) {
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return ans;
}
