export function findMaxAverage(nums: number[], k: number): number {

    let count = 0;
    let sum = 0;
    for (let i = 0; i < k; i++) {
        count += nums[i]
    }
    sum = count / k;

    for (let i = 0, j = k; j < nums.length; i++, j++) {
        count -= nums[i];
        count += nums[j];
        sum = Math.max(sum, count / k);
    }
    return sum;
};