export function maxSum(nums: number[], m: number, k: number): number {
    let sum = 0;
    let count = 0;
    let res = 0;
    let map: Record<number, number> = {}
    const setMap = (k: number, c = 1) => {
        if (map[k]) map[k] += c
        else map[k] = 1
    }
    const getSize = () => Object.values(map).filter(Boolean).length

    for (let i = 0; i < k; i++) {
        const num = nums[i]
        sum += num
        setMap(num);
    }
    count = getSize()
    if (count >= m) res = sum

    for (let i = k, j = 0; i < nums.length; i++, j++) {
        sum -= nums[j]
        setMap(nums[j], -1);

        sum += nums[i]
        setMap(nums[i]);

        count = getSize()
        // console.log("i:", i, nums[i], "j:", j, nums[j], 'count:', count, 'sum:', sum)

        if (count >= m)
            res = Math.max(res, sum)
    }
    return res;
};



export function maxSum1(nums: number[], m: number, k: number): number {
    let sum = 0;
    let res = 0;
    let map = new Map<number, number>()
    const setMap = (k: number, c = 1) => {
        map.set(k, (map.get(k) ?? 0) + c);
    }

    for (let i = 0; i < k; i++) {
        const num = nums[i]
        sum += num
        setMap(num);
    }
    if (map.size >= m) res = sum

    for (let i = k, j = 0; i < nums.length; i++, j++) {
        const num_j = nums[j]
        sum -= num_j

        if (map.get(num_j) == 1) {
            map.delete(num_j)
        } else {
            setMap(num_j, -1);
        }

        sum += nums[i]
        setMap(nums[i]);

        if (map.size >= m)
            res = Math.max(res, sum)
    }
    return res;
};
