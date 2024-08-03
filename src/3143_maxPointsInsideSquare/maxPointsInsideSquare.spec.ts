import { maxPointsInsideSquare } from "./maxPointsInsideSquare";


describe("maxPointsInsideSquare", () => {
    it("1", () => {
        expect(
            maxPointsInsideSquare([[2,2],[-1,-2],[-4,4],[-3,1],[3,-3]], "abdca")
        ).toBe(2);

        expect(
            maxPointsInsideSquare([[1,1],[-2,-2],[-2,2]], "abb")
        ).toBe(1);
    });
});