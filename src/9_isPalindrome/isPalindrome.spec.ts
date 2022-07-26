import { isPalindrome, isPalindrome1, isPalindrome2 } from "./isPalindrome";

describe("isPalindrome", () => {
  it.only("isPalindrome", () => {
    expect(isPalindrome("abccba")).toBe(true);
    expect(isPalindrome("l kjas jkl")).toBe(false);
    expect(isPalindrome("l kja   jk  l")).toBe(true);
    expect(isPalindrome("dadaa,.;dad")).toBe(true);
    expect(isPalindrome("d_ad")).toBe(true);
    expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
    expect(isPalindrome("race a car")).toBe(false);
    expect(isPalindrome("a b,. c /']cb==_-]]{a")).toBe(true);
  });

  it.only("isPalindrome1", () => {
    expect(isPalindrome1("abccba")).toBe(true);
    expect(isPalindrome1("l kjas jkl")).toBe(false);
    expect(isPalindrome1("l kja   jk  l")).toBe(true);
    expect(isPalindrome1("dadaa,.;dad")).toBe(true);
    expect(isPalindrome1("d_ad")).toBe(true);
    expect(isPalindrome1("A man, a plan, a canal: Panama")).toBe(true);
    expect(isPalindrome1("race a car")).toBe(false);
    expect(isPalindrome1("a b,. c /']cb==_-]]{a")).toBe(true);
  });

  it("isPalindrome2", () => {
    expect(isPalindrome2("abccba")).toBe(true);
    expect(isPalindrome2("l kjas jkl")).toBe(false);
    expect(isPalindrome2("l kja   jk  l")).toBe(true);
    expect(isPalindrome2("dadaa,.;dad")).toBe(true);
    expect(isPalindrome2("d_ad")).toBe(true);
    expect(isPalindrome2("A man, a plan, a canal: Panama")).toBe(true);
    expect(isPalindrome2("race a car")).toBe(false);
    expect(isPalindrome2("a b,. c /']cb==_-]]{a")).toBe(true);
  });
});
