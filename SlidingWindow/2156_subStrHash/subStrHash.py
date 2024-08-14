class Solution:
    def subStrHash(
        self, s: str, power: int, modulo: int, k: int, hashValue: int
    ) -> str:
        arr = []
        for i in range(len(s) - k + 1):
            c = 0
            j = i
            for j in range(i, j + k):
                    c += (ord(s[j]) - ord("a") + 1) * pow(power, j - i)
            if c % modulo == hashValue:
                return s[i : i + k]