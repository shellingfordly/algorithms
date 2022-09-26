export function trap(height: number[]): number {
  const len = height.length;
  const leftMax: number[] = [];
  const rightMax: number[] = [];
  let result = 0;

  for (let i = 0; i < len; i++) {
    leftMax[i] = Math.max(leftMax[i - 1] || 0, height[i]);
  }

  for (let i = len - 1; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1] || 0, height[i]);
  }

  for (let i = 0; i < len; i++) {
    result += Math.min(leftMax[i], rightMax[i]) - height[i];
  }

  return result;
}

export var trap1 = function (height: number[]) {
  let ans = 0;
  const stack: number[] = [];
  const n = height.length;
  for (let i = 0; i < n; ++i) {
    while (stack.length && height[i] > height[stack[stack.length - 1]]) {
      const top = stack.pop();
      if (!stack.length) break;
      const left = stack[stack.length - 1];
      const currWidth = i - left - 1;
      const currHeight = Math.min(height[left], height[i]) - height[top!];
      ans += currWidth * currHeight;
    }
    stack.push(i);
  }
  return ans;
};

export function trap2(height: number[]) {
  let left = 0;
  let right = height.length - 1;

  let leftMax = 0;
  let rightMax = 0;
  let result = 0;

  while (left < right) {
    leftMax = Math.max(leftMax, height[left]);
    rightMax = Math.max(rightMax, height[right]);
    if (height[left] < height[right]) {
      result += leftMax - height[left];
      left++;
    } else {
      result += rightMax - height[right];
      right--;
    }
  }
  return result;
}
