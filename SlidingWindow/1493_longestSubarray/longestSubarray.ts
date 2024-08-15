export function longestSubarray(nums: number[]): number {
    let count = 0
    let res = 0
    let flag = -1

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        if (num == 1) count++
        if (num == 0) {
            if (flag != -1) {
                res = Math.max(res, count)
                count = i - flag - 1
            }
            flag = i
        }
    }

    if (flag == -1) res = Math.max(res, count - 1)
    else res = Math.max(res, count)

    return res
};