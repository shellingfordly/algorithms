import { minWindow } from "./minWindow"

describe("minWindow", () => {
    it("1", () => {
        expect(minWindow("ADOBECODEBANC", "ABC")).toBe("BANC")
    })

    it("2", () => {
        expect(minWindow("a", "a")).toBe("a")
    })

    it("3", () => {
        expect(minWindow("a", "aa")).toBe("")
    })

    it("4", () => {
        expect(minWindow("fhasiofadsfhaguidsgfhsaASHFGSAILDASDJAloahOAfaushfaibewqpqlwoqjdiamzcnjAHIFAwqohfHSAUOfhobewqhqodmajioqeuwqADHAIDHHSAAADAhidahuqwergvcbsauhuqpqworiwemzncziahdaijfFJAIHEUEaifjsfhaeuoAIHFAIahfishaiADJiahdiahfiadjihAHUDAHSUFFBFSAHDASJDAOMDASJEUFHAFEGFEAOJFIEAOHAEVGUAGFSISADLADIAGDASIAHDIUSGDLAbsahffiafavfashfsaubasfjaidiahAUHDOQQNoaoguwfaihbfaifnaooiehwqibqirbnbdashfvfvdaifuafanaaaaaaaaaaaavvvvvvvvvvaaaaaaaaaavvvvvvvvvvvvaaaaaaaaaavvvvvvvvvvvvaaaaaaaaaavvvvvvvvvvvvaaaaaaaaaavvvvvvvvvvvvaaaaaaaaaavvvvvvvvvvvvaaaaaaaaaavvvvvvvvvvvvaaaaaaaaaavvvvvvvvvvvvaaaaaaaaaavvvvvvvvvvvvaaaaaaaaaavvvvvvvvvvvvaaaaaaaaaavvvvvvvvvvvvaaaaaaaaaavvvvvvvvvvvvaaaaaaaaaavvvvvvvvvvvvaaaaaaaaaavvvvvvvvvvvvaaaaaaaaaavvvvvvvvvvvvvvowASFHASFHIbfiashfUfsFASHIFsbfsgafiuaafvbsfasvsacgafhsuAFGAUIFAUEIRBIHAaufgaufih",
            "GAUIFAUEIRBIHAauf")).toBe("GAUIFAUEIRBIHAauf")
    })
})