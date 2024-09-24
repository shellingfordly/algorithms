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

