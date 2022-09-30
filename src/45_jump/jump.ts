export function jump(nums: number[]): number {
  let maxPosition = 0;
  let end = 0;
  let steps = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    maxPosition = Math.max(maxPosition, i + nums[i]);
    if (i == end) {
      end = maxPosition;
      steps++;
    }
  }
  return steps;
}

export function jump1(nums: number[]): number {
  let position = nums.length - 1;
  let steps = 0;
  while (position > 0) {
    for (let i = 0; i < position; i++) {
      if (nums[i] + i >= position) {
        position = i;
        steps++;
        break;
      }
    }
  }
  return steps;
}
