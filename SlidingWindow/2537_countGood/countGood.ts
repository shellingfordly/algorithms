export function countGood(nums: number[], k: number): number {
    let left = 0, res = 0, count = 0
    const map: Record<number, number> = {}

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        //有多少对满足arr[i] == arr[j]的数量
        count += map[num] || 0
        map[num] = (map[num] || 0) + 1

        //left右移动一位是否还能满足好子数组
        while (count - (map[nums[left]] - 1) >= k) {
            map[nums[left]]--
            count -= map[nums[left]]
            left++
        }
        if (count >= k) {
            res += left + 1
        }
    }

    return res
};