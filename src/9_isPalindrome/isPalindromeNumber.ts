export function isPalindrome(x: number): boolean {
  const xStr = String(x);

  for (let i = 0, j = xStr.length - 1; i < j; i++, j--) {
    if (xStr[i] !== xStr[j]) return false;
  }

  return true;
}

export function isPalindrome1(x: number): boolean {
  if (x < 0) return false;
  const arr: number[] = [];

  while (x > 0) {
    arr.push(x % 10);
    x = Math.floor(x / 10);
  }

  for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
    if (arr[i] !== arr[j]) return false;
  }

  return true;
}
