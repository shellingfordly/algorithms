export function threeSumClosest1(nums: number[], target: number): number {
  if (!nums || nums.length < 3) return 0;
  let result = Infinity;
  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }
    let l = i + 1;
    let r = nums.length - 1;

    while (l < r) {
      const n = nums[i] + nums[l] + nums[r];
      if (n === target) return n;

      if (Math.abs(n - target) < Math.abs(result - target)) {
        result = n;
      }

      if (n > target) {
        while (l < r - 1 && nums[r] == nums[r - 1]) r--;
        r--;
      } else if (n < target) {
        while (l + 1 < r && nums[l + 1] == nums[l]) l++;
        l++;
      }
    }
  }

  return result;
}

export function threeSumClosest(nums: number[], target: number): number {
  const length = nums.length;
  if (!nums || length < 3) return 0;
  let result = nums[0] + nums[1] + nums[2];
  if (length === 3) return result;
  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < length - 2; i++) {
    let l = i + 1;
    let r = nums.length - 1;

    while (l < r) {
      const n = nums[i] + nums[l] + nums[r];
      if (n === target) return n;

      if (Math.abs(n - target) < Math.abs(result - target)) {
        result = n;
      }

      if (n > target) {
        r--;
      } else if (n < target) {
        l++;
      }
    }
  }

  return result;
}
