import { getAverages } from "./getAverages"


describe("getAverages", () => {
    it("1", () => {
        expect(getAverages([7, 4, 3, 9, 1, 8, 5, 2, 6], 3).toString()).toBe([-1, -1, -1, 5, 4, 4, -1, -1, -1].toString());
    });
    it("2", () => {
        expect(getAverages([100000], 0).toString()).toBe([100000].toString());
    });
    it("3", () => {
        expect(getAverages([8], 100000).toString()).toBe([-1].toString());
    });

})
