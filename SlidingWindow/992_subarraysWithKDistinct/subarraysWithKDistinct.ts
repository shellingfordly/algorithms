export function subarraysWithKDistinct(nums: number[], k: number): number {
    const his1 = new Map<number, number>()
    const his2 = new Map<number, number>()
    let res = 0, left1 = 0, left2 = 0
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        his1.set(num, (his1.get(num) || 0) + 1)
        his2.set(num, (his2.get(num) || 0) + 1)

        while (his1.size > k) {
            const old_num = nums[left1]
            his1.set(old_num, (his1.get(old_num) || 0) - 1)
            if (his1.get(old_num) === 0) his1.delete(old_num)
            left1++
        }

        while (his2.size >= k) {
            const old_num = nums[left2]
            his2.set(old_num, (his2.get(old_num) || 0) - 1)
            if (his2.get(old_num) === 0) his2.delete(old_num)
            left2++
        }

        res += left2 - left1
    }

    return res
};