import { maxTotalFruits } from "./maxTotalFruits"


describe("maxTotalFruits", () => {
    it("1", () => {
        expect(maxTotalFruits([[2, 8], [6, 3], [8, 6]], 5, 4)).toBe(9);
    });
    it("2", () => {
        expect(maxTotalFruits([[0, 9], [4, 1], [5, 7], [6, 2], [7, 4], [10, 9]], 5, 4)).toBe(14);
    });
    it("3", () => {
        expect(maxTotalFruits([[0, 3], [6, 4], [8, 5]], 3, 2)).toBe(0);
    });
})
