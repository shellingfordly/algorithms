import { continuousSubarrays } from "./continuousSubarrays"

describe("continuousSubarrays", () => {
    it("1", () => {
        expect(continuousSubarrays([5, 4, 2, 4])).toBe(8)
    })
    it("2", () => {
        expect(continuousSubarrays([2, 4, 2, 4])).toBe(10)
    })
    it("3", () => {
        expect(continuousSubarrays([2, 4, 2, 4, 5, 4, 2, 4, 2])).toBe(24)
    })
})