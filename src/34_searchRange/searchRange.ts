export function searchRange(nums: number[], target: number): number[] {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== target) continue;
    if (result.length) result[1] = i;
    else result[0] = i;
  }

  if (result.length == 1) result[1] = result[0];
  else if (result.length == 0) result = [-1, -1];

  return result;
  // * time: O(n)
  // * space: O(1)
}

export function searchRange1(nums: number[], target: number): number[] {
  const _nums = nums
    .map((num, index) => [num, index])
    .filter((list) => list[0] == target)
    .map((list) => list[1]);

  const len = _nums.length;

  if (len === 0) return [-1, -1];
  else if (len === 1) return [_nums[0], _nums[0]];
  else return [_nums[0], _nums[len - 1]];
  // * time: O(n)
  // * space: O(n)
}

export function searchRange2(nums: number[], target: number): number[] {
  function findPosition(nums: number[], target: number, type: number): number {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
      const mid = Math.floor((left + right + type) / 2);
      if (nums[mid] < target) {
        left = mid + 1;
      } else if (nums[mid] == target) {
        !type ? (right = mid) : (left = mid);
      } else {
        right = mid - 1;
      }
    }
    if (nums[left] == target) return left;
    return -1;
  }

  const left = findPosition(nums, target, 0);
  const right = findPosition(nums, target, 1);
  return [left, right];
  // * time: O(log n)
  // * space: O(1)
}
