export function groupAnagrams(strs: string[]): string[][] {
  const result: string[][] = []

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

// 超时
export function isAnagramsWord(s1: string, s2: string) {
  if (s1.length !== s2.length) return false

  const obj1 = s1.split("").sort()
  const obj2 = s2.split("").sort()

  return JSON.stringify(obj1) === JSON.stringify(obj2)
}

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



// 官方解答
export function groupAnagrams1(strs: string[]): string[][] {
  const map = new Map<string, string[]>()

  for (let i = 0; i < strs.length; i++) {
    const arr = Array.from(strs[i])
    arr.sort();
    const key = arr.toString();
    const list = map.has(key) ? map.get(key) : [];

    list?.push(strs[i])
    map.set(key, list!)
  }

  return [...map.values()]
}