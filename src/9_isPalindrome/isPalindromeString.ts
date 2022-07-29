export function isPalindrome1(s: string): boolean {
  const arr = s
    .replace(/\W/g, "")
    .replace(/\_/g, "")
    .split("")
    .map((v) => v.toLowerCase());

  if (!arr) return false;

  let start = 0;
  let end = arr.length - 1;

  while (!(start > end)) {
    if (arr[start] !== arr[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}

export function isPalindrome2(s: string): boolean {
  let arr = s.match(/[a-z]|[A-Z]|\d/g);
  if (!arr) return false;
  arr = [...arr].map((v) => v.toLowerCase());

  let start = 0;
  let end = arr.length - 1;

  while (!(start > end)) {
    if (arr[start] !== arr[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}

export function isPalindrome3(s: string): boolean {
  function formatString(s: string) {
    return s.replace(/\W|_/g, "").toLowerCase();
  }

  const formatStr = formatString(s);
  const reverseStr = formatStr.split("").reverse().join("");

  return formatStr === reverseStr;
}
