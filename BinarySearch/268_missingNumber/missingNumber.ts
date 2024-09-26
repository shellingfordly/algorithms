export function missingNumber(nums: number[]): number {
    const n = nums.length
    nums = nums.sort((a, b) => a - b)

    for (let i = 0; i <= n; i++) {
        let left = 0, right = n - 1, flag = true
        while (left <= right) {
            const mid = left + ((right - left) >> 1)
            if (nums[mid] === i) {
                flag = false;
                break;
            }
            else if (mid > i) right = mid - 1
            else left = mid + 1
        }
        if (flag) return i
    }

    return -1
};