import { countAndSay, countAndSay1, countAndSay2 } from "./countAndSay";

test("countAndSay", () => {
  expect(countAndSay(4)).toBe("1211");
});

test("countAndSay1", () => {
  expect(countAndSay1(4)).toBe("1211");
});

test.only("countAndSay1", () => {
  expect(countAndSay2(4)).toBe("1211");
});
