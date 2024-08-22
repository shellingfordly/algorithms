export function minOperations(nums: number[], x: number): number {
    let len = nums.length
    let left = 0, right = len - 1
    let sum = 0
    let res = Infinity

    while (left < len && sum < x) {
        sum += nums[left]
        if (sum == x) {
            res = Math.min(res, left + 1)
            break;
        }
        if (sum < x) left++
    }
    if (left == len && sum < x) return -1

    while (right >= 0) {
        sum += nums[right]
        while (sum > x && left >= 0) {
            sum -= nums[left]
            left--
        }
        if (sum == x) {
            res = Math.min(res, (left + 1) + (len - right))
        }
        right--
    }

    if (res !== Infinity) return res
    return -1
};