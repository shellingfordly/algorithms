export function longestNiceSubarray(nums: number[]): number {
    let res = 1
    let left = 0
    let indexList = [0]

    for (let i = 1; i < nums.length; i++) {
        let count = 0
        for (let j = 0; j < indexList.length; j++) {
            if ((nums[i] & nums[indexList[j]]) !== 0) {
                left = indexList[j] + 1
                count++
            }
        }

        if (count > 0) indexList = indexList.slice(count)
        indexList.push(i)

        res = Math.max(res, i - left + 1)
    }

    return res
};

export function longestNiceSubarray1(nums: number[]): number {
    let res = 1
    let left = 0
    let indexList = [0]
    let count = 0

    for (let i = 1; i < nums.length; i++) {

        for (let j = count; j < indexList.length; j++) {
            if ((nums[i] & nums[indexList[j]]) !== 0) {
                left = Math.max(left, indexList[j] + 1)
                count++
            }
        }
        indexList.push(i)
        res = Math.max(res, i - left + 1)
    }

    return res
};

export function longestNiceSubarray2(nums: number[]): number {
    let res = 0, left = 0, sum = 0
    for (let i = 0; i < nums.length; i++) {
        while (sum & nums[i]) {
            sum ^= nums[left]
            left++
        }
        sum |= nums[i]
        res = Math.max(res, i - left + 1)
    }
    return res
};
