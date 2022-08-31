import { isValid } from "./isValid";

test("isValid", () => {
  expect(isValid("(){}[]")).toBe(true);
  expect(isValid("({}[])")).toBe(true);
  expect(isValid("({}[]({}))")).toBe(true);
  expect(isValid("(}")).toBe(false);
  expect(isValid("({}[]")).toBe(false);
  expect(isValid("([)]")).toBe(false);
  expect(isValid("({}[]))")).toBe(false);
});
