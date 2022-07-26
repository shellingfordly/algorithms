export function wordBreak(s: string, wordDict: string[]): boolean {
  const length = s.length;
  const dict = new Set(wordDict);
  const history: boolean[] = Array.from({ length });

  const dfs = (startIndex: number): boolean => {
    if (startIndex === length) return true;
    if (history[startIndex] !== undefined) {
      return history[startIndex];
    }
    for (let i = startIndex + 1; i <= length; i++) {
      const prefix = s.slice(startIndex, i);
      if (dict.has(prefix) && dfs(i)) {
        history[i] = true;
        return true;
      }
    }
    history[startIndex] = false;
    return false;
  };

  return dfs(0);
}
