export function myPow(x: number, n: number): number {
  const _pow = (x: number, n: number): number => {
    if (n == 0) return 1;

    const r = _pow(x, Math.floor(n / 2));
    return n % 2 == 0 ? r * r : r * r * x;
  }
  if (n === 0) return 1

  return n > 0 ? _pow(x, n) : 1 / _pow(x, -1 * n)
};

