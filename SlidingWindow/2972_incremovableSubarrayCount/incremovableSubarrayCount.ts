export function incremovableSubarrayCount(nums: number[]): number {
    let left = 0, res = 0, len = nums.length

    while (left < len - 1) {
        if (nums[left] >= nums[left + 1]) break
        left++
    }

    if (left === len - 1) return len * (len + 1) / 2

    res += left + 2
    console.log(res)

    for (let right = len - 1; right > 0; right--) {
        if (right < len - 1 && nums[right] >= nums[right + 1]) break

        while (left >= 0 && nums[left] >= nums[right]) left--

        console.log(left, res)
        res += left + 2
    }

    return res
};