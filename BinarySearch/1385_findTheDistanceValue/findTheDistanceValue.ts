export function findTheDistanceValue(arr1: number[], arr2: number[], d: number): number {
    let count = 0
    for (let i = 0; i < arr1.length; i++) {
        let flag = true
        for (let j = 0; j < arr2.length; j++) {
            if (Math.abs(arr1[i] - arr2[j]) <= d) {
                flag = false;
                break
            }
        }

        if (flag) count++
    }
    return count
};

export function findTheDistanceValue1(arr1: number[], arr2: number[], d: number): number {
    let count = 0
    arr2 = arr2.sort((a, b) => a - b)

    for (let i = 0; i < arr1.length; i++) {
        if (isTrue(arr1[i])) count++
    }

    function isTrue(target: number) {
        let left = 0, right = arr2.length - 1
        while (left <= right) {
            const mid = Math.floor((left + right) / 2)
            if (Math.abs(target - arr2[mid]) <= d) {
                return false;
            }
            if (target > arr2[mid]) left = mid + 1
            else right = mid - 1
        }
        return true
    }

    return count
};
