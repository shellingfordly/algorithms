export function firstMissingPositive(nums: number[]): number {
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    if (nums[i] <= 0) nums[i] = len + 1;
  }

  for (let i = 0; i < len; i++) {
    const index = Math.abs(nums[i]) - 1;
    if (index < len && nums[index] > 0) nums[index] *= -1;
  }

  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) return i + 1;
  }
  return len + 1;
}

export function firstMissingPositive1(nums: number[]): number {
  nums = nums.sort((a, b) => a - b);
  const last = nums[nums.length - 1];
  if (nums[0] > 1 || last <= 0) return 1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) continue;

    if (i > 0 && nums[i] - nums[i - 1] == 1) {
      continue;
    }
    if (nums[i] - nums[i - 1] > 1) {
      if (nums[i - 1] >= 0) return nums[i - 1] + 1;
      else if (nums[i] > 1) return 1;
    }
  }

  return nums[nums.length - 1] + 1;
}

export function firstMissingPositive2(nums: number[]): number {
  const len = nums.length;
  for (let i = 0; i < len; ) {
    const index = nums[i] - 1;
    if (index < 0 || index >= len || nums[index] == index + 1) {
      i++;
      continue;
    }
    nums[i] = nums[index];
    nums[index] = index + 1;
  }

  for (let i = 0; i < len; i++) {
    if (nums[i] !== i + 1) return i + 1;
  }
  return len + 1;
}

export function firstMissingPositive3(nums: number[]): number {
  const len = nums.length;
  for (let i = 0; i < len; ++i) {
    // * 1～len 的数替换到正确的下标位置
    while (nums[i] > 0 && nums[i] <= len && nums[nums[i] - 1] != nums[i]) {
      const temp = nums[nums[i] - 1];
      nums[nums[i] - 1] = nums[i];
      nums[i] = temp;
    }
  }
  for (let i = 0; i < len; i++) {
    if (nums[i] !== i + 1) return i + 1;
  }
  return len + 1;
}
