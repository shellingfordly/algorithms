import {
  firstMissingPositive,
  firstMissingPositive1,
  firstMissingPositive2,
  firstMissingPositive3,
} from "./firstMissingPositive";

test("firstMissingPositive", () => {
  expect(firstMissingPositive([-1, -2, 0, 2])).toBe(1);
  expect(firstMissingPositive([1000, -1])).toBe(1);
  expect(firstMissingPositive([1, 2, 0])).toBe(3);
  expect(firstMissingPositive([1, 2, 3])).toBe(4);
  expect(firstMissingPositive([-1, 0, 0, 0, 1, 1, 1, 2, 2])).toBe(3);
  expect(firstMissingPositive([3, 4, -1, 1])).toBe(2);
  expect(firstMissingPositive([-1, 4, 2, 1, 9, 10])).toBe(3);
});

test("firstMissingPositive1", () => {
  expect(firstMissingPositive1([-1, -2, 0, 2])).toBe(1);
  expect(firstMissingPositive1([1000, -1])).toBe(1);
  expect(firstMissingPositive1([1, 2, 0])).toBe(3);
  expect(firstMissingPositive1([1, 2, 3])).toBe(4);
  expect(firstMissingPositive1([-1, 0, 0, 0, 1, 1, 1, 2, 2])).toBe(3);
  expect(firstMissingPositive1([3, 4, -1, 1])).toBe(2);
  expect(firstMissingPositive1([-1, 4, 2, 1, 9, 10])).toBe(3);
});

test("firstMissingPositive2", () => {
  expect(firstMissingPositive2([-1, -2, 0, 2])).toBe(1);
  expect(firstMissingPositive2([1000, -1])).toBe(1);
  expect(firstMissingPositive2([1, 2, 0])).toBe(3);
  expect(firstMissingPositive2([1, 2, 3])).toBe(4);
  expect(firstMissingPositive2([-1, 0, 0, 0, 1, 1, 1, 2, 2])).toBe(3);
  expect(firstMissingPositive2([3, 4, -1, 1])).toBe(2);
  expect(firstMissingPositive2([-1, 4, 2, 1, 9, 10])).toBe(3);
});

test("firstMissingPositive3", () => {
  expect(firstMissingPositive3([-1, -2, 0, 2])).toBe(1);
  expect(firstMissingPositive3([1000, -1])).toBe(1);
  expect(firstMissingPositive3([1, 2, 0])).toBe(3);
  expect(firstMissingPositive3([1, 2, 3])).toBe(4);
  expect(firstMissingPositive3([-1, 0, 0, 0, 1, 1, 1, 2, 2])).toBe(3);
  expect(firstMissingPositive3([3, 4, -1, 1])).toBe(2);
  expect(firstMissingPositive3([-1, 4, 2, 1, 9, 10])).toBe(3);
});
