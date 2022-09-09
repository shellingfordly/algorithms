export function removeElement(nums: number[], val: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    if (nums[left] === val) {
      if (nums[right] === val) {
        right--;
      } else {
        const temp = nums[right];
        nums[right] = nums[left];
        nums[left] = temp;
        left++;
        right--;
      }
    } else {
      left++;
    }
  }
  return left;
}

export function removeElement1(nums: number[], val: number): number {
  let slow = 0,
    fast = 0;
  while (fast < nums.length) {
    if (nums[fast] !== val) {
      nums[slow++] = nums[fast];
    }
    fast++;
  }
  return slow;
}
