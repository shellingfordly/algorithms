export function maximumCount(nums: number[]): number {
    let left = 0, right = nums.length - 1, res = 0
    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        if (nums[mid] < 0) left = mid + 1
        else right = mid - 1
    }
    res = left, left = 0, right = nums.length - 1
    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        if (nums[mid] <= 0) left = mid + 1
        else right = mid - 1
    }
    return Math.max(res, nums.length - left)
};

export function maximumCount1(nums: number[]): number {
    function search(target: number) {
        let left = 0, right = nums.length - 1
        while (left <= right) {
            const mid = Math.floor((left + right) / 2)
            if (nums[mid] < target) left = mid + 1
            else right = mid - 1
        }
        return left
    }

    return Math.max(search(0), nums.length - search(1))
};