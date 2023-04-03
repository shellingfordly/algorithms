import { myPow } from "./"


test("myPow1", () => {
  expect(myPow(2, 10)).toBe(1024.00000)
})

test("myPow2", () => {
  expect(myPow(2, -2)).toBe(0.25000)
})

test("myPow4", () => {
  expect(myPow(0.00001, 2147483647)).toBe(0.00000)
})

test("myPow5", () => {
  expect(myPow(1.00000, 2147483647)).toBe(1.00000)
})