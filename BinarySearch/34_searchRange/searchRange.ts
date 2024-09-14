export function search(nums: number[], target: number): number {
    let left = 0, right = nums.length - 1
    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        if (nums[mid] === target) {
            return mid
        }
        if (nums[mid] > target) {
            right = mid - 1
        }
        else if (nums[mid] < target) {
            left = mid + 1
        }
    }
    return -1
};

export function searchRange(nums: number[], target: number): number[] {
    let left = 0, right = nums.length - 1
    let res: number[] = [-1, -1]

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        if (nums[mid] === target) {
            res[0] = mid
            right = mid - 1
        }
        else if (nums[mid] > target) {
            right = mid - 1
        }
        else if (nums[mid] < target) {
            left = mid + 1
        }
    }

    left = 0
    right = nums.length - 1

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        if (nums[mid] === target) {
            res[1] = mid
            left = mid + 1
        }
        else if (nums[mid] > target) {
            right = mid - 1
        }
        else if (nums[mid] < target) {
            left = mid + 1
        }
    }

    return res
};


export function searchRange1(nums: number[], target: number): number[] {
    let left = 0, right = nums.length - 1
    let res: number[] = [-1, -1]

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        if (nums[mid] >= target) {
            res[0] = mid
            right = mid - 1
        }
        else {
            left = mid + 1
        }
    }

    left = 0
    right = nums.length - 1

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        if (nums[mid] <= target) {
            res[1] = mid
            left = mid + 1
        }
        else {
            right = mid - 1
        }
    }

    if (res[0] <= res[1] && nums[res[0]] === target && nums[res[1]] == target) return res

    return [-1, -1]
};



export function searchRange2(nums: number[], target: number): number[] {
    function search(lower: boolean) {
        let left = 0, right = nums.length - 1, res = nums.length
        while (left <= right) {
            const mid = Math.floor((left + right) / 2)
            if (nums[mid] > target || (lower && nums[mid] >= target)) {
                res = mid
                right = mid - 1
            }
            else {
                left = mid + 1
            }
        }
        return res
    }

    let left = search(true)
    let right = search(false) - 1

    if (left <= right && right < nums.length && nums[left] === target && nums[right] === target) return [left, right]

    return [-1, -1]
};

export function searchRange3(nums: number[], target: number): number[] {
    let left = -1, right = -1

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (num === target) {
            if (left == -1) left = i
            right = i
        }
    }

    return [left, right]
};