// 双循环
export function intersection(nums1: number[], nums2: number[]): number[] {
    const arr1 = new Set(nums1)
    const arr2 = new Set(nums2)
    const arr = new Set<number>()

    for (const num1 of arr1) {
        for (const num2 of arr2) {
            if (num1 === num2) arr.add(num1)
        }
    }
    return [...arr]
};

// 两数组去重
export function intersection1(nums1: number[], nums2: number[]): number[] {
    function binarySearch(arr1: number[], arr2: number[],) {
        const arr: number[] = [], len = arr2.length
        for (const num of arr1) {
            let left = 0, right = len - 1
            while (left <= right) {
                const mid = left + ((right - left) >> 1)
                if (arr2[mid] == num) {
                    arr.push(num)
                    left = mid + 1
                }
                else if (arr2[mid] < num) left = mid + 1
                else right = mid - 1
            }
        }
        return arr
    }
    const len1 = nums1.length, len2 = nums2.length
    const arr1 = [...new Set(len1 <= len2 ? nums1 : nums2)]
    const arr2 = [...new Set(len1 > len2 ? nums1 : nums2)].sort((a, b) => a - b)

    return binarySearch(arr1, arr2)
};

// 两数组长度比较
export function intersection2(nums1: number[], nums2: number[]): number[] {
    function binarySearch(arr1: number[], arr2: number[]) {
        const arr = new Set<number>(), len = arr2.length
        for (const num of arr1) {
            let left = 0, right = len - 1
            while (left <= right) {
                const mid = left + ((right - left) >> 1)
                if (arr2[mid] == num) {
                    arr.add(num)
                    left = mid + 1
                }
                else if (arr2[mid] < num) left = mid + 1
                else right = mid - 1
            }
        }
        return [...arr]
    }

    if (nums1 > nums2) {
        nums1 = nums1.sort((a, b) => a - b)
        return binarySearch(nums2, nums1)
    } else {
        nums2 = nums2.sort((a, b) => a - b)
        return binarySearch(nums1, nums2)
    }
};

// 去重直接查找
export function intersection3(nums1: number[], nums2: number[]): number[] {
    function search(set1: Set<number>, set2: Set<number>) {
        if (set1.size > set2.size) return search(set2, set1)

        const arr = new Set<number>()
        for (const num1 of set1) {
            if (set2.has(num1)) arr.add(num1)
        }
        return arr
    }

    return [...search(new Set(nums1), new Set(nums2))]
};