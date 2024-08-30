export function longestNiceSubstring(s: string): string {
    const n = s.length;
    let maxPos = 0;
    let maxLen = 0;
    for (let i = 0; i < n; ++i) {
        let lower = 0;
        let upper = 0;
        for (let j = i; j < n; ++j) {
            if ('a' <= s[j] && s[j] <= 'z') {
                lower |= 1 << (s[j].charCodeAt(0) - 'a'.charCodeAt(0));
            } else {
                upper |= 1 << (s[j].charCodeAt(0) - 'A'.charCodeAt(0));
            }
            if (lower === upper && j - i + 1 > maxLen) {
                maxPos = i;
                maxLen = j - i + 1;
            }
        }
    }
    return s.slice(maxPos, maxPos + maxLen);
};

export function longestNiceSubstring1(s: string): string {
    let maxPos = 0;
    let maxLen = 0;

    var bitCount = function (n: number) {
        let ret = 0;
        while (n) {
            n &= n - 1;
            ret++;
        }
        return ret;
    };

    let types = 0;
    for (let i = 0; i < s.length; ++i) {
        types |= 1 << (s[i].toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0));
    }
    types = bitCount(types);

    for (let i = 1; i <= types; ++i) {
        const lowerCnt = new Array(26).fill(0);
        const upperCnt = new Array(26).fill(0);
        let cnt = 0;

        for (let l = 0, r = 0, total = 0; r < s.length; ++r) {
            let idx = s[r].toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0);

            if ('a' <= s[r] && s[r] <= 'z') {
                ++lowerCnt[idx];
                if (lowerCnt[idx] === 1 && upperCnt[idx] > 0) {
                    ++cnt;
                }
            } else {
                ++upperCnt[idx];
                if (upperCnt[idx] === 1 && lowerCnt[idx] > 0) {
                    ++cnt;
                }
            }

            total += (lowerCnt[idx] + upperCnt[idx]) === 1 ? 1 : 0;

            while (total > i) {
                idx = s[l].toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0);
                total -= (lowerCnt[idx] + upperCnt[idx]) === 1 ? 1 : 0;

                if ('a' <= s[l] && s[l] <= 'z') {
                    --lowerCnt[idx];

                    if (lowerCnt[idx] === 0 && upperCnt[idx] > 0) {
                        --cnt;
                    }
                } else {
                    --upperCnt[idx];

                    if (upperCnt[idx] === 0 && lowerCnt[idx] > 0) {
                        --cnt;
                    }
                }
                ++l;
            }

            if (cnt === i && r - l + 1 > maxLen) {
                maxPos = l;
                maxLen = r - l + 1;
            }
        }
    }

    return s.slice(maxPos, maxPos + maxLen);
}
