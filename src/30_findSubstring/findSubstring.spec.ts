import { findSubstring } from "./findSubsting";

test("1", () => {
  expect(findSubstring("abcdef", ["ab", "cd", "ef"])).toEqual(
    expect.arrayContaining([0])
  );
});

test("2", () => {
  expect(
    findSubstring("barfoofoobarthefoobarman", ["bar", "foo", "the"])
  ).toEqual(expect.arrayContaining([6, 9, 12]));
});

test("3", () => {
  expect(findSubstring("barfoothefoobarman", ["foo", "bar"])).toEqual(
    expect.arrayContaining([0, 9])
  );
});

test("3", () => {
  expect(
    findSubstring("wordgoodgoodgoodbestword", ["word", "good", "best", "word"])
  ).toEqual(expect.arrayContaining([]));
});
