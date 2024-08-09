import { minimumRecolors } from "./minimumRecolors"


describe("minimumRecolors", () => {
    it("1", () => {
        expect(minimumRecolors("WBBWWBBWBW", 7)).toBe(3);
    });
    it("2", () => {
        expect(minimumRecolors("WBWBBBW", 2)).toBe(0);
    });

})