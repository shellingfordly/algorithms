export function countSubarrays(nums: number[], k: number): number {
    let sum = 0, count = 0, left = 0, res = 0

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        count++

        while (sum * count >= k) {
            sum -= nums[left]
            count--
            left++
        }

        res += i - left + 1
    }
    return res
};