export function maxFrequencyScore(nums: number[], k: number): number {
    let res = 0
    nums = nums.sort((a, b) => a - b)
    const hash = new Set<number>()
    for (let i = 0; i < nums.length; i++) {
        hash.add(nums[i])
    }

    for (const num of hash) {
        let step = 0
        let left = 0
        for (let j = 0; j < nums.length; j++) {
            step += Math.abs(nums[j] - num)
            while (step > k) {
                step -= Math.abs(nums[left] - num)
                left++
            }
            res = Math.max(res, Math.abs(j - left) + 1)
        }
    }
    return res
};

export function maxFrequencyScore1(nums: number[], k: number): number {
    nums = nums.sort((a, b) => a - b)
    let left = 0
    let res = 0
    let s = 0
    for (let right = 0; right < nums.length; right++) {
        s += nums[right] - nums[Math.floor((left + right) / 2)]
        while (s > k) {
            s += nums[left] - nums[Math.floor((left + right + 1) / 2)]
            left++
        }
        res = Math.max(res, right - left + 1)
    }
    return res
}