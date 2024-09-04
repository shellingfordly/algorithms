export function countCompleteSubarrays(nums: number[]): number {
    const m = new Set(nums).size;
    let cnt = new Map();
    let ans = 0, left = 0;
    for (const v of nums) { // 枚举子数组右端点 v=nums[i]
        cnt.set(v, (cnt.get(v) ?? 0) + 1);
        while (cnt.size === m) {
            const x = nums[left++];
            cnt.set(x, cnt.get(x) - 1);
            if (cnt.get(x) === 0) cnt.delete(x);
        }
        ans += left; // 子数组左端点 < left 的都是合法的
    }
    return ans;
};