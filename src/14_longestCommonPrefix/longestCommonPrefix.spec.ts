import { longestCommonPrefix } from "./longestCommonPrefix";

test("longestCommonPrefix", () => {
  expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
  expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
  expect(longestCommonPrefix(["aaabbb", "aaabbb", "aaabbbccc"])).toBe("aaabbb");
});
