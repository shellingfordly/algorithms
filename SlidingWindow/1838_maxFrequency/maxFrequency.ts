export function maxFrequency(nums: number[], k: number): number {
    nums = nums.sort((a, b) => b - a)

    let len = nums.length
    let res = 1

    for (let i = 0; i < len; i++) {
        if (len - i <= res) break
        let k1 = k

        for (let j = i + 1; j < len; j++) {
            k1 -= nums[i] - nums[j]
            if (k1 < 0) break
            res = Math.max(res, j - i + 1)
        }
    }
    return res
}

export function maxFrequency1(nums: number[], k: number): number {
    let res = 0
    let sum = 0
    let max = 0
    let left = 0
    nums = nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        max = Math.max(max, nums[i])
        while (max * (i - left + 1) - sum > k) {
            sum -= nums[left]
            left++
        }
        res = Math.max(res, i - left + 1)
    }
    return res
}