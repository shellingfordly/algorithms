export function threeSum(nums: number[]): number[][] {
  if (nums.length < 3) return [];
  const result: number[][] = [];
  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    if (nums[i] > 0) break;

    let l = i + 1;
    let r = nums.length - 1;

    while (l < r) {
      const n = nums[i] + nums[l] + nums[r];
      if (n > 0) {
        r--;
      } else if (n < 0) {
        l++;
      } else {
        result.push([nums[i], nums[l], nums[r]]);
        while (l < r && nums[l] === nums[l + 1]) l++;
        while (l < r && nums[r] === nums[r - 1]) r--;
        r--;
        l++;
      }
    }
  }
  return result;
}
