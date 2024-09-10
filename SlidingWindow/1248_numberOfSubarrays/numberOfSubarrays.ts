
export function numberOfSubarrays(nums: number[], k: number): number {
    let left1 = 0, left2 = 0, res = 0, count1 = 0, count2 = 0

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] % 2 !== 0) count1++
        if (nums[right] % 2 !== 0) count2++

        while (count1 > k) {
            if (nums[left1] % 2 !== 0) count1--
            left1++
        }
        while (count2 >= k) {
            if (nums[left2] % 2 !== 0) count2--
            left2++
        }

        res += left2 - left1
    }

    return res
};

export function numberOfSubarrays1(nums: number[], k: number): number {
    const map = new Map()
    let count = 0, res = 0

    for (let i = 0; i < nums.length; i++) {
        map.set(count, (map.get(count) || 0) + 1)
        if (nums[i] % 2 !== 0) count++
        res += map.get(count - k) || 0
    }
    return res
}