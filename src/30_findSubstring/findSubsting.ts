export function findSubstring(s: string, words: string[]): number[] {
  const result = [];
  const sLen = s.length;
  const wLen = words[0].length;
  const wsLen = words.length;
  if (sLen < wLen * wsLen) return [];

  const wordsMap: any = {};
  words.forEach((k) => (wordsMap[k] ? wordsMap[k]++ : (wordsMap[k] = 1)));

  for (let i = 0; i < sLen; i++) {
    if (wsLen * wLen + i > sLen) break;
    if (isStr(i, wsLen * wLen + i)) {
      result.push(i);
    }
  }

  function isStr(i: number, len: number) {
    const _wordsMap = JSON.parse(JSON.stringify(wordsMap));
    for (; i < len; i += wLen) {
      const str = s.slice(i, i + wLen);
      if (_wordsMap[str]) _wordsMap[str]--;
      else return false;
    }
    return true;
  }

  return result;
}
