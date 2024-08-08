export function getAverages(nums: number[], k: number): number[] {
    let sum = 0;
    let arr: number[] = [];
    let len = nums.length;

    for (let i = 0; i < k && i < nums.length; i++) {
        sum += nums[i];
        arr[i] = -1;
    }

    if (len <= k) return arr;

    for (let i = k; i <= 2 * k; i++) {
        sum += nums[i];
    }
    arr[k] = Math.floor(sum / (2 * k + 1))

    for (let i = 2 * k + 1, j = 0; i < len; i++, j++) {
        sum += nums[i];
        sum -= nums[j]
        arr[i - k] = Math.floor(sum / (2 * k + 1))
    }

    for (let i = len - k; i < len; i++) arr[i] = -1;

    return arr;
};