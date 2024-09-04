export function countSubarrays(nums: number[], k: number): number {
    const map: Record<number, number> = {}
    let left = 0, max = 0, count = 0, res = 0

    for (let i = 0; i < nums.length; i++) {
        max = Math.max(max, nums[i])
    }

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        map[num] = (map[num] || 0) + 1

        while (map[max] >= k && left <= i) {
            count++
            map[nums[left]]--
            left++
        }

        res += count
    }
    return res
};

export function countSubarrays1(nums: number[], k: number): number {
    let left = 0, max = 0, max_count = 0, res = 0

    for (let i = 0; i < nums.length; i++) {
        max = Math.max(max, nums[i])
    }

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        if (num === max) max_count++

        while (max_count === k) {
            if (nums[left] === max) max_count--
            left++
        }

        res += left
    }
    return res
};