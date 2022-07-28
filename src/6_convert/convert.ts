export function convert(s: string, numRows: number): string {
  const arr: string[][] = [];
  let index = 0;
  let flag = 0;
  for (let j = 0; j < s.length; j++) {
    if (!s[index]) break;
    for (let i = 0; i < numRows; i++) {
      if (!s[index]) break;
      if (!arr[i]) arr[i] = [];
      // 双数列为 1
      if (!(j % (numRows - 1))) {
        arr[i][j] = s[index++];
        flag = i + j;
      } else {
        // 对角线
        if (!((i + j) % flag)) arr[i][j] = s[index++];
        else arr[i][j] = "";
      }
    }
  }

  // return arr.flat().join("");
  return arr.reduce(
    (p, n) =>
      p +
      n.reduce((_p, _n) => {
        return _p + (typeof _n == "string" ? _n : "");
      }, ""),
    ""
  );
}
