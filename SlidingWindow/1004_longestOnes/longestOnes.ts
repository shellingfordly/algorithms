export function longestOnes(nums: number[], k: number): number {
    let left = 0, sum = 0, res = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) sum++
        while (sum > k) {
            if (nums[left] == 0) sum--
            left++

        }
        res = Math.max(res, i - left + 1)
    }
    return res
};

export function longestOnes1(nums: number[], k: number): number {
    let left = 0, res = 0
    let arr: number[] = []

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) arr.push(i)
        if (arr.length > k) left = (arr.shift() || 0) + 1
        res = Math.max(res, i - left + 1)
    }
    return res
};