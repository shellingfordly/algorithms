export function removeDuplicates(nums: number[]): number {
  let flag = -1;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === nums[i - 1]) {
      (nums as any)[i] = null;
      flag = i + 1;
    }
  }
  if (flag < 0) return nums.length;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == null) {
      let j = flag;

      while (j < nums.length) {
        if (nums[j] !== null) {
          nums[i] = nums[j];

          (nums as any)[j] = null;
          flag = j + 1;
          break;
        }
        j++;
      }
    }
  }

  return nums.filter((v) => v !== null).length;
}

export function removeDuplicates1(nums: number[]): number {
  let slow = 1;
  let fast = 1;
  const len = nums.length;

  if (len <= 1) {
    return len;
  }

  while (fast < len) {
    if (nums[fast] !== nums[fast - 1]) {
      nums[slow] = nums[fast];
      slow++;
    }
    fast++;
  }
  return slow;
}
