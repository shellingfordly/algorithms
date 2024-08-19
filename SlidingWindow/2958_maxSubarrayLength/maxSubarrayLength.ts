export function maxSubarrayLength(nums: number[], k: number): number {
    let countMap = new Map<number, number>()
    let left = 0
    let res = 0

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        let count = countMap.get(num) || 0;

        if (count == k) {
            res = Math.max(res, i - left)
            while (count >= k) {
                const old_num = nums[left];
                const old_count = countMap.get(old_num) || 0;
                countMap.set(old_num, old_count - 1)
                left++
                count = countMap.get(num)!
            }
        }
        countMap.set(num, count + 1)
    }

    res = Math.max(res, nums.length - left)

    return res
};


export function maxSubarrayLength1(nums: number[], k: number): number {
    let countMap: Record<number, number> = {}
    let left = 0
    let res = 0

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        countMap[num] = (countMap[num] || 0) + 1

        while (countMap[num] > k) {
            countMap[nums[left]] -= 1
            left++
        }
        res = Math.max(res, i - left + 1)
    }

    return res
};

