export function totalFruit(fruits: number[]): number {
    const map = new Map<number, number>()
    let left = 0
    let res = 0
    for (let i = 0; i < fruits.length; i++) {
        const fruit = fruits[i];
        map.set(fruit, (map.get(fruit) || 0) + 1)

        if (map.size > 2) {
            res = Math.max(res, i - left)
            while (map.size > 2) {
                const oldFruit = fruits[left++];
                const count = map.get(oldFruit)!
                if (count == 1) map.delete(oldFruit)
                else map.set(oldFruit, count - 1)
            }
        }
    }

    if (map.size <= 2) res = Math.max(res, fruits.length - left)

    return res
};