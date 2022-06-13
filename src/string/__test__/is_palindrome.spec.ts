import { is_palindrome } from "../src/is_palindrome";
describe("is_palindrome", () => {
  it.only("simple", () => {
    expect(is_palindrome("abccba")).toBe(true);
    expect(is_palindrome("l kjas jkl")).toBe(false);
    expect(is_palindrome("l kja   jk  l")).toBe(true);
    expect(is_palindrome("dadaa,.;dad")).toBe(true);
    expect(is_palindrome("d_ad")).toBe(true);
  });
});
