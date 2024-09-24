// 暴力解法
export function successfulPairs(spells: number[], potions: number[], success: number): number[] {
    const pairs: number[] = []
    for (let i = 0; i < spells.length; i++) {
        pairs[i] = 0
        for (let j = 0; j < potions.length; j++) {
            if (spells[i] * potions[j] >= success) pairs[i]++
        }
    }
    return pairs
};

// 二分查找
export function successfulPairs1(spells: number[], potions: number[], success: number): number[] {
    const pairs: number[] = []
    potions = potions.sort((a, b) => a - b)

    function search(t: number) {
        let left = 0, right = potions.length - 1
        while (left <= right) {
            const mid = Math.floor((left + right) / 2)
            if (t * potions[mid] >= success) right = mid - 1
            else left = mid + 1
        }
        return left
    }

    for (let i = 0; i < spells.length; i++) {
        pairs[i] = potions.length - search(spells[i])
    }
    return pairs
};

// 二分查找 - 右移操作
export function successfulPairs2(
    spells: number[],
    potions: number[],
    success: number
): number[] {
    potions = potions.sort((a, b) => a - b);

    function search(t: number) {
        let left = 0, right = potions.length - 1;
        while (left <= right) {
            const mid = left + ((right - left) >> 1);
            if (t * potions[mid] >= success) right = mid - 1;
            else left = mid + 1;
        }
        return left;
    }

    return spells.map((v) => potions.length - search(v));
}

// 二分查找 - 右移操作
export function successfulPairs3(
    spells: number[],
    potions: number[],
    success: number
): number[] {
    function lowerBound(nums: number[], target: number) {
        let left = -1, right = nums.length;
        while (left + 1 < right) {
            const mid = left + ((right - left) >> 1);
            if (nums[mid] < target) {
                left = mid;
            } else {
                right = mid;
            }
        }
        return right;
    }

    const m = potions.length;
    potions.sort((a, b) => a - b);
    return spells.map(x => m - lowerBound(potions, success / x));
}