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

// console.log("result ===>", partition("aab"));
