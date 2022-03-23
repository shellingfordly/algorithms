export function wordBreak(s: string, wordDict: string[]): boolean {
  //   let str = s;
  //   while (!str) {
  //     wordDict.forEach((word) => {
  //       str = str.replace(word, "");
  //     });
  //     if(!str) return true
  //     str = s;
  //   }
  //   return false;

  // let str = s;

  // for (let i = 0; i < wordDict.length; i++) {
  //   for (let j = i; j < wordDict.length; j++) {
  //     const word = wordDict[j];
  //     const reg = new RegExp(eval(`/${word}/g`));
  //     str = str.replace(reg, " ");
  //   }
  //   if (!str.trim()) return true;
  //   str = s;
  // }

  // return false;

  // let index = 1;

  // while (index <= s.length) {
  //   const word = s.slice(0, index);
  //   if (wordDict.includes(word)) {
  //     s = s.slice(index);
  //   } else {
  //     index++;
  //   }
  //   console.log(s);

  //   if (index === s.length) {
  //     return false;
  //   }
  // }

  // return true;

  let str = s;
  let start = 0;
  let end = 1;

  while (end <= s.length) {
    const w = s.slice(start, end);
    if (wordDict.includes(w)) {
      str = str.slice(end);
      start = end;
      end++;
    } else {
      end++;
    }
  }

  return !str;
}
