
export function minimumRecolors(blocks: string, k: number): number {
    let wCount = 0
    let sum = 0

    for (let i = 0; i < k; i++) {
        if (blocks[i] == "W") wCount++
    }

    sum = wCount

    for (let i = k, j = 0; i < blocks.length; i++, j++) {
        if (blocks[i] == "W") wCount++
        if (blocks[j] == "W") wCount--

        sum = Math.min(sum, wCount)
    }

    return sum;
};