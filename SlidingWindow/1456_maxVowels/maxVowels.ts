export function maxVowels(s: string, k: number): number {
    const vowel = "aeiou"
    let count = 0;
    let sum = 0;

    for (let i = 0; i < k; ++i) {
        if (vowel.includes(s[i])) count++
    }

    sum = count

    for (let i = k; i < s.length; ++i) {
        if (vowel.includes(s[i - k])) count--
        if (vowel.includes(s[i])) count++

        sum = Math.max(sum, count)
    }

    return sum;
};


export function maxVowels1(s: string, k: number): number {
    const vowel = "aeiou"
    let short = 0;
    let count = 0;
    let sum = 0;
    let tag = true;

    for (let i = 0; i < s.length; i++) {
        if (vowel.includes(s[i])) {
            count++;
            tag = false
        }
        else {
            if (tag) short = i
        }

        if (i - short == k - 1) {
            sum = Math.max(sum, count);
            count = 0;
            short++
            i = short - 1;
        }
    }
    return sum;
};