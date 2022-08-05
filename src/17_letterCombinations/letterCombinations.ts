export function letterCombinations(digits: string): string[] {
  const hashMap: Record<string, string> = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  const res: string[] = [];

  function backtrack(con: string, next: string) {
    if (next.length == 0) con && res.push(con);
    else {
      const s = hashMap[next[0]];
      for (let i = 0; i < s.length; i++) {
        backtrack(con + s[i], next.slice(1));
      }
    }
  }

  if (digits) backtrack("", digits);
  return res;
}
