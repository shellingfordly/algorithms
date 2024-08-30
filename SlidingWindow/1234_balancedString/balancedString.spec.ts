import { balancedString } from "./balancedString"


describe("balancedString", () => {
    it("1", () => {
        expect(balancedString("QWER")).toBe(0);
    });
    it("2", () => {
        expect(balancedString("QQWE")).toBe(1);
    });
    it("3", () => {
        expect(balancedString("QQQW")).toBe(2);
    });
    it("4", () => {
        expect(balancedString("QQQQ")).toBe(3);
    });

})
