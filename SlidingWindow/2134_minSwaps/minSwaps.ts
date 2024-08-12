export function minSwaps(nums: number[]): number {
    let k = 0
    let count = 0
    let res = 0
    let len = nums.length

    // 获取所有1的数量
    for (let i = 0; i < len; i++) {
        if (nums[i] == 1) k++
    }

    // 从头开始滑动查找0最少的k位
    for (let i = 0; i < k; i++) {
        if (nums[i] == 0) count++
    }
    res = count
    for (let i = k, j = 0; i < len; i++, j++) {
        if (nums[i] == 0) count++
        if (nums[j] == 0) count--
        res = Math.min(res, count)
    }

    // 判断环形0最少的
    count = 0
    for (let i = len - k; i < len; i++) {
        if (nums[i] == 0) count++
    }

    for (let i = 0, j = len - k; i < k; i++, j++) {
        if (nums[i] == 0) count++
        if (nums[j] == 0) count--
        res = Math.min(res, count)
    }

    return res
};


export function minSwaps1(nums: number[]): number {
    let n = nums.length;
    let cnt = 0; // 1的个数
    for (let i = 0; i < n; i++) {
        cnt += nums[i]
    }

    if (cnt == 0) {
        return 0;
    }

    let cur = 0; // 0的个数
    for (let i = 0; i < cnt; ++i) {
        cur += (1 - nums[i]);
    }
    let ans = cur;
    for (let i = 0; i < n; ++i) {
        // 
        if (nums[i] == 0) {
            --cur;
        }
        if (nums[(i + cnt) % n] == 0) {
            ++cur;
        }
        ans = Math.min(ans, cur);
    }
    return ans;
}

export function minSwaps2(nums: number[]): number {
    let n = nums.length;
    let cnt = nums.reduce((p, n) => p + n, 0); // 1的个数
    let sum = 0; // 1个数内总和
    for (let i = 0; i < cnt; i++) {
        sum += nums[i]
    }
    let mx = sum;
    for (let l = 0, r = cnt % n; l < n; ++l, r = (++r) % n) {
        sum = sum - nums[l] + nums[r];
        mx = Math.max(mx, sum);
        if (mx == cnt) return 0;
    }
    return cnt - mx;
}
