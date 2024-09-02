import { findLengthOfShortestSubarray, findLengthOfShortestSubarray1 } from "./findLengthOfShortestSubarray"


describe("findLengthOfShortestSubarray", () => {
    it("1", () => {
        expect(findLengthOfShortestSubarray([5, 1, 2, 3, 4])).toBe(1);
    });

    it("2", () => {
        expect(findLengthOfShortestSubarray([6, 3, 10, 11, 15, 20, 13, 3, 18, 12])).toBe(8);
    });
})

describe("findLengthOfShortestSubarray1", () => {
    it("1", () => {
        expect(findLengthOfShortestSubarray1([5, 1, 2, 3, 4])).toBe(1);
    });

    it("2", () => {
        expect(findLengthOfShortestSubarray1([6, 3, 10, 11, 15, 20, 13, 3, 18, 12])).toBe(8);
    });
})