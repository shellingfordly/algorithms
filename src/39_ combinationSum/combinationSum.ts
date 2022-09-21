export function combinationSum(
  candidates: number[],
  target: number
): number[][] {
  const ans: number[][] = [];
  const dfs = (target: number, combine: number[], idx: number) => {
    if (idx === candidates.length) {
      return;
    }
    if (target === 0) {
      ans.push(combine);
      return;
    }
    dfs(target, combine, idx + 1);
    if (target - candidates[idx] >= 0) {
      dfs(target - candidates[idx], [...combine, candidates[idx]], idx);
    }
  };

  dfs(target, [], 0);
  return ans;
}

export function combinationSum1(
  candidates: number[],
  target: number
): number[][] {
  const path: number[] = [];
  const res: number[][] = [];

  candidates = candidates.sort((a, b) => a - b);
  dfs(0, target, path, res);

  function dfs(begin: number, target: number, path: number[], res: number[][]) {
    if (target == 0) {
      res.push([...path]);
      return;
    }

    for (let i = begin; i < candidates.length; i++) {
      if (target - candidates[i] < 0) break;
      path.push(candidates[i]);
      dfs(i, target - candidates[i], path, res);
      path.pop();
    }
  }

  return res;
}
