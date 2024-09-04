export function numSubarrayProductLessThanK(nums: number[], k: number): number {
    let sum = 1
    let count = 0
    let left = 0
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        sum = sum * num

        while (sum >= k && left <= i) {
            sum = sum / nums[left]
            left++
        }

        count += i - left + 1
    }

    return count
};