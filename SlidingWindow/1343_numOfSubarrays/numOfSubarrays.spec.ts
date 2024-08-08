import { numOfSubarrays } from "./numOfSubarrays"


describe("numOfSubarrays", () => {
    it("1", () => {
        expect(numOfSubarrays([2, 2, 2, 2, 5, 5, 5, 8], 3, 4)).toBe(3);
    });
    it("2", () => {
        expect(numOfSubarrays([11, 13, 17, 23, 29, 31, 7, 5, 2, 3], 3, 5)).toBe(6);
    });

})
