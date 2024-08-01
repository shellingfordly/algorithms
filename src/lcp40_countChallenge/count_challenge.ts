export function maxmiumScore(cards: number[], cnt: number): number {
    cards = cards.sort((a, b) => b - a);
    let count = 0;
    let odd = -1;
    let even = -1
    for (let i = 0; i < cnt; i++) {
        const card = cards[i]
        count += card
        if (card % 2 == 0) even = card
        else odd = card
    }

    if (count % 2 == 0) return count

    let sum = 0
    for (let i = cnt; i < cards.length; i++) {
        const card = cards[i]
        if (card % 2 == 0) {
            if (odd != -1)
                sum = Math.max(sum, count - odd + card)
        } else {
            if (even != -1)
                sum = Math.max(sum, count - even + card)
        }
    }
    return sum;
};