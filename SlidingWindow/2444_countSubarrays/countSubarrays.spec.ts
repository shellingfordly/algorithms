import { countSubarrays } from "./countSubarrays"


describe("countSubarrays", () => {
    it("1", () => {
        expect(countSubarrays([1, 3, 5, 2, 7, 5], 1, 5)).toBe(2)
    })
})
