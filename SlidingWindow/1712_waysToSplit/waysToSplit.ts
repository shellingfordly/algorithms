export function waysToSplit(nums: number[]): number {
    const sm: number[] = []
    let len = nums.length, sum = 0
    let left1 = 1, left2 = 1, res = 0
    for (let i = 0; i < len; i++) {
        sm.push(sum)
        sum += nums[i]
    }
    sm.push(sum)
    for (let right = 2; right < len; right++) {
        while (left1 < len && sm[left1] <= sm[right] - sm[left1])
            left1++
        while (left2 < left1 && sm[right] - sm[left2] > sm[len] - sm[right])
            left2++
        res += left1 - left2
    }
    return res % (10 ** 9 + 7)
}