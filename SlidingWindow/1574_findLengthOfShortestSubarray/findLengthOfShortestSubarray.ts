export function findLengthOfShortestSubarray(arr: number[]): number {
    let res = Infinity
    let len = arr.length
    let left = -1
    let right = len - 1

    for (let i = 1; i < len; i++) {
        if (arr[i] < arr[i - 1]) {
            left = i - 1
            break
        }
    }
    if (left === -1) return 0;
    res = len - left - 1

    while (arr[right - 1] <= arr[right]) {
        while (left > 0 && arr[right] < arr[left]) {
            left--
        }
        res = Math.min(res, right - left - 1)
        right--
    }

    if (arr[right] >= arr[left]) {
        res = Math.min(res, right - left - 1)
    }

    return res
};

export function findLengthOfShortestSubarray1(arr: number[]): number {
    let len = arr.length
    let res = 0
    let left = 0
    let right = len - 1

    while (right >= 0 && arr[right - 1] <= arr[right]) right--
    if (right == 0) return 0
    res = right

    while (left == 0 || arr[left - 1] <= arr[left]) {
        while (right < len && arr[right] < arr[left]) right++
        res = Math.min(res, right - left - 1)
        left++
    }
    return res
}