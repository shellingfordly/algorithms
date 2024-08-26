import { longestEqualSubarray, longestEqualSubarray1 } from "./longestEqualSubarray";

describe("longestEqualSubarray", () => {
    it("1", () => {
        expect(longestEqualSubarray([1, 3, 2, 3, 1, 3], 3)).toBe(3)
    })
    it("2", () => {
        expect(longestEqualSubarray([1, 1, 2, 2, 1, 1], 2)).toBe(4)
    })
    it("3", () => {
        expect(longestEqualSubarray([], 2)).toBe(0)
    })
    it("4", () => {
        expect(longestEqualSubarray([1, 2, 1, 3, 3], 0)).toBe(2)
    })
    it("5", () => {
        expect(longestEqualSubarray([1, 2, 3, 4], 0)).toBe(1)
        expect(longestEqualSubarray([1, 2, 3, 4], 1)).toBe(1)
    })
    it("6", () => {
        expect(longestEqualSubarray([2, 2, 3], 0)).toBe(2)
    })
})


describe("longestEqualSubarray1", () => {
    it("1", () => {
        expect(longestEqualSubarray1([1, 3, 2, 3, 1, 3], 3)).toBe(3)
    })
    it("2", () => {
        expect(longestEqualSubarray1([1, 1, 2, 2, 1, 1], 2)).toBe(4)
    })
    it("3", () => {
        expect(longestEqualSubarray1([], 2)).toBe(0)
    })
    it("4", () => {
        expect(longestEqualSubarray1([1, 2, 1, 3, 3], 0)).toBe(2)
    })
    it("5", () => {
        expect(longestEqualSubarray1([1, 2, 3, 4], 0)).toBe(1)
        expect(longestEqualSubarray1([1, 2, 3, 4], 1)).toBe(1)
    })
    it("6", () => {
        expect(longestEqualSubarray1([2, 2, 3], 0)).toBe(2)
    })
})