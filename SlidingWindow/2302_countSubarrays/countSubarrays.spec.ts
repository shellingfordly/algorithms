import { countSubarrays } from "./countSubarrays"


describe("countSubarrays", () => {
    it("1", () => {
        expect(countSubarrays([1, 1, 1, 1, 1], 1)).toBe(0);
    });
    it("2", () => {
        expect(countSubarrays([1, 1, 1, 1, 1], 2)).toBe(5);
    });
})