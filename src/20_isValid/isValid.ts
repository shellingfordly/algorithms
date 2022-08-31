export function isValid(s: string): boolean {
  const len = s.length;
  if (len % 2 !== 0) return false;
  const map: Record<string, string> = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  const stack: string[] = [];
  for (let i = 0; i < len; i++) {
    const str = s[i];
    if (map[str]) {
      stack.push(str);
    } else {
      const top = stack.pop();
      if (top && map[top] == str) {
        continue;
      } else return false;
    }
  }
  return !stack.length;
}
