export function getSubarrayBeauty(nums: number[], k: number, x: number): number[] {
    let res: number[] = [];

    let arr: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (i >= k) arr.shift();
        arr.push(num);

        if (arr.length == k) {
            const _arr = [...arr].sort((a, b) => a - b);
            const value = _arr[x - 1];
            res.push(value < 0 ? value : 0);
        }
    }

    return res;
};

export function getSubarrayBeauty1(nums: number[], k: number, x: number): number[] {
    const BIAS = 50;
    let n = nums.length;
    let cnt = Array.from({ length: BIAS * 2 + 1 }).fill(0) as number[];
    let ans = Array.from({ length: n - k + 1 }).fill(0) as number[];

    for (let i = 0; i < k - 1; ++i) // 先往窗口内添加 k-1 个数
    {
        ++cnt[nums[i] + BIAS];
    }

    for (let i = k - 1; i < n; ++i) //
    {
        ++cnt[nums[i] + BIAS]; // 进入窗口（保证窗口有恰好 k 个数）
        let left = x;

        for (let j = 0; j < BIAS; ++j) { // 暴力枚举负数范围 [-50,-1]
            left -= cnt[j];
            if (left <= 0) { // 找到美丽值
                ans[i - k + 1] = j - BIAS;
                break;
            }
        }

        --cnt[nums[i - k + 1] + BIAS]; // 离开窗口
    }

    return ans;
}