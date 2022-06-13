// 判断回文字符串

export function is_palindrome(s: string): boolean {
  const formatStr = formatString(s);
  const reverseStr = formatStr.split("").reverse().join("");

  return formatStr === reverseStr;
}

function formatString(s: string) {
  return s.replace(/\W|_/g, "").toLowerCase();
}
