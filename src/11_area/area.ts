export function area(height: number[]): number {
  let i = 0;
  let j = height.length - 1;
  let result = 0;

  while (i < j) {
    const left = height[i];
    const right = height[j];
    const h = Math.min(left, right);
    result = Math.max(result, (j - i) * h);
    left > right ? j-- : i++;
  }

  return result;
}
