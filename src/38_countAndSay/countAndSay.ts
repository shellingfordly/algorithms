export function countAndSay(n: number): string {
  const arr: string[] = ["1", "11", "21", "1211", "111221"];
  if (arr[n - 1]) return arr[n - 1];

  for (let i = arr.length - 1; i < n; i++) {
    const str = arr[arr.length - 1];
    const hash: [string, number][] = [];
    let index = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[j] === str[j - 1]) {
        hash[index - 1][1]++;
      } else {
        hash[index] = [str[j], 1];
        index++;
      }
    }
    arr.push(hash.reduce((p, q) => p + q[1] + q[0], ""));
  }
  return arr[n - 1];
}

export function countAndSay1(n: number): string {
  let str = "1";
  for (let i = 1; i < n; i++) {
    const hash: [string, number][] = [];
    let index = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[j] === str[j - 1]) {
        hash[index - 1][1]++;
      } else {
        hash[index] = [str[j], 1];
        index++;
      }
    }
    str = hash.reduce((p, q) => p + q[1] + q[0], "");
  }
  return str;
}

export function countAndSay2(n: number): string {
  let str = "1";
  for (let i = 1; i < n; i++) {
    let start = 0;
    let end = 0;
    let temp = "";
    while (end < str.length) {
      while (str[end] == str[start]) {
        end++;
      }
      temp += end - start + str[start];
      start = end;
    }
    str = temp;
  }
  return str;
}
