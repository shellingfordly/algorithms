import { countSubarrays, countSubarrays1 } from "./countSubarrays";

describe("countSubarrays", () => {
    it("1", () => {
        expect(countSubarrays([1, 3, 2, 3, 3], 1)).toBe(13)
    })
    it("2", () => {
        expect(countSubarrays([1, 2, 3, 4, 5], 1)).toBe(5)
    })
    it("3", () => {
        expect(countSubarrays([3, 3, 3, 3], 1)).toBe(10)
    })
})

describe("countSubarrays1", () => {
    it("1", () => {
        expect(countSubarrays1([1, 3, 2, 3, 3], 1)).toBe(13)
    })
    it("2", () => {
        expect(countSubarrays1([1, 2, 3, 4, 5], 1)).toBe(5)
    })
    it("3", () => {
        expect(countSubarrays1([3, 3, 3, 3], 1)).toBe(10)
    })
})