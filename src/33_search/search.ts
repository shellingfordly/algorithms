export const search = function (nums: number[], target: number): number {
  function bisect(
    nums: number[],
    left: number,
    right: number,
    target: number
  ): number {
    if (right < left) return -1;
    let mid = Math.floor((left + right) / 2);
    let leftVal = nums[left],
      rightVal = nums[right],
      midVal = nums[mid];

    if (target == leftVal) return left;
    if (target == rightVal) return right;
    if (target == midVal) return mid;

    if (leftVal < midVal) {
      if (target > leftVal && target < midVal) {
        return bisect(nums, left + 1, mid - 1, target);
      } else {
        return bisect(nums, mid + 1, right - 1, target);
      }
    } else {
      if (target > midVal && target < rightVal) {
        return bisect(nums, mid + 1, right - 1, target);
      } else {
        return bisect(nums, left + 1, mid - 1, target);
      }
    }
  }
  return bisect(nums, 0, nums.length - 1, target);
};

export const search1 = function (nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let leftVal = nums[left];
    let rightVal = nums[right];
    let midVal = nums[mid];

    if (target == midVal) return mid;

    if (leftVal <= midVal) {
      if (target >= leftVal && target < midVal) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (target > midVal && target <= rightVal) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
};
