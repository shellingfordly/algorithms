import { checkInclusion } from "./checkInclusion";

describe("checkInclusion", () => {
    it("1", () => {
        expect(checkInclusion("a", "ab")).toBe(true)
        expect(checkInclusion("b", "ab")).toBe(true)
        expect(checkInclusion("b", "abc")).toBe(true)
        expect(checkInclusion("ab", "eidbaooo")).toBe(true)
        expect(checkInclusion("ab", "eidboaooo")).toBe(false)
        expect(checkInclusion("abcdasdkashfla", "efsafhauifhifuhaehfalgflafsfsafahfeiuawhfuslfgasfhauewihrgelfhdslihaflsafvsafgsahfiuragitidboaooo")).toBe(false)
        expect(checkInclusion("abcdasdkashfla", "efsafhauifhifuhaehfalgflafsabcdasdkashflafsafahfeiuawhfuslfgasfhauewihrgelfhdslihaflsafvsafgsahfiuragitidboaooo")).toBe(true)
    })
})


describe("checkInclusion: long string", () => {
    it("long string 1", () => {
        const s1 = "asahdjahfashfksafiafsaofjiaasahdjahfashfksafiafsaofjiaasahdjahfashfksafiafsaofjiaasahdjahfashfksafiafsaofjia"
        const s2 = "peioiaopeurytioataptapjihcozfdytpeioiaopeurytioataptapjihcozfdytpeioiaopeurytioataptapjihcozfdytpeioiaopeurytioataptapjihcozfdytpeioiaopeurytioataptapjihcozfdytpeioiaopeurytioataptapjihcozfdytpeioiaopeurytioataptapjihcozfdytpeioiaopeurytioataptapjihcozfdytpeioiaopeurytioataptapjihcozfdytpeioiaopeurytioataptapjihcozfdytpeioiaopeurytioataptapjihcozfdytpeioiaopeurytioataptapjihcozfdyt"
        expect(checkInclusion(s1, s2)).toBe(false)
    })
    it("long string 2", () => {
        const s1 = "efsafhauifhifuhaehfalgflafsfsafahfeiuawhfuslfgasfhauewihrgelfhdslihaflsafvsafgsahfiuragitidboaoooafhdsfsaelwyreqpgreqluiqhtfroeqiuhguuyqroeqgyrgvaabzcbklahsdihloiwqrqrhfsbvgvzugyutcioreorkqfaskoaei"
        const s2 = "oquqrrqizbkzhfpzfoerjwfhlbzhvgjxvswryouieaghabvshjvgyueorfilvvgyqoreiutilahgakvbdavgavyghdsaiouvhasivlhlvbvxvzkxyvgyukgerbfvgudsjkvbevhuhfiurgfefsafhauifhifuhaehfalgflafsfsafahfeiuawhfuslfgasfhauewihrgelfhdslihaflsafvsafgsahfiuragitidboaoooafhdsfsaelwyreqpgreqluiqhtfroeqiuhguuyqroeqgyrgvaabzcbklahsdihloiwqrqrhfsbvgvzugyutcioreorkqfaskoaeiilbvildvhgiugeruilfietotpweturewoeuwioreewyyugvgsbdjhvbhvygvydgvdjsvbhjxzveywriotuholahtvbzvgyuggiuogefuyyuagfgsuagfuyfguifgigfgisgfsayufgsfdsfgsifaofrafmilvbzgvsugvoewlrqiloqwpqlr"
        expect(checkInclusion(s1, s2)).toBe(true)
    })
})