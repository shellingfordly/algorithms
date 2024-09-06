export function continuousSubarrays(nums: number[]): number {
    let max = 0, min = Infinity, left = 0, res = 0
    const map: Record<number, number> = {}
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = (map[nums[i]] || 0) + 1
        let keys = Object.keys(map)
        max = Number(keys[keys.length - 1])
        min = Number(keys[0])

        while (Math.abs(max - min) > 2 && left <= i) {
            const v = nums[left]
            if (--map[v] === 0) delete map[v]

            if (max === v || min === v) {
                keys = Object.keys(map)
                max = Number(keys[keys.length - 1])
                min = Number(keys[0])
            }
            left++
        }
        res += i - left + 1

    }
    return res
};

export function continuousSubarrays1(nums: number[]): number {
    const map = new Map<number, number>()
    let left = 0, res = 0

    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1)

        while (Math.abs(Math.max(...map.keys()) - Math.min(...map.keys())) > 2 && left <= i) {
            const v = nums[left]
            if (map.get(v) === 1) map.delete(v)
            else map.set(v, map.get(v)! - 1)
            left++
        }
        res += i - left + 1

    }
    return res
};