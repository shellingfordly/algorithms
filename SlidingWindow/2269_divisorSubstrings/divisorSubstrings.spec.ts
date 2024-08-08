import { divisorSubstrings } from "./divisorSubstrings"


describe("divisorSubstrings", () => {
    it("1", () => {
        expect(divisorSubstrings(20, 2)).toBe(1);
    });
    it("2", () => {
        expect(divisorSubstrings(240, 2)).toBe(2);
    });
    it("3", () => {
        expect(divisorSubstrings(430043, 2)).toBe(2);
    });
    it("4", () => {
        expect(divisorSubstrings(2000, 4)).toBe(1);
    });
})