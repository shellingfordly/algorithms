export function combinationSum2(
  candidates: number[],
  target: number
): number[][] {
  const path: number[] = [];
  const res: number[][] = [];

  candidates = candidates.sort((a, b) => a - b);
  dfs(candidates, target, path, res);

  function dfs(
    candidates: number[],
    target: number,
    path: number[],
    res: number[][]
  ) {
    if (target == 0) {
      res.push([...path]);
      return;
    }
    for (let i = 0; i < candidates.length; i++) {
      const d = candidates[i - 1];
      if (d < 0) break;
      if (candidates[i] == candidates[i - 1]) continue;
      path.push(candidates[i]);
      dfs(candidates.slice(i + 1), d, path, res);
      path.pop();
    }
  }

  return res;
}
