export function divisorSubstrings(num: number, k: number): number {
    const isBeauty = (n: string) => Number(n) > 0 && num % Number(n) == 0;

    let count = 0;
    const str = num.toString();

    for (let start = 0, end = k; end <= str.length; end++, start++) {
        if (isBeauty(str.slice(start, end))) {
            count++;
        }
    }

    return count;
};