export function romanToInt(s: string): number {
  const hash: Record<string, number> = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const k = s[i];
    const n = s[i + 1];
    const v = n ? hash[k + n] : "";
    if (v) {
      result += v;
      i++;
    } else {
      result += hash[k];
    }
  }

  return result;
}
