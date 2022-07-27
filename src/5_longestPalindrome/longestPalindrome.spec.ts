import { longestPalindrome, longestPalindrome1 } from "./longestPalindrome";

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

  const s =
    "anugnxshgonmqydttcvmtsoaprxnhpmpovdolbidqiyqubirkvhwppcdyeouvgedccipsvnobrccbndzjdbgxkzdbcjsjjovnhpnbkurxqfupiprpbiwqdnwaqvjbqoaqzkqgdxkfczdkznqxvupdmnyiidqpnbvgjraszbvvztpapxmomnghfaywkzlrupvjpcvascgvstqmvuveiiixjmdofdwyvhgkydrnfuojhzulhobyhtsxmcovwmamjwljioevhafdlpjpmqstguqhrhvsdvinphejfbdvrvabthpyyphyqharjvzriosrdnwmaxtgriivdqlmugtagvsoylqfwhjpmjxcysfujdvcqovxabjdbvyvembfpahvyoybdhweikcgnzrdqlzusgoobysfmlzifwjzlazuepimhbgkrfimmemhayxeqxynewcnynmgyjcwrpqnayvxoebgyjusppfpsfeonfwnbsdonucaipoafavmlrrlplnnbsaghbawooabsjndqnvruuwvllpvvhuepmqtprgktnwxmflmmbifbbsfthbeafseqrgwnwjxkkcqgbucwusjdipxuekanzwimuizqynaxrvicyzjhulqjshtsqswehnozehmbsdmacciflcgsrlyhjukpvosptmsjfteoimtewkrivdllqiotvtrubgkfcacvgqzxjmhmmqlikrtfrurltgtcreafcgisjpvasiwmhcofqkcteudgjoqqmtucnwcocsoiqtfuoazxdayricnmwcg";

  it("暴力求解 长字符串", () => {
    expect(longestPalindrome(s)).toBe("hpyyph");
  });

  it("中心扩散 长字符串", () => {
    expect(longestPalindrome1(s)).toBe("hpyyph");
  });
});
