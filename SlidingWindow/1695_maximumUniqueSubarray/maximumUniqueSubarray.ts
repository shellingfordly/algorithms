export function maximumUniqueSubarray(nums: number[]): number {
    let res = 0
    let count = 0
    let left = 0
    let hash = new Set<number>()
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]

        if (hash.has(num)) {
            res = Math.max(res, count)
            while (hash.has(num)) {
                const old_num = nums[left]
                hash.delete(old_num)
                count -= old_num
                left++
            }
        }

        hash.add(num)
        count += num
    }

    res = Math.max(res, count)

    return res
};