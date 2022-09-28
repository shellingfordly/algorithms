export function multiply(num1: string, num2: string): string {
  if (num1 == "0" || num2 == "0") return "0";

  let m = num1.length;
  let n = num2.length;
  let arr: number[] = Array(m + n).fill(0);

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const r = Number(num1[i]) * Number(num2[j]);
      arr[i + j + 1] += r % 10;
      arr[i + j] += Math.floor(r / 10);
    }
  }

  for (let i = m + n - 1; i > 0; i--) {
    if (arr[i] >= 10) {
      arr[i - 1] += Math.floor(arr[i] / 10);
      arr[i] = arr[i] % 10;
    }
  }

  if (arr[0] === 0) arr.shift();
  return arr.join("");
}

export function multiply1(num1: string, num2: string): string {
  if (num1 == "0" || num2 == "0") return "0";
  let m = num1.length;
  let n = num2.length;
  let arr: number[] = Array(m + n).fill(0);

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      let sum = Number(num1[i]) * Number(num2[j]) + arr[i + j + 1];
      arr[i + j] += Math.trunc(sum / 10);
      arr[i + j + 1] = sum % 10;
    }
  }
  if (arr[0] === 0) arr.shift();
  return arr.join("");
}
