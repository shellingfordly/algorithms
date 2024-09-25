export function answerQueries(nums: number[], queries: number[]): number[] {
    function search(query: number) {
        let sum = 0, left = 0, res = 0
        for (let i = 0; i < nums.length; i++) {
            sum += nums[i]
            while (sum > query) {
                sum -= nums[left]
                left++
            }
            res = Math.max(res, i - left + 1)
        }
        return res
    }
    nums = nums.sort((a, b) => a - b)
    return queries.map(v => search(v))
};

export function answerQueries1(nums: number[], queries: number[]): number[] {
    nums = nums.sort((a, b) => a - b)
    const arr: number[] = []
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        arr.push(sum)
    }
    function search(query: number) {
        let left = 0, right = nums.length - 1
        while (left <= right) {
            const mid = left + ((right - left) >> 1)
            if (arr[mid] <= query) left = mid + 1
            else right = mid - 1
        }
        return left
    }
    return queries.map(v => search(v))
};