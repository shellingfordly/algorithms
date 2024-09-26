// 行列分开二分
export function countNegatives(grid: number[][]): number {
    function binarySearch(arr: number[]) {
        let left = 0, right = arr.length - 1
        while (left <= right) {
            const mid = left + ((right - left) >> 1)
            if (arr[mid] >= 0) left = mid + 1
            else right = mid - 1
        }
        return left
    }

    let m = grid.length, n = grid[0].length, count = 0
    const mid = binarySearch(grid.map(l => l[0]))
    count += (m - mid) * n

    for (let i = 0; i < mid; i++) {
        const arr = grid[i]
        count += arr.length - binarySearch(arr)
    }

    return count
};

// 遍历grid直接二分
export function countNegatives1(grid: number[][]): number {
    function binarySearch(arr: number[]) {
        let left = 0, right = arr.length - 1
        while (left <= right) {
            const mid = left + ((right - left) >> 1)
            if (arr[mid] >= 0) left = mid + 1
            else right = mid - 1
        }
        return left
    }

    let count = 0

    for (let i = 0; i < grid.length; i++) {
        const arr = grid[i]
        count += arr.length - binarySearch(arr)
    }

    return count
};

// 分开写
export function countNegatives2(grid: number[][]): number {
    let count = 0

    // 列
    let left = 0, right = grid.length - 1
    while (left <= right) {
        const mid = left + ((right - left) >> 1)
        if (grid[mid][0] >= 0) left = mid + 1
        else right = mid - 1
    }
    count += (grid.length - left) * grid[0].length

    // 行
    for (let i = 0; i < left; i++) {
        const arr = grid[i]
        let l = 0, r = arr.length - 1
        while (l <= r) {
            const mid = l + ((r - l) >> 1)
            if (arr[mid] >= 0) l = mid + 1
            else r = mid - 1
        }
        count += arr.length - l
    }

    return count
};


export function countNegatives3(grid: number[][]): number {
    function binarySearch(arr: number[]) {
        let left = 0, right = arr.length - 1
        while (left <= right) {
            const mid = left + ((right - left) >> 1)
            if (arr[mid] >= 0) left = mid + 1
            else right = mid - 1
        }
        return left
    }

    let count = 0
    let n = grid[0].length

    for (let i = grid.length - 1; i >= 0; i--) {
        const arr = grid[i]
        if (arr[0] < 0) {
            count += n
            continue
        }
        count += n - binarySearch(arr)
    }
    
    return count
}