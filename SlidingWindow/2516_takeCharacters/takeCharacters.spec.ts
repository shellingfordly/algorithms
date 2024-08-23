import { takeCharacters, takeCharacters1 } from "./takeCharacters"

describe("takeCharacters", () => {
    it("1", () => {
        expect(takeCharacters("aabaaaacaabc", 2)).toBe(8);
    });

    it("2", () => {
        expect(takeCharacters("a", 1)).toBe(-1);
        expect(takeCharacters("a", 0)).toBe(0);
    })

    it("3", () => {
        expect(takeCharacters("aabc", 1)).toBe(3);
        expect(takeCharacters("abc", 1)).toBe(3);
        expect(takeCharacters("abcc", 1)).toBe(3);
        expect(takeCharacters("abbc", 1)).toBe(3);
        expect(takeCharacters("abcabc", 1)).toBe(3);
        expect(takeCharacters("abcccc", 1)).toBe(3);
        expect(takeCharacters("aaabc", 1)).toBe(3);
    })

    it("4", () => {
        expect(takeCharacters("aaaabbccaaaaa", 2)).toBe(8);
        expect(takeCharacters("baaaaaaaabcccc", 2)).toBe(8);
        expect(takeCharacters("baaaaaaaabcccc", 2)).toBe(8);
    })

    it("5", () => {
        expect(takeCharacters("aaaaaaaaaaaaa", 1)).toBe(-1);
        expect(takeCharacters("aaaaaabcaaaaaa", 2)).toBe(-1);
        expect(takeCharacters("aaaaaabbccaaaaaaa", 3)).toBe(-1);
    })

    it("6", () => {
        expect(takeCharacters("cbaabccac", 3)).toBe(-1);
    })

    it("7", () => {
        const s = "bbbbcacacbccbabbccbbacccbccabcbaabcbcbcbabcaabbabbabcbcbbbcbaccbcbbacbaaccccbcbabccabbbbacaabbcaacbbbbcbbcbacbbcaccbcaccccaccbcacbaccbacabbcbbccbccbbcaacbacaabaaccaccaacaaccccbcbbbbbaabcbacccbabcccaaabcbbabbbbcbabcbacccacaaabbbcabbbbaaccacbbccbbbcaabcccacbbaccacaaaabccacaabcbbbcbbcaacbbccbbcbcaaacacccccaccccbabcabcbbbcaabbcaacabccbcbccaaaabbbcbbabbacbbcbbaacaabaabcccacacbacbaccbacbaacacaaccbbacbcbacaacaccbacbcbbabbbabaacbbcbacbbcabbcbcababbaaccbaaaaccbcccbbacabacacbbbbbcabbbbabbcaaaaabbbabbcbbcacacabbbaaaabaabcccbbcabbcccccbcabaabcaccbbccaaabababbccbccaacbbacbcccbbaabbccccaacabacbacabccabbbaababbabccbcccbabccbaabababbccaaaaaaaccbcaabbcbcbccbbbcbbacaaacaacbcaccbacbaacacabccabbababababcacbcaacbccaccbabcabccaccbcaaacbbcbaccccccbbbccacccbbbabaccbacbaaababacbbabcabaabaccabbcabcbbcacabbabbcacbcbacabcabcbacccaccbabbcbcaaaabcaacacbacbbacbbacaacccaaaacaccccbabbabacbbabcbccccccccaabcbbcabbbaababbbccaabcbaaabcabcbccbcabccbcaacbbccbaccbcbacbabbabcbbaccccbabbaaccccbcbbccacabbaabbcbcabccabcaccbabbaabcaacbaccbababcbaacccbbcabcbaacbaaaaaababcbccbacbabbacbbaabbbbccabcbabccbccaacaccacacabccbacbbacaacacbcbbacccaacabcbaaacbabbbccbcbbaacbbaacacbbcababbbccaccbbabccbcbbabcccbcaaabcccbaacabacabccaccbbaaabcbcacccabacbbcccaaaacaaaababcbaabcccbbbcabaccbcbaaccaccacbacaaacccabbaaacbabacbccaacbacacbbacaaaabbabccbccbbbbbbcbcacaabacaccacacccaaccbabcccaaabcbbccaccccccbacacccbccbbacbbbccabcacacccbaaaccbaaabacbacaaccbcabcbbaababcaacbcaabaaccbbbcbbbabacabcbccabbcbbacaaaacabacabaababcaacbbbcbcaacacaabaccbacbbcbacbabbccabcaaaaaabccbacbababbccacababacbccbbbaabcbcaaaaabacbbcbbabbaacbbbbaccacbabbacbcbbbcbbccabaaababaccccabcacbbcbbccbccbaabcbccacaacbbacbcccbacbbabbbccbbaabbaabcbabbaacccabcabccbaababaabbcbcccccabaccacbbacbcbababaaabacbacacbbaaabcbabacbcbccbabaababaacaacacbbacabbbbccccbacbababcabcacabacaaacabaaacabccbccabbcabacccacababbcacabbabbaaccaacccbccccbaaccbbbaccaaccbcabaabbbbaabbccaccbbaccaccbccbbbbbcbaabaacabbacbbbaabcbabbccaaabbbccbcbbbabbcbacccacbacccccacababcbbcacbcbbcbabbcabbbbcbcbccccbcbbabbcaacbcbbcababbabcbaabbcabcaccccbaabcbccbbaccbaaabcccbbccaacbaccbcacaabcbbabacbcabbbcaaacbccbaaacabacbbcaaccbbcbaaaacccbbacbbbacaaabcbbcbbccaaccbabacabbcaabccbacabbbbbcbaaccaabcabcabbbcccabbcbaabcbacabcccaacaacabaabacabccbcbaabbccaaaccbcbbccaacccacbbcbabacabaacbbbcbbacbbaacbcaccabaabbbcbcccabbbcbbbbbacababcbccacbbabbbbaacaabaccbbcbccbbbcabbabcaaaaaacbbaccbcbabcbcaccbbaaacabbcacbcccacbcbccccabbacacbababcbabbbbacbbaacbbcabbbabbbccabccabbbcbbacaacbcaaaacbbbcaaabbbabaccaabbcbbbccaabcbcaabaabacbccbbcbcacbcbcbbaaaaabbcbcbbabccabcccaabcaacbcacacbcacabcabbcbcacaaabbacaacaababbcabbabaaaccaacacaabbaaabacabbcbbcbcabaabbbcabbbcccbaacbcbccbccaaaaabbccbcbbaababccbbacbcaabaaabacbbaacaacaabaccbaaaaccbababcacbcacabaabbcccccaccbacbccbcabcbabaababcabacacbcacabcaaacbabbccccccbaccabacabbbacacaaaabcbbbacaacaaaabbccccacbccaaccabccbbcaaabcaabaabcbbbcbbcbccacaabccabcbabcbcaaacbbacbabacbaacacaccabbaacbaaabbccacbacbbababccacbabcaaaccaababbbcbbaacacbcccbcaccababaabcccbccaacccabaaacbbabbabbaabbcabcbababcbccbbaabaccabcbbbcbccbcaabcaaabbacbcbaabcbababaaacccaaaaacccbbabbacaaccbaabccccababbaabbabccbbbbabbbcabaacbcbacbcacaaccacaaaabbcabccccbaaabbbcaabccaabbcacacacbcbbbabaccaabccaacababbbbacbabaabbcaacabbccaabacabaacaabcbccbaaabbaaacabbaccbcbcbaaaccccbbcccababccbbcccaaaabcbaababbbbcccccbcabbcbbbbccbbbbbacbcbbaababbccaabbcbbaaccbbbaabcbbaccbbacbbacacccbcabaccbbcbcbaabbaaaccbcacacccbbccacccabbcbccaaaaacababccbabaaabbaccccbbbccbbabccababacaccbcbbbcccaabcbcbccabaacbcababcbacccccbbacabcaacccbcbcbaaacacaabbbacbccbccacbcccaabaacababacabcbacacacaccbaabacbbbabccacaacaacbccaaabcbcaaabccabcaabcbbbbaaaabcbcbaaabbbcbbaacbaaacacbbabbcaacacbbcbcbbbaccbcccccbabbbbaccaabacacbbcbaaacacabccaccaacaccbacbbccacbbbbcbbaabbccbabbaaaabcaaababcbacbcbbaccccbbcccabccaacbacabcccaabbbccabbbaccbbcbaabccbbaabcbbaabbbbacccbaabbacaccabbaaccababacaabbcccbcacabbbbcbacbcbbacaabbbabbcbabacabcccacbbacbcbbbcbccbabbccacacbaaacacaabbbcaaa"
        expect(takeCharacters(s, 211)).toBe(684);
    })
})

