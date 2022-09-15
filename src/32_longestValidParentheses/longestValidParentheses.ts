export function longestValidParentheses(s: string): number {
  if (s.length <= 1) return 0;
  const stack: number[] = [];
  const sum: number[] = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
      sum[i] = 0;
    } else if (s[i] === ")") {
      const top = stack.pop();
      if (top !== undefined) {
        sum[i] = (sum[top - 1] || 0) + (sum[i - 1] || 0) + 2;
      } else {
        sum[i] = 0;
      }
    }
  }
  return Math.max(...sum);
}

export function longestValidParentheses1(s: string): number {
  let left = 0,
    right = 0,
    max = 0;
  for (let i = 0; i < s.length; i++) {
    fn(i);
    if (right > left) em();
  }
  em();
  for (let i = s.length - 1; i >= 0; i--) {
    fn(i);
    if (left > right) em();
  }

  function fn(i: number) {
    if (s[i] === "(") {
      left++;
    } else {
      right++;
    }
    if (left === right) {
      max = Math.max(left * 2, max);
    }
  }

  function em() {
    left = 0;
    right = 0;
  }

  return max;
}
