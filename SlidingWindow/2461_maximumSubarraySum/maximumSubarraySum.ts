// 错误
// export function maximumSubarraySum(nums: number[], k: number): number {
//     let res = 0
//     let sum = 0
//     const hash = new Set<number>()

//     for (let i = 0; i < k; i++) {
//         const num = nums[i]
//         hash.add(num)
//         sum += nums[i]
//     }
//     if (hash.size == k) res = sum
//     console.log(hash)

//     for (let i = k, j = 0; i < nums.length; i++, j++) {
//         const num_i = nums[i];
//         const num_j = nums[j];
//         sum += num_i
//         sum -= num_j
//         hash.delete(num_j)
//         hash.add(num_i)
//         console.log(hash)

//         if (hash.size == k) {
//             res = Math.max(sum, res)
//         }
//     }

//     return res
// };

export function maximumSubarraySum(nums: number[], k: number): number {
    let res = 0
    let sum = 0
    const map = new Map<number, number>()

    const setMap = (n: number, c = 1) => map.set(n, (map.get(n) || 0) + c)

    for (let i = 0; i < k; i++) {
        const num = nums[i]
        setMap(num)
        sum += nums[i]
    }
    if (map.size == k) res = sum

    for (let i = k, j = 0; i < nums.length; i++, j++) {
        const num_i = nums[i];
        sum += num_i
        setMap(num_i)

        const num_j = nums[j];
        sum -= num_j

        if (map.get(num_j) == 1) map.delete(num_j)
        else setMap(num_j, -1)

        if (map.size == k) {
            res = Math.max(sum, res)
        }
    }

    return res
};
