export function longestSubarray(nums: number[], limit: number): number {
    let left = 0, res = 0
    const isTrue = (arr: number[]) => {
        arr.sort((a, b) => a - b)
        return arr[arr.length - 1] - arr[0] <= limit
    }

    for (let right = 1; right <= nums.length; right++) {
        if (!isTrue(nums.slice(left, right)))
            left++
        res = Math.max(res, right - left)
    }
    return res
};

export function longestSubarray1(nums: number[], limit: number): number {
    let left = 0, right = 0, res = 0
    let max: number[] = []
    let min: number[] = []

    while (right < nums.length) {
        const num = nums[right]
        while (max.length && max[max.length - 1] < num)
            max.pop()
        while (min.length && min[min.length - 1] > num)
            min.pop()

        max.push(num)
        min.push(num)

        while (max.length && min.length && max[0] - min[0] > limit) {
            const old_num = nums[left]
            if (old_num === min[0]) min.shift()
            if (old_num === max[0]) max.shift()
            left++
        }

        res = Math.max(res, right - left + 1)
        right++
    }
    return res
};
