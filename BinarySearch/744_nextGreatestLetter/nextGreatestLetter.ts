export function nextGreatestLetter(letters: string[], target: string): string {
    let left = 0, right = letters.length - 1, mid = 0

    while (left <= right) {
        mid = Math.floor((left + right) / 2)
        if (letters[mid] <= target)
            left = mid + 1
        else right = mid - 1
    }

    if (left >= letters.length) return letters[0]
    return letters[left]
};