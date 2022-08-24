export function fourSum(_nums: number[], target: number): number[][] {
  const nums = _nums.sort((a, b) => a - b);
  const result: number[][] = [];
  const len = nums.length;

  if (len < 4) return result;

  for (let i = 0; i <= len - 4; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    for (let j = i + 1; j <= len - 3; j++) {
      if (j > i + 1 && nums[j] == nums[j - 1]) continue;
      let q = j + 1;
      let p = len - 1;
      while (q < p) {
        const sum = nums[i] + nums[j] + nums[q] + nums[p];
        if (sum == target) {
          result.push([nums[i], nums[j], nums[q], nums[p]]);
          while (q < p && nums[q] == nums[q + 1]) q++;
          while (q < p && nums[p] == nums[p - 1]) p--;
          q++;
          p--;
        }
        if (sum < target) {
          q++;
        } else if (sum > target) {
          p--;
        }
      }
    }
  }

  return result;
}
