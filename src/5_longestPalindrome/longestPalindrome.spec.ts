import {
  longestPalindrome,
  longestPalindrome1,
  longestPalindrome2,
} from "./longestPalindrome";

describe("longestPalindrome", () => {
  it("暴力求解", () => {
    expect(longestPalindrome("")).toBe("");
    expect(longestPalindrome("a")).toBe("a");
    expect(longestPalindrome("ac")).toBe("c");
    expect(longestPalindrome("dalmg")).toBe("g");
    expect(longestPalindrome("babac")).toBe("aba");
    expect(longestPalindrome("cbbd")).toBe("bb");
    expect(longestPalindrome("aabbccc")).toBe("ccc");
    expect(longestPalindrome("1111m1m11m1m")).toBe("m1m11m1m");
    expect(longestPalindrome("2220000mkmkmkmkmkm")).toBe("mkmkmkmkmkm");
    expect(longestPalindrome("aabaadaab")).toBe("baadaab");
  });

  it("中心扩散", () => {
    expect(longestPalindrome1("")).toBe("");
    expect(longestPalindrome1("a")).toBe("a");
    expect(longestPalindrome1("ac")).toBe("a");
    expect(longestPalindrome1("dalmg")).toBe("d");
    expect(longestPalindrome1("babac")).toBe("bab");
    expect(longestPalindrome1("cbbd")).toBe("bb");
    expect(longestPalindrome1("aabbccc")).toBe("ccc");
    expect(longestPalindrome1("1111m1m11m1m")).toBe("m1m11m1m");
    expect(longestPalindrome1("2220000mkmkmkmkmkm")).toBe("mkmkmkmkmkm");
    expect(longestPalindrome1("aabaadaab")).toBe("baadaab");
  });

  it("动态规划", () => {
    expect(longestPalindrome2("")).toBe("");
    expect(longestPalindrome2("a")).toBe("a");
    expect(longestPalindrome2("ac")).toBe("a");
    expect(longestPalindrome2("dalmg")).toBe("d");
    expect(longestPalindrome2("babac")).toBe("bab");
    expect(longestPalindrome2("cbbd")).toBe("bb");
    expect(longestPalindrome2("aabbccc")).toBe("ccc");
    expect(longestPalindrome2("1111m1m11m1m")).toBe("m1m11m1m");
    expect(longestPalindrome2("2220000mkmkmkmkmkm")).toBe("mkmkmkmkmkm");
    expect(longestPalindrome2("aabaadaab")).toBe("baadaab");
  });

  const s =
    "anugnxshgonmqydttcvmtsoaprxnhpmpovdolbidqiyqubirkvhwppcdyeouvgedccipsvnobrccbndzjdbgxkzdbcjsjjovnhpnbkurxqfupiprpbiwqdnwaqvjbqoaqzkqgdxkfczdkznqxvupdmnyiidqpnbvgjraszbvvztpapxmomnghfaywkzlrupvjpcvascgvstqmvuveiiixjmdofdwyvhgkydrnfuojhzulhobyhtsxmcovwmamjwljioevhafdlpjpmqstguqhrhvsdvinphejfbdvrvabthpyyphyqharjvzriosrdnwmaxtgriivdqlmugtagvsoylqfwhjpmjxcysfujdvcqovxabjdbvyvembfpahvyoybdhweikcgnzrdqlzusgoobysfmlzifwjzlazuepimhbgkrfimmemhayxeqxynewcnynmgyjcwrpqnayvxoebgyjusppfpsfeonfwnbsdonucaipoafavmlrrlplnnbsaghbawooabsjndqnvruuwvllpvvhuepmqtprgktnwxmflmmbifbbsfthbeafseqrgwnwjxkkcqgbucwusjdipxuekanzwimuizqynaxrvicyzjhulqjshtsqswehnozehmbsdmacciflcgsrlyhjukpvosptmsjfteoimtewkrivdllqiotvtrubgkfcacvgqzxjmhmmqlikrtfrurltgtcreafcgisjpvasiwmhcofqkcteudgjoqqmtucnwcocsoiqtfuoazxdayricnmwcgahdalwiewoiqyiwyrqrfakofporeuqrqyfakdgsafgafgsjhslgudgailfgbzjfijsafiojsiofhsafsdofihasfohsfiosfhlahxncjkshwfhff";
  // "anugnxshgonmqydttcvmtsoaprxnhpmpovdolbidqiyqubirkvhwppcdyeouvgedccipsvnobrccbndzjdbgxkzdbcjsjjovnhpnbkurxqfupiprpbiwqdnwaqvjbqoaqzkqgdxkfczdkznqxvupdmnyiidqpnbvgjraszbvvztpapxmomnghfaywkzlrupvjpcvascgvstqmvuveiiixjmdofdwyvhgkydrnfuojhzulhobyhtsxmcovwmamjwljioevhafdlpjpmqstguqhrhvsdvinphejfbdvrvabthpyyphyqharjvzriosrdnwmaxtgriivdqlmugtagvsoylqfwhjpmjxcysfujdvcqovxabjdbvyvembfpahvyoybdhweikcgnzrdqlzusgoobysfmlzifwjzlazuepimhbgkrfimmemhayxeqxynewcnynmgyjcwrpqnayvxoebgyjusppfpsfeonfwnbsdonucaipoafavmlrrlplnnbsaghbawooabsjndqnvruuwvllpvvhuepmqtprgktnwxmflmmbifbbsfthbeafseqrgwnwjxkkcqgbucwusjdipxuekanzwimuizqynaxrvicyzjhulqjshtsqswehnozehmbsdmacciflcgsrlyhjukpvosptmsjfteoimtewkrivdllqiotvtrubgkfcacvgqzxjmhmmqlikrtfrurltgtcreafcgisjpvasiwmhcofqkcteudgjoqqmtucnwcocsoiqtfuoazxdayricnmwcg";

  it("暴力求解 长字符串", () => {
    expect(longestPalindrome(s)).toBe("hpyyph");
  });

  it("中心扩散 长字符串", () => {
    expect(longestPalindrome1(s)).toBe("hpyyph");
  });

  it("动态规划 长字符串", () => {
    expect(longestPalindrome2(s)).toBe("hpyyph");
  });
});
