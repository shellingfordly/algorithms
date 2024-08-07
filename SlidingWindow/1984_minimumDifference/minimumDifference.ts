export function minimumDifference(nums: number[], k: number): number {
    const len = nums.length;
    if (len == 1 || k == 1) return 0;

    nums = nums.sort((a, b) => a - b)
    let count = nums[k - 1] - nums[0];

    // for (let start = 1, end = k; end < len; start++, end++)
    for (let start = 1, end = k; start <= len - k; start++, end++) {
        count = Math.min(nums[end] - nums[start], count);
    }
    return count;
};