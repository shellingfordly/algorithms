export function groupAnagrams(strs: string[]): string[][] {
  const result: string[][] = []

  const map: Record<string, string[]> = {}

  for (let i = 0; i < strs.length; i++) {
    const str = strs[i]

    if (!result.length) {
      result[0] = [str]
    } else {
      let isFind = false
      for (let i = 0; i < result.length; i++) {
        const s = result[i][0]
        if (isAnagramsWord1(str, s)) {
          result[i].push(str)
          isFind = true
        }
      }
      if (!isFind) {
        result.push([str])
      }
    }
  }

  return result
};

// 2s
function isAnagramsWord1(s1: string, s2: string) {
  if (s1.length !== s2.length) return false
  const obj: Record<string, number> = {}

  for (let i = 0; i < s1.length; i++) {
    const s = s1[i]
    obj[s] ? obj[s]++ : obj[s] = 1;
  }

  for (let i = 0; i < s2.length; i++) {
    const s = s2[i]
    if (!obj[s]) return false
    obj[s]--
  }

  return Object.values(obj).reduce((p, n) => p + n, 0) === 0;
}