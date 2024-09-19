export function searchInsert(nums: number[], target: number): number {

    let left = 0, right = nums.length - 1
    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        const value = nums[mid]

        if (value === target) return mid
        else if (value > target) right = mid - 1
        else left = mid + 1
    }

    return left
};