describe("takeCharacters1", () => {
    it("1", () => {
        expect(takeCharacters1("aabaaaacaabc", 2)).toBe(8);
    });

    it("2", () => {
        expect(takeCharacters1("a", 1)).toBe(-1);
        expect(takeCharacters1("a", 0)).toBe(0);
    })

    it("3", () => {
        expect(takeCharacters1("aabc", 1)).toBe(3);
        expect(takeCharacters1("abc", 1)).toBe(3);
        expect(takeCharacters1("abcc", 1)).toBe(3);
        expect(takeCharacters1("abbc", 1)).toBe(3);
        expect(takeCharacters1("abcabc", 1)).toBe(3);
        expect(takeCharacters1("abcccc", 1)).toBe(3);
        expect(takeCharacters1("aaabc", 1)).toBe(3);
    })

    it("4", () => {
        expect(takeCharacters1("aaaabbccaaaaa", 2)).toBe(8);
        expect(takeCharacters1("baaaaaaaabcccc", 2)).toBe(8);
        expect(takeCharacters1("baaaaaaaabcccc", 2)).toBe(8);
    })

    it("5", () => {
        expect(takeCharacters1("aaaaaaaaaaaaa", 1)).toBe(-1);
        expect(takeCharacters1("aaaaaabcaaaaaa", 2)).toBe(-1);
        expect(takeCharacters1("aaaaaabbccaaaaaaa", 3)).toBe(-1);
    })

    it("6", () => {
        expect(takeCharacters1("cbaabccac", 3)).toBe(-1);
    })

    it("7", () => {
        const s = "bbbbcacacbccbabbccbbacccbccabcbaabcbcbcbabcaabbabbabcbcbbbcbaccbcbbacbaaccccbcbabccabbbbacaabbcaacbbbbcbbcbacbbcaccbcaccccaccbcacbaccbacabbcbbccbccbbcaacbacaabaaccaccaacaaccccbcbbbbbaabcbacccbabcccaaabcbbabbbbcbabcbacccacaaabbbcabbbbaaccacbbccbbbcaabcccacbbaccacaaaabccacaabcbbbcbbcaacbbccbbcbcaaacacccccaccccbabcabcbbbcaabbcaacabccbcbccaaaabbbcbbabbacbbcbbaacaabaabcccacacbacbaccbacbaacacaaccbbacbcbacaacaccbacbcbbabbbabaacbbcbacbbcabbcbcababbaaccbaaaaccbcccbbacabacacbbbbbcabbbbabbcaaaaabbbabbcbbcacacabbbaaaabaabcccbbcabbcccccbcabaabcaccbbccaaabababbccbccaacbbacbcccbbaabbccccaacabacbacabccabbbaababbabccbcccbabccbaabababbccaaaaaaaccbcaabbcbcbccbbbcbbacaaacaacbcaccbacbaacacabccabbababababcacbcaacbccaccbabcabccaccbcaaacbbcbaccccccbbbccacccbbbabaccbacbaaababacbbabcabaabaccabbcabcbbcacabbabbcacbcbacabcabcbacccaccbabbcbcaaaabcaacacbacbbacbbacaacccaaaacaccccbabbabacbbabcbccccccccaabcbbcabbbaababbbccaabcbaaabcabcbccbcabccbcaacbbccbaccbcbacbabbabcbbaccccbabbaaccccbcbbccacabbaabbcbcabccabcaccbabbaabcaacbaccbababcbaacccbbcabcbaacbaaaaaababcbccbacbabbacbbaabbbbccabcbabccbccaacaccacacabccbacbbacaacacbcbbacccaacabcbaaacbabbbccbcbbaacbbaacacbbcababbbccaccbbabccbcbbabcccbcaaabcccbaacabacabccaccbbaaabcbcacccabacbbcccaaaacaaaababcbaabcccbbbcabaccbcbaaccaccacbacaaacccabbaaacbabacbccaacbacacbbacaaaabbabccbccbbbbbbcbcacaabacaccacacccaaccbabcccaaabcbbccaccccccbacacccbccbbacbbbccabcacacccbaaaccbaaabacbacaaccbcabcbbaababcaacbcaabaaccbbbcbbbabacabcbccabbcbbacaaaacabacabaababcaacbbbcbcaacacaabaccbacbbcbacbabbccabcaaaaaabccbacbababbccacababacbccbbbaabcbcaaaaabacbbcbbabbaacbbbbaccacbabbacbcbbbcbbccabaaababaccccabcacbbcbbccbccbaabcbccacaacbbacbcccbacbbabbbccbbaabbaabcbabbaacccabcabccbaababaabbcbcccccabaccacbbacbcbababaaabacbacacbbaaabcbabacbcbccbabaababaacaacacbbacabbbbccccbacbababcabcacabacaaacabaaacabccbccabbcabacccacababbcacabbabbaaccaacccbccccbaaccbbbaccaaccbcabaabbbbaabbccaccbbaccaccbccbbbbbcbaabaacabbacbbbaabcbabbccaaabbbccbcbbbabbcbacccacbacccccacababcbbcacbcbbcbabbcabbbbcbcbccccbcbbabbcaacbcbbcababbabcbaabbcabcaccccbaabcbccbbaccbaaabcccbbccaacbaccbcacaabcbbabacbcabbbcaaacbccbaaacabacbbcaaccbbcbaaaacccbbacbbbacaaabcbbcbbccaaccbabacabbcaabccbacabbbbbcbaaccaabcabcabbbcccabbcbaabcbacabcccaacaacabaabacabccbcbaabbccaaaccbcbbccaacccacbbcbabacabaacbbbcbbacbbaacbcaccabaabbbcbcccabbbcbbbbbacababcbccacbbabbbbaacaabaccbbcbccbbbcabbabcaaaaaacbbaccbcbabcbcaccbbaaacabbcacbcccacbcbccccabbacacbababcbabbbbacbbaacbbcabbbabbbccabccabbbcbbacaacbcaaaacbbbcaaabbbabaccaabbcbbbccaabcbcaabaabacbccbbcbcacbcbcbbaaaaabbcbcbbabccabcccaabcaacbcacacbcacabcabbcbcacaaabbacaacaababbcabbabaaaccaacacaabbaaabacabbcbbcbcabaabbbcabbbcccbaacbcbccbccaaaaabbccbcbbaababccbbacbcaabaaabacbbaacaacaabaccbaaaaccbababcacbcacabaabbcccccaccbacbccbcabcbabaababcabacacbcacabcaaacbabbccccccbaccabacabbbacacaaaabcbbbacaacaaaabbccccacbccaaccabccbbcaaabcaabaabcbbbcbbcbccacaabccabcbabcbcaaacbbacbabacbaacacaccabbaacbaaabbccacbacbbababccacbabcaaaccaababbbcbbaacacbcccbcaccababaabcccbccaacccabaaacbbabbabbaabbcabcbababcbccbbaabaccabcbbbcbccbcaabcaaabbacbcbaabcbababaaacccaaaaacccbbabbacaaccbaabccccababbaabbabccbbbbabbbcabaacbcbacbcacaaccacaaaabbcabccccbaaabbbcaabccaabbcacacacbcbbbabaccaabccaacababbbbacbabaabbcaacabbccaabacabaacaabcbccbaaabbaaacabbaccbcbcbaaaccccbbcccababccbbcccaaaabcbaababbbbcccccbcabbcbbbbccbbbbbacbcbbaababbccaabbcbbaaccbbbaabcbbaccbbacbbacacccbcabaccbbcbcbaabbaaaccbcacacccbbccacccabbcbccaaaaacababccbabaaabbaccccbbbccbbabccababacaccbcbbbcccaabcbcbccabaacbcababcbacccccbbacabcaacccbcbcbaaacacaabbbacbccbccacbcccaabaacababacabcbacacacaccbaabacbbbabccacaacaacbccaaabcbcaaabccabcaabcbbbbaaaabcbcbaaabbbcbbaacbaaacacbbabbcaacacbbcbcbbbaccbcccccbabbbbaccaabacacbbcbaaacacabccaccaacaccbacbbccacbbbbcbbaabbccbabbaaaabcaaababcbacbcbbaccccbbcccabccaacbacabcccaabbbccabbbaccbbcbaabccbbaabcbbaabbbbacccbaabbacaccabbaaccababacaabbcccbcacabbbbcbacbcbbacaabbbabbcbabacabcccacbbacbcbbbcbccbabbccacacbaaacacaabbbcaaa"
        expect(takeCharacters1(s, 211)).toBe(684);
    })
})


