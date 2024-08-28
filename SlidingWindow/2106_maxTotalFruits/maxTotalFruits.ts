export function maxTotalFruits(fruits: number[][], startPos: number, k: number): number {
    let res = 0
    let count = 0
    let left = 0

    const step = (left: number, right: number) => {
        return Math.min(Math.abs(startPos - fruits[right][0]), Math.abs(startPos - fruits[left][0])) + fruits[right][0] - fruits[left][0];
    };

    for (let right = 0; right < fruits.length; right++) {
        count += fruits[right][1]

        while (left <= right && step(left, right) > k) {
            count -= fruits[left][1];
            left++
        }
        res = Math.max(res, count)
    }
    return res
};