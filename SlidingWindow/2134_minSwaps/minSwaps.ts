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