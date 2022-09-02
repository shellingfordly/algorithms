export function generateParenthesis(n: number): string[] {
  function generate(n: number) {
    if (n === 1) return new Set(["()"]);
    const result = new Set<string>();
    const list = generate(n - 1);
    list.forEach((item) => {
      for (let j = 0; j < item.length; j++) {
        result.add(`${item.slice(0, j)}()${item.slice(j)}`);
      }
    });
    return result;
  }
  const res = generate(n);

  return [...res];
}
