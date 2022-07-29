export function atoi(s: string): number {
  const min = Math.pow(2, 31) * -1;
  const max = Math.pow(2, 31) - 1;
  let result = 1;
  s = s.trim();
  if (!/\d|\-|\+/.test(s[0])) {
    return 0;
  }

  if (/\-|\+/.test(s[0])) {
    if (s[0] === "-") result = -1;
    s = s.slice(1);
  }

  for (let i = 0; i < s.length; i++) {
    if (!/\d/.test(s[i])) s = s.slice(0, i);
  }

  result = Number(s) * result;

  if (result < min) {
    return min;
  } else if (result > max) {
    return max;
  }
  return result;
}
