// 暴力解法
export function findIntegers(n: number): number {
    if (n == 0) return 1

    function isExistContinue1(num: number) {
        let a = Math.floor(num / 2)
        let last = num % 2

        let isExist = false
        while (a > 0) {
            let b = a % 2
            a = Math.floor(a / 2)
            if (b == 1 && last == 1) {
                isExist = true
                break
            }
            last = b
        }
        return isExist
    }

    let i = 1
    let count = 1
    while (i <= n) {
        const isExist = isExistContinue1(i)
        if (!isExist) count++
        i++
    }

    return count
};