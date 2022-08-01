export function intToRoman(num: number): string {
  const hash: Record<number, string> = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };
  const arr: number[] = [];
  while (num > 0) {
    arr.push(num % 10);
    num = Math.floor(num / 10);
  }

  let result = "";
  for (let i = arr.length - 1; i >= 0; i--) {
    const a = arr[i];
    const k = Math.pow(10, i);
    const v = hash[k * a];
    if (v) result += v;
    else {
      let j = k * a;
      if (a > 5) {
        j -= k * 5;
        result += hash[k * 5];
      }
      while (j > 0) {
        result += hash[k];
        j -= k;
      }
    }
  }
  return result;
}
