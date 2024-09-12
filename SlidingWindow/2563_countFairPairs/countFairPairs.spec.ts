import { countFairPairs, countFairPairs1 } from "./countFairPairs"

describe("countFairPairs", () => {
    it("1", () => {
        expect(countFairPairs([0, 1, 7, 4, 4, 5], 3, 6)).toBe(6)
    })
    it("2", () => {
        expect(countFairPairs([1, 7, 9, 2, 5], 11, 11)).toBe(1)
    })
    it("3", () => {
        const nums = Array(25215).fill(1);
        expect(countFairPairs(nums, 1, 2)).toBe(317885505)
    })
    it("4", () => {
        const nums = Array(100000).fill(1);
        expect(countFairPairs(nums, 1, 2)).toBe(4999950000)
    })
})


describe("countFairPairs1", () => {
    it("1", () => {
        expect(countFairPairs1([0, 1, 7, 4, 4, 5], 3, 6)).toBe(6)
    })
    it("2", () => {
        expect(countFairPairs1([1, 7, 9, 2, 5], 11, 11)).toBe(1)
    })
    it("3", () => {
        const nums = Array(25215).fill(1);
        expect(countFairPairs1(nums, 1, 2)).toBe(317885505)
    })
    it("4", () => {
        const nums = Array(100000).fill(1);
        expect(countFairPairs1(nums, 1, 2)).toBe(4999950000)
    })
})