export function mySqrt(x: number): number {
    if (x === 1) return 1
    let left = 0, right = x, mid = 0

    while (left + 1 < right) {
        // mid = Math.floor((left + right) / 2)
        mid = left + ((right - left) >> 1)
        if (mid * mid > x) right = mid
        else left = mid
    }
    return left
};

