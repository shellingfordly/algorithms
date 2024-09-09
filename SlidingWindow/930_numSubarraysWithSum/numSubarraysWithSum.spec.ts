import { numSubarraysWithSum, numSubarraysWithSum1 } from "./numSubarraysWithSum";

describe("numSubarraysWithSum", () => {
    it("1", () => {
        expect(numSubarraysWithSum([1, 0, 1, 0, 1], 2)).toBe(4)
    })
    it("2", () => {
        expect(numSubarraysWithSum([0, 0, 0, 0, 0], 0)).toBe(15)
    })
})

describe("numSubarraysWithSum1", () => {
    it("1", () => {
        expect(numSubarraysWithSum1([1, 0, 1, 0, 1], 2)).toBe(4)
    })
    it("2", () => {
        expect(numSubarraysWithSum1([0, 0, 0, 0, 0], 0)).toBe(15)
    })
})