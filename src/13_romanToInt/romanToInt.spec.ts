import { romanToInt } from "./romanToInt";

test("romanToInt", () => {
  expect(romanToInt("III")).toBe(3);
  expect(romanToInt("IV")).toBe(4);
  expect(romanToInt("IX")).toBe(9);
  expect(romanToInt("MCMXCIV")).toBe(1994);
  expect(romanToInt("CLXXXIX")).toBe(189);
});
