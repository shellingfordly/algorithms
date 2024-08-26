export function longestEqualSubarray(nums: number[], k: number): number {
    let res = 0

    for (let i = 0; i < nums.length; i++) {
        let j = i + 1
        let count = 0
        while (j < nums.length) {
            if (count > k) break;
            if (nums[j] !== nums[i]) count++
            j++
        }
        res = Math.max(res, j - i - count)
    }

    return res
};

export function longestEqualSubarray1(nums: number[], k: number): number {
    let res = 0
    let count: number[] = Array(nums.length + 1).fill(0)

    for (let left = 0, right = 0; right < nums.length; right++) {
        count[nums[right]]++
        while (right - left + 1 - count[nums[left]] > k) {
            count[nums[left]]--
            left++
        }
        res = Math.max(res, count[nums[right]])
    }

    return res
};