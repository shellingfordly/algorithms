export function countFairPairs(nums: number[], lower: number, upper: number): number {
    let res = 0
    for (let left = 0; left < nums.length; left++) {
        for (let right = left + 1; right < nums.length; right++) {
            const sum = nums[left] + nums[right]
            if (lower <= sum && sum <= upper) res++
        }
    }
    return res
};


export function countFairPairs1(nums: number[], lower: number, upper: number): number {
    let res = 0
    let left = nums.length
    let right = nums.length

    nums = nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length; i++) {
        while (right > 0 && nums[right - 1] > upper - nums[i]) {
            right--
        }
        while (left > 0 && nums[left - 1] >= lower - nums[i]) {
            left--
        }
        res += Math.min(right, i) - Math.min(left, i)
    }
    return res
};