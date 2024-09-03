export function shortestSeq(big: number[], small: number[]): number[] {
    const sMap: Record<number, number> = {}
    const bMap: Record<number, number> = {}
    let left = 0
    let less = 0
    let res: number[] = []

    for (let i = 0; i < small.length; i++) {
        if (!sMap[small[i]]) less++
        sMap[small[i]] = (sMap[small[i]] || 0) + 1
    }

    for (let i = 0; i < big.length; i++) {
        bMap[big[i]] = (bMap[big[i]] || 0) + 1
        if (bMap[big[i]] === sMap[big[i]]) less--

        while (less === 0) {
            if (res[0] === undefined || i - left < res[1] - res[0]) res = [left, i]

            if (bMap[big[left]]-- === sMap[big[left]]) less++

            left++
        }
    }

    return res
};