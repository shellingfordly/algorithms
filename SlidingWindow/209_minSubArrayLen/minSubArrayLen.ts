export function minSubArrayLen(target: number, nums: number[]): number {
    let res = Infinity
    let left = 0
    let count = 0

    for (let i = 0; i < nums.length; i++) {
        count += nums[i]

        while (count >= target) {
            res = Math.min(res, i - left + 1)

            count -= nums[left]
            left++
        }

    }
    if (res === Infinity) return 0

    return res
};