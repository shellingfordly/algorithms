// 转成字符串
export function reverse1(x: number): number {
  const min = Math.pow(-2, 31);
  const max = Math.pow(2, 31) - 1;
  let s = String(x);
  if (x < 0) {
    s = s.replace("-", "") + "-";
  }
  const res = Number(s.split("").reverse().join(""));

  if (res < min || res > max) return 0;
  return res;
}

export function reverse2(x: number): number {
  if (!x) return x;
  const _x = Math.abs(x);
  const res = String(_x)
    .split("")
    .reduce((p, n, i) => p + Number(n) * Math.pow(10, i), 0);

  if (res < Math.pow(-2, 31) || res > Math.pow(2, 31) - 1) return 0;

  return res * (x / _x);
}

export function reverse(x: number): number {
  if (!x) return x;
  let _x = Math.abs(x);
  const arr: number[] = [];

  while (_x >= 1) {
    arr.push(_x % 10);
    _x = Math.floor(_x / 10);
  }

  const res = arr.reduce(
    (p, n, i) => p + Number(n) * Math.pow(10, arr.length - i - 1),
    0
  );

  if (res < Math.pow(-2, 31) || res > Math.pow(2, 31) - 1) return 0;

  return x < 0 ? res * -1 : res;
}
