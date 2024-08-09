export function maxScore(cardPoints: number[], k: number): number {
    let len = cardPoints.length

    const left = cardPoints.slice(0, k)
    const right = cardPoints.slice(len - k, len)
    const newCard = [...right, ...left]

    let sum = 0
    let res = 0
    for (let i = 0; i < k; i++) {
        sum += newCard[i]
    }
    res = sum
    for (let i = k, j = 0; i < newCard.length; i++, j++) {
        sum += newCard[i]
        sum -= newCard[j]
        res = Math.max(sum, res)
    }

    return res
};

export function maxScore1(cardPoints: number[], k: number): number {
    let len = cardPoints.length
    let sum = 0
    let res = 0

    for (let i = len - k; i < len; i++) {
        sum += cardPoints[i]
    }
    res = sum
    for (let i = 0, j = len - k; i < k; i++, j++) {
        sum += cardPoints[i]
        sum -= cardPoints[j]
        res = Math.max(res, sum)
    }
    return res
};