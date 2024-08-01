import { maxmiumScore } from "./count_challenge";


describe("maxmiumScore", () => {
    it("should", () => {
        expect(
            maxmiumScore([9,5,9,1,6,10,3,4,5,1], 2)
        ).toBe(18);
        expect(
            maxmiumScore([9,5,9,1,6,10,3,4,5,1], 3)
        ).toBe(28);
        expect(
            maxmiumScore([3,3,1], 1)
        ).toBe(0);
    });
});