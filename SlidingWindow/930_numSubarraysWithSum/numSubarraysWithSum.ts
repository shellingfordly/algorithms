export function numSubarraysWithSum(nums: number[], goal: number): number {
    let sum = 0;
    const cnt = new Map<number, number>();
    let ret = 0;
    for (const num of nums) {
        cnt.set(sum, (cnt.get(sum) || 0) + 1);
        sum += num;
        ret += cnt.get(sum - goal) || 0;
    }
    return ret;
};

export function numSubarraysWithSum1(nums: number[], goal: number): number {
    let left1 = 0, left2 = 0, sum1 = 0, sum2 = 0, res = 0;

    for (let right = 0; right < nums.length; right++) {
        sum1 += nums[right];
        while (left1 <= right && sum1 > goal) {
            sum1 -= nums[left1];
            left1++;
        }
        sum2 += nums[right];
        while (left2 <= right && sum2 >= goal) {
            sum2 -= nums[left2];
            left2++;
        }
        res += left2 - left1;
    }

    return res;
}