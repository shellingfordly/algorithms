import { countCompleteSubarrays } from "./countCompleteSubarrays";

describe("countCompleteSubarrays", () => {
    it("1", () => {
        expect(countCompleteSubarrays([1, 3, 1, 2, 2])).toBe(4)
        expect(countCompleteSubarrays([1, 3, 1, 2, 2, 3])).toBe(7)
    })
    it("2", () => {
        expect(countCompleteSubarrays([5, 5, 5, 5])).toBe(10)
    })

})