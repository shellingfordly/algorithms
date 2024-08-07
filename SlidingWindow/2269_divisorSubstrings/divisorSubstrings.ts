export function divisorSubstrings(num: number, k: number): number {
    let count = 0;
    const str = num.toString();

    for (let start = 0, end = k; end <= str.length; end++, start++) {
        const n = Number(str.slice(start, end))
        if (n > 0 && num % n == 0) {
            count++;
        }
    }

    return count;
};