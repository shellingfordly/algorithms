function wordBreak(s, wordDict) {
  //   let str = s;
  //   while (!str) {
  //     wordDict.forEach((word) => {
  //       str = str.replace(word, "");
  //     });
  //     if(!str) return true
  //     str = s;
  //   }
  //   return false;

  let str = s;

  for (let i = 0; i < wordDict.length; i++) {
    for (let j = i; j < wordDict.length; j++) {
      const word = wordDict[j];
      const reg = new RegExp(eval(`/${word}/g`));
      str = str.replace(reg, " ");
    }
    if (!str.trim()) return true;
    str = s;
  }

  return false;
}

function wordBreak2(s, wordDict) {
  let str = s;
  let start = 0;
  let end = 1;

  while (end <= s.length) {
    const w = s.slice(start, end);
    console.log("start: ", start, ";end: ", end, ";w: ", w, ";str: ", str);
    if (wordDict.includes(w)) {
      str = str.replace(w, " ")
      start = end;
      end++;
    } else {
      end++;
    }

    // console.log("start: ", start, ";end: ", end, ";w: ", w, ";str: ", str);
  }

  console.log("str: ", str);
  return !str;
}

// 1
// const s = "leetcode",
//   wordDict = ["leet", "code"];

// 2
// const s = "cbca",
//   wordDict = ["bc", "ca"];

// 3
// const s = "ccaccc",
//   wordDict = ["cc", "ac"];

// 4
const s = "aaaaaaa",
  wordDict = ["aaaa", "aaa"];

console.log(wordBreak2(s, wordDict));

/*
const s = "aaaaaaaa",
  wordDict = ["aaaa", "aaa"];
无法通过 相同字符 案例
*/

// function wordBreak1(s, wordDict) {
//   let index = 1;
//   let str = s;
//   while (index <= s.length) {
//     const word = str.slice(0, index);
//     if (wordDict.includes(word)) {
//       str = str.slice(index);
//       index = 1;
//     } else {
//       index++;
//     }
//     if (!str) {
//       return true;
//     }
//   }
//   return false;
// }
