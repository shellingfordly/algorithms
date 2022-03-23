/**
 * @description 分割回文串
 *    给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。
 *    回文串 是正着读和反着读都一样的字符串。
 * @param s 
 * @returns 
 */
export function partition(s: string) {
  const res: string[][] = [];
  function dfs(temp: string[], start: number) {
    if (start === s.length) {
      res.push(temp.slice());
    //   console.log("res: ", res);
      return;
    }

    for (let i = start; i < s.length; i++) {
      if (isPali(s, start, i)) {
        temp.push(s.substring(start, i + 1));
        // console.log("start:", start, "i:", i, ";temp: ", temp);
        dfs(temp, i + 1);
        temp.pop();
        // console.log("dfs: ", start, i, temp);
      }
    }
  }

  dfs([], 0);
  return res;
}

function isPali(str: string, start: number, end: number) {
  while (start < end) {
    if (str[start] === str[end]) {
      start++;
      end--;
    } else {
      return false;
    }
  }
  return true;
}
