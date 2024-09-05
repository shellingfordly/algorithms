import { countGood } from "./countGood"


describe("countGood", () => {
    it("1", () => {
        expect(countGood([1, 1, 1, 1, 1], 10)).toBe(1);
    });

    // it("2", () => {
    //     expect(countGood([3, 1, 4, 3, 2, 2, 4], 2)).toBe(4);
    // })

    // it("3", () => {
    //     expect(countGood([3, 1, 4, 3, 2, 2, 4, 4], 2)).toBe(9);
    // })

})