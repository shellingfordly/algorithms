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

    for (let i = 1; i < nums.length; i++) {

        for (let j = indexList.length - 1; j > 0; j--) {
            if ((nums[i] & nums[indexList[j]]) !== 0) {
                left = indexList[j] + 1
                break
            }
        }
        indexList.push(i)
        res = Math.max(res, i - left + 1)
    }

    return res
};